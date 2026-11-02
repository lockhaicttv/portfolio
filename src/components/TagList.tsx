interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-full text-xs bg-[color:var(--surface)] text-[color:var(--accent)] border border-[color:var(--border)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
