import Link from "next/link";

export default function page() {
  return (
    <main className="container flex flex-col items-center justify-center">
      <header className="text-2xl flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form className="flex flex-col gap-[10px]">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="border border-light-300 rounded-md bg-transparent px-2 py-1"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
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
  );
}
