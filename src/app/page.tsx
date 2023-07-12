import Link from "next/link";

export default function Home() {
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
    </main>
  );
}
