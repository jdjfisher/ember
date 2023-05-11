export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-5 gap-5">
      <section className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="w-7 h-1 bg-purple-100"></div>
          <div className="w-7 h-1 bg-purple-100"></div>
          <div className="w-7 h-1 bg-purple-100"></div>
        </div>
        <h1 className="font-semibold text-purple-900">lorem</h1>
        <div className="w-7 h-7 bg-purple-300"></div>
      </section>

      <section className="flex-1 bg-purple-300 hover:animate-pulse items-end flex p-5">
        <h2 className="text-3xl">
          Lorem Ipsum
          <br />
          99
        </h2>
      </section>

      <section className="flex justify-around">
        <div className="w-7 h-7 bg-purple-100"></div>
        <div className="w-7 h-7 bg-purple-500 shadow-xl"></div>
        <div className="w-7 h-7 bg-purple-100"></div>
        <div className="w-7 h-7 bg-purple-100"></div>
      </section>
    </main>
  );
}
