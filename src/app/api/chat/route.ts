import { NextResponse } from "next/server";
import { searchKnowledge } from "@/lib/vectorStore";

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1️. Find relevant knowledge
  const result = await searchKnowledge(message);

  const context = result?.text ?? "No relevant information found.";

  // 2️. Call your chat model
  const response = await fetch("http://localhost:1234/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful support chatbot. Answer ONLY using the provided context."
        },
        {
          role: "system",
          content: `Context: ${context}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.2
    })
  });

  const data = await response.json();

  return NextResponse.json({
    reply: data.choices[0].message.content
  });
}
