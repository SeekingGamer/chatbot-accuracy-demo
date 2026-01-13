import { NextResponse } from "next/server";
import { searchKnowledge } from "@/lib/vectorStore";
import { SYSTEM_PROMPT } from "@/lib/prompt";

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1. Search embeddings
  const result = await searchKnowledge(message);

  if (!result || !result.text || result.text.length < 30) {
    return NextResponse.json({
      reply:
        "I don’t have information about that. Please contact support at support@skywalkertech.com"
    });
  }

  const context = result.text;

  // 2. Call LM Studio model
  const response = await fetch("http://localhost:1234/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "qwen2.5-1.5b-instruct",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "system",
          content: `Context:\n${context}`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.1
    })
  });

  const data = await response.json();

  return NextResponse.json({
    reply: data.choices[0].message.content
  });
}
