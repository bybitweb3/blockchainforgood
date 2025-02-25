export function Outcome({ content }: { content: string }) {
  return (
    <div id="outcome" className="h-screen space-y-8 md:space-y-10">
      <h3 className="font-bold text-main text-4xl">Expected Outcomes</h3>
      <div>{content}</div>
    </div>
  );
}
