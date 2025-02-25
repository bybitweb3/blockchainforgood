export function Scope({ content }: { content: string }) {
  return (
    <section id="scope" className="h-screen space-y-8 md:space-y-10">
      <h3 className="font-bold text-main text-4xl">Scope</h3>
      <div>{content}</div>
    </section>
  );
}
