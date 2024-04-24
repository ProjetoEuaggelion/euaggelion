export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <section className="w-2/3 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-[#D12026]">Euaggelion</h1>
        <h2 className="text-zinc-200 text-xl mt-2">Semeando as boas novas da salvação</h2>
      </section>
      <section className="w-2/3 md:w-[40vw] flex flex-col items-center justify-center text-center mt-4 text-zinc-400 *:py-2">
        <p>O projeto está em manutenção.</p>
        <p>Estamos trabalhando para que, em breve, um novo conceito de conteúdo cristão esteja disponível para você.</p>
      </section>
    </main>
  );
}
