export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="card px-6 py-10 text-center sm:px-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Todo List App</p>
        <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Plan your day in one simple list.</h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
          The scaffold is ready for the todo stories: add tasks, persist them in PostgreSQL, mark them complete, and delete them when finished.
        </p>
      </section>
    </main>
  );
}
