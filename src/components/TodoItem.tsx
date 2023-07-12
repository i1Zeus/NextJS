type TodoItemProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export function TodoItem({ id, title, description, completed }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:text-slate-400"
      >
        {title}
      </label>
    </li>
  );
}
