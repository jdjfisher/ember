export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 p-5">
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-1 w-7 bg-purple-100"></div>
          <div className="h-1 w-7 bg-purple-100"></div>
          <div className="h-1 w-7 bg-purple-100"></div>
        </div>
        <h1 className="font-semibold text-purple-900">lorem</h1>
        <div className="h-7 w-7 bg-purple-300"></div>
      </section>

      <section className="flex flex-1 items-end bg-purple-300 p-5 hover:animate-pulse">
        <h2 className="text-3xl">
          Lorem Ipsum
          <br />
          99
        </h2>
      </section>

      <section className="flex justify-around">
        <div className="h-7 w-7 bg-purple-100"></div>
        <div className="h-7 w-7 bg-purple-500 shadow-xl"></div>
        <div className="h-7 w-7 bg-purple-100"></div>
        <div className="h-7 w-7 bg-purple-100"></div>
      </section>
    </main>
  );
}
