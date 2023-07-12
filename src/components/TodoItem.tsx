type TodoItemProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export function TodoItem({ id, title, description, completed }: TodoItemProps) {
  return (
    <li className="mb-4">
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-400">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">{completed ? "Done" : "Not done"}</span>
        <button
          className="bg-transparent border border-light-300 rounded-md px-2 py-1 hover:bg-slate-400 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => {
            alert(`Delete todo with id ${id}`);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
