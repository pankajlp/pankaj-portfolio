interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 my-5 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-sm px-3 py-1 rounded-full bg-paper-3 text-muted border border-rule"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
