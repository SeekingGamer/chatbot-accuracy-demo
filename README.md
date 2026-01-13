This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (comes with Node.js)
- LM Studio installed and running
- Optional: Git for version control

---

### LM Studio Setup

1. **Download and install LM Studio**  
   [LM Studio Download](https://lmstudio.ai) (Make sure it is running locally on `http://localhost:1234`)

2. **Start LM Studio** and make sure your models are loaded. You can check running models with:

```bash
curl http://localhost:1234/v1/models
```

3. **Configure LM Studio**: Ensure the chatbot application is configured to communicate with LM Studio. Update the `src/lib/llm.ts` file to point to the correct LM Studio endpoint if necessary.

---

### Additional Documentation

- **Knowledge Base**: The `src/data/knowledge.ts` file contains the knowledge base used by the chatbot. You can update this file to add or modify the chatbot's knowledge.
- **Embedding Logic**: The `src/lib/embedding.ts` file handles text embeddings. Ensure your embeddings align with the LM Studio model.
- **Prompt Engineering**: The `src/lib/prompt.ts` file defines the chatbot's prompts. Modify this file to customize the chatbot's behavior.
- **Similarity Search**: The `src/lib/similarity.ts` file is used for finding the most relevant knowledge base entries.
- **Vector Store**: The `src/lib/vectorStore.ts` file manages the storage of vectorized data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
