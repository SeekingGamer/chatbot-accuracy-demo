import fs from "fs";
import path from "path";

type KnowledgeItem = {
  id: string;
  keywords: string[];
  content: string;
};

export function retrieveContext(query: string): string | null {
  const filePath = path.join(process.cwd(), "src/data/knowledge.ts");
  const data = fs.readFileSync(filePath, "utf-8");
  const knowledge: KnowledgeItem[] = JSON.parse(data);

  const queryLower = query.toLowerCase();

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of knowledge) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (queryLower.includes(keyword)) {
        score++;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  // Require at least 2 keyword matches
  if (bestScore >= 2 && bestMatch) {
    return bestMatch.content;
  }

  return null;
}
