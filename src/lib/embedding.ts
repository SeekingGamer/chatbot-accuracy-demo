export async function createEmbedding(text: string): Promise<number[]> {
  const response = await fetch("http://localhost:1234/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-embedding-nomic-embed-text-v1.5",
      input: text
    })
  });

  const data = await response.json();
  return data.data[0].embedding;
}
