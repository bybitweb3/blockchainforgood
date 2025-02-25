export function KeyObjective({ content }: { content: string }) {
  return (
    <section id="key-objective" className="h-screen space-y-8 md:space-y-10">
      <h3 className="font-bold text-main text-4xl">Key Objectives</h3>
      <div>{content}</div>
    </section>
  );
}
