"use client";

type TodoItemProps = {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  description,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer accent-slate-700"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <span className="peer-checked:hidden">
        {description && (
          <span className="text-sm text-slate-500">({description})</span>
        )}
      </span>
      <button
        className="bg-transparent border border-light-300 text-sm rounded-full px-2 py-1 hover:bg-slate-400 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        onClick={() => deleteTodo(id)}
      >
        X
      </button>
    </li>
  );
}
