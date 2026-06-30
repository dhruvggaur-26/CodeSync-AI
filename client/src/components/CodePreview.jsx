function CodePreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-r from-blue-200 to-indigo-200 blur-2xl"></div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>

          <p className="text-sm font-semibold text-slate-500">room/main.js</p>
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
              <p className="text-sm font-black text-blue-700">3 users online</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Your code is syncing live with teammates.
              </p>
            </div>
          </aside>

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-black text-slate-900">Two Sum Problem</p>
                <p className="text-sm text-slate-500">JavaScript solution</p>
              </div>

              <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                Run Code
              </button>
            </div>

            <div className="rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-8 text-slate-200">
              <p className="text-slate-500">// Collaborative coding room</p>

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
                <span className="text-purple-300">for</span> (let i = 0; i
                &lt; nums.length; i++) {"{"}
              </p>

              <p className="ml-12">
                <span className="text-sky-300">const</span> need = target -
                nums[i];
              </p>

              <p className="ml-12">
                <span className="text-purple-300">if</span> (map.has(need))
                return [map.get(need), i];
              </p>

              <p className="ml-12">map.set(nums[i], i);</p>

              <p className="ml-6">{"}"}</p>
              <p>{"}"}</p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-black text-slate-900">Output</p>
                <p className="mt-3 rounded-2xl bg-white p-4 font-mono text-sm text-green-700 shadow-sm">
                  Accepted ✓ Runtime: O(n)
                </p>
              </div>

              <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-5">
                <p className="font-black text-indigo-700">AI Suggestion</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Your HashMap approach is optimal. Explain it as storing
                  previous numbers and checking the required complement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default CodePreview;