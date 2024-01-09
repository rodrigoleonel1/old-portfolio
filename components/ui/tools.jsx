export default function Tools({ array }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {array.map((tool) => (
        <span
          key={tool}
          className="px-2 py-1 bg-black/90 text-xs text-white dark:text-zinc-200"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}
