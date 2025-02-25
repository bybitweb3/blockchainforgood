export function NextStep({ content }: { content: string }) {
  return (
    <div id="next-step" className="h-screen space-y-8 md:space-y-10">
      <h3 className="font-bold text-main text-4xl">Next Steps</h3>
      <div>{content}</div>
    </div>
  );
}
