import CodePreview from "./CodePreview";
import StatCard from "./StatCard";
import { Link } from "react-router";

function Hero() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="grid min-h-[82vh] items-center gap-14 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Real-time coding rooms with AI support
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
            Code together,
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              solve faster.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            CodeSync AI is a collaborative coding workspace where developers can
            create private rooms, write code together, chat live, and use AI to
            debug, explain, and optimize solutions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
  to="/rooms"
  className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
>
  Start Coding Room
</Link>

            <div id="demo-preview">
  <CodePreview />
</div>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <StatCard value="Live" label="Code Sync" />
            <StatCard value="AI" label="Debugger" />
            <StatCard value="Team" label="Chat Rooms" />
          </div>
        </div>

        <div id="demo-preview">
          <CodePreview />
        </div>
       
      </section>
    </main>
  );
}

export default Hero;