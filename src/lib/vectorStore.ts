import { knowledgeBase } from "../data/knowledge"
import { createEmbedding } from "./embedding";
import { cosineSimilarity } from "./similarity";

let embeddedKnowledge: {
  id: string;
  text: string;
  embedding: number[];
}[] = [];

export async function initVectorStore() {
  if (embeddedKnowledge.length > 0) return;

  for (const item of knowledgeBase) {
    const embedding = await createEmbedding(item.content);
    embeddedKnowledge.push({
      id: item.id,
      text: item.content,
      embedding
    });
  }
}

export async function searchKnowledge(query: string) {
  await initVectorStore();

  const queryEmbedding = await createEmbedding(query);

  const scored = embeddedKnowledge.map(item => ({
    ...item,
    score: cosineSimilarity(queryEmbedding, item.embedding)
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored[0]; // best match
}
