import TodoList from "./_components/todo-list";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-4 h-screen">
      <h1>tRPC + Next.js App Router</h1>
      <TodoList />
    </main>
  );
}
