const LM_STUDIO_URL = "http://localhost:1234/v1/chat/completions";

export async function callLLM(
  systemPrompt: string,
  context: string,
  userMessage: string
) {
  const response = await fetch(LM_STUDIO_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "local-model", // LM Studio ignores name, but required
      messages: [
        { role: "system", content: systemPrompt },
        { role: "system", content: `Context:\n${context}` },
        { role: "user", content: userMessage },
      ],
      temperature: 0, // 🔥 accuracy > creativity
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
