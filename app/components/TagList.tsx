interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 my-5 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[13px] px-3 py-1 rounded-full bg-[#eeede8] text-[#5a5a54] border border-black/10"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
