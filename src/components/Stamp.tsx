export default function Stamp({
  text,
  color = "red",
  className = "",
}: {
  text: string;
  color?: "red" | "amber" | "ink";
  className?: string;
}) {
  const colorMap = {
    red: "border-[#C41E3A] text-[#C41E3A]",
    amber: "border-[#B85C38] text-[#B85C38]",
    ink: "border-[#1A1A1A] text-[#1A1A1A]",
  };

  return (
    <span
      className={`inline-block border-2 px-3 py-0.5 stamp-text text-xs tracking-widest stamp-rotate select-none ${colorMap[color]} ${className}`}
    >
      {text}
    </span>
  );
}
