import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  const description = data.get("description")?.valueOf();

  if (typeof title != "string" || title.length == 0) {
    return;
  }

  if (typeof description != "string") {
    return;
  }

  await prisma.todo.create({
    data: {
      title,
      description,
      completed: false,
    },
  });

  redirect("/");
}

export default function page() {
  return (
    <>
      <main className="container flex flex-col items-center justify-center">
        <header className="text-2xl flex justify-between items-center mb-4">
          <h1 className="text-2xl">New Todo</h1>
        </header>
        <form action={createTodo} className="flex flex-col gap-[10px]">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            className="border border-light-300 rounded-md bg-transparent px-2 py-1"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="border border-light-300 rounded-md min-h-[100px] bg-transparent px-2 py-1"
          />
          <div className="flex gap-2 justify-start">
            <Link href="..">
              <button className="bg-transparent border border-light-300 rounded-md px-2 py-1 hover:bg-slate-400 hover:bg-slate-700 focus-within:bg-slate-700 outline-none mr-2">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-transparent border border-light-300 rounded-md px-2 py-1 hover:bg-slate-400 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
