type TodoItemProps = {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
};

export function TodoItem({ id, title, description, completed }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer accent-slate-700"
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through">
        {title}
      </label>
      <span className="peer-checked:hidden">
        {description && (
          <span className="text-sm text-slate-500">({description})</span>
        )}
      </span>
    </li>
  );
}
