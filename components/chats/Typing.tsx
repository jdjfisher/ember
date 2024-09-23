export default function Typing() {
  return (
    <div className="flex w-min items-center gap-1 rounded-lg bg-gray-200 p-2 ml-10 select-none">
      <div
        className="h-1 w-1 animate-bounce rounded-full bg-black"
        style={{ animationDelay: '0ms' }}
      />
      <div
        className="h-1 w-1 animate-bounce rounded-full bg-black"
        style={{ animationDelay: '100ms' }}
      />
      <div
        className="h-1 w-1 animate-bounce rounded-full bg-black"
        style={{ animationDelay: '200ms' }}
      />
    </div>
  );
}
