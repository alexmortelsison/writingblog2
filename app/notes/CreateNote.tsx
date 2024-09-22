"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setcontent("");
    setTitle("");
  };

  return (
    <form onSubmit={create}>
      <h2>Create a new note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
