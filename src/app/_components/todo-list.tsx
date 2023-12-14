"use client";

import { useState } from "react";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation();

  const [content, setContent] = useState("");

  return (
    <div>
      <div className="border m-2 text-white" >{JSON.stringify(getTodos.data)}</div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          className="text-black"
        />
        <button
          onClick={async () => {
            if (content.length) {
              addTodo.mutate(content);
              setContent("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
