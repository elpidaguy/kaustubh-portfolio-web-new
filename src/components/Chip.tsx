export const Chip = ({ label }: { label: string }) => {
  return (
    <span className="px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded-full font-mono">
      {label}
    </span>
  );
};