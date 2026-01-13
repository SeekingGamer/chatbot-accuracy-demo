"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>AI Chatbot (Test)</h1>

      <textarea
        placeholder="Ask a question"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "100%", marginTop: "1rem" }}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        style={{ marginTop: "1rem" }}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {reply && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <strong>Reply:</strong>
          <p>{reply}</p>
        </div>
      )}
    </main>
  );
}
