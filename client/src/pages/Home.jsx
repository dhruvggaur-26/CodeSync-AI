import { Link } from "react-router";
import toast from "react-hot-toast";

function Home() {
  const scrollToDemo = () => {
    document.getElementById("demo-preview")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_top_right,#e0e7ff,transparent_35%)]"></div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg">
            CS
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight">CodeSync AI</h1>
            <p className="text-xs font-medium text-slate-500">
              Collaborative AI Coding
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm md:flex">
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>

          <Link to="/rooms" className="hover:text-slate-950">
            Rooms
          </Link>

          <button
            onClick={scrollToDemo}
            className="hover:text-slate-950"
          >
            AI Assistant
          </button>

          <button
            onClick={() => toast.success("Contact section coming soon")}
            className="hover:text-slate-950"
          >
            Contact
          </button>
        </div>

        <Link
          to="/rooms"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
        >
          Launch App
        </Link>
      </nav>

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
              CodeSync AI is a collaborative coding workspace where developers
              can create private rooms, write code together, chat live, run
              JavaScript code, and use AI to debug, explain, and optimize
              solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/rooms"
                className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Start Coding Room
              </Link>

              <button
                onClick={scrollToDemo}
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Watch Demo
              </button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <StatCard value="Live" label="Code Sync" />
              <StatCard value="AI" label="Debugger" />
              <StatCard value="Team" label="Chat Rooms" />
            </div>
          </div>

          <div id="demo-preview" className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-r from-blue-200 to-indigo-200 blur-2xl"></div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <p className="text-sm font-semibold text-slate-500">
                  room/main.js
                </p>
              </div>

              <div className="grid lg:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-slate-200 bg-slate-50 p-4 lg:block">
                  <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    Workspace
                  </p>

                  <SidebarItem active text="main.js" />
                  <SidebarItem text="output" />
                  <SidebarItem text="team-chat" />
                  <SidebarItem text="ai-helper" />

                  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-sm font-black text-blue-700">
                      3 users online
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Code changes are syncing live.
                    </p>
                  </div>
                </aside>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-black text-slate-900">
                        Two Sum Problem
                      </p>
                      <p className="text-sm text-slate-500">
                        JavaScript solution
                      </p>
                    </div>

                    <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                      Run Code
                    </button>
                  </div>

                  <div className="rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-8 text-slate-200">
                    <p className="text-slate-500">
                      // Collaborative coding room
                    </p>

                    <p>
                      <span className="text-sky-300">function</span>{" "}
                      <span className="text-emerald-300">twoSum</span>
                      <span className="text-slate-300">(nums, target) </span>
                      <span className="text-slate-300">{"{"}</span>
                    </p>

                    <p className="ml-6">
                      <span className="text-sky-300">const</span> map ={" "}
                      <span className="text-sky-300">new</span>{" "}
                      <span className="text-yellow-300">Map</span>();
                    </p>

                    <p className="ml-6">
                      <span className="text-purple-300">for</span> (let i = 0;
                      i &lt; nums.length; i++) {"{"}
                    </p>

                    <p className="ml-12">
                      const need = target - nums[i];
                    </p>

                    <p className="ml-12">
                      if (map.has(need)) return [map.get(need), i];
                    </p>

                    <p className="ml-12">map.set(nums[i], i);</p>

                    <p className="ml-6">{"}"}</p>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-900">Output</p>
                      <p className="mt-3 rounded-2xl bg-white p-4 font-mono text-sm text-green-700 shadow-sm">
                        [0, 1]
                      </p>
                    </div>

                    <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-5">
                      <p className="font-black text-indigo-700">
                        AI Suggestion
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        Your HashMap approach is optimal with O(n) time
                        complexity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-5 pb-20 md:grid-cols-4"
        >
          <FeatureCard
            title="Live Coding Rooms"
            text="Create private rooms and invite teammates for real-time coding."
          />
          <FeatureCard
            title="AI Debugger"
            text="Ask AI to fix errors, explain code, and improve your logic."
          />
          <FeatureCard
            title="Team Chat"
            text="Discuss approach, bugs, and solutions without leaving the room."
          />
          <FeatureCard
            title="Interview Practice"
            text="Practice DSA problems with teammates in a shared editor."
          />
        </section>
      </main>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-slate-950">{value}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function SidebarItem({ text, active }) {
  return (
    <div
      className={`mb-2 rounded-2xl px-4 py-3 text-sm font-bold ${
        active
          ? "bg-slate-950 text-white"
          : "text-slate-500 hover:bg-white hover:text-slate-900"
      }`}
    >
      {text}
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
        ✦
      </div>

      <h3 className="text-lg font-black text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export default Home;