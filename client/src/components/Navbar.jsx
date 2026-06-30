import { Link } from "react-router";
//import { Link } from "react-router";
import toast from "react-hot-toast";
function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg">
          CS
        </div>

        <div>
          <h1 className="text-xl font-black tracking-tight">CodeSync AI</h1>
          <p className="text-xs font-medium text-slate-500">
            Collaborative AI Coding
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-8 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm md:flex">
        <a href="#features" className="hover:text-slate-950">
  Features
</a>

<Link to="/rooms" className="hover:text-slate-950">
  Rooms
</Link>

<a href="#features" className="hover:text-slate-950">
  AI Assistant
</a>

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
  );
}

export default Navbar;