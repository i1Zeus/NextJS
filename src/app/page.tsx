import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

const getTodos = () => {
  return prisma.todo.findMany();
};

export default async function Home() {
  const todos = await getTodos();

  async function toggleTodo(id: string, completed: boolean) {
    "use server";
    await prisma.todo.update({
      where: { id },
      data: { completed },
    });
  }

  return (
    <main>
      <header className="text-2xl flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href={"/new"}
          className="bg-transparent border border-light-300 rounded-md px-2 py-1 hover:bg-slate-400 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  );
}
