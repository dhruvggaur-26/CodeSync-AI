import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

function Rooms() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const saveUsername = () => {
    if (!username.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    localStorage.setItem("codesync_username", username.trim());
    return true;
  };

  const createRoom = () => {
    if (!saveUsername()) return;

    const newRoomId = "room-" + Math.random().toString(36).substring(2, 8);
    toast.success("Room created successfully");
    navigate(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
  if (!saveUsername()) return;

  if (!roomId.trim()) {
    toast.error("Please enter a room ID");
    return;
  }

  let finalRoomId = roomId.trim();

  if (finalRoomId.includes("/room/")) {
    finalRoomId = finalRoomId.split("/room/")[1];
  }
  
  
  toast.success("Joining room...");
  navigate(`/room/${finalRoomId}`);
};

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg">
            CS
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight">CodeSync AI</h1>
            <p className="text-xs font-medium text-slate-500">
              Create or join coding rooms
            </p>
          </div>
        </Link>

        <Link
          to="/"
          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          Back Home
        </Link>
      </nav>

      <main className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Start your real-time coding session
          </div>

          <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Create a room.
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Code with your team.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Enter your name, create a private coding room, share the room ID,
            and collaborate with live code sync, chat, and AI assistance.
          </p>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            <MiniStat title="Private" text="Room IDs" />
            <MiniStat title="Live" text="Sync" />
            <MiniStat title="AI" text="Helper" />
          </div>
        </section>

        <section className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-r from-blue-200 to-indigo-200 blur-2xl"></div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-950">
                Coding Room
              </h3>
              <p className="mt-2 text-slate-500">
                Enter your name first, then create or join a coding room.
              </p>
            </div>

            <div className="mb-5 rounded-3xl border border-blue-100 bg-blue-50 p-6">
              <h4 className="text-lg font-black text-slate-950">
                Your Name
              </h4>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name e.g. Dhruv"
                className="mt-4 w-full rounded-2xl border border-blue-100 bg-white px-5 py-4 font-semibold text-slate-800 outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="text-lg font-black text-slate-950">
                  Create New Room
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Generate a room ID and share it with your teammates.
                </p>

                <button
                  onClick={createRoom}
                  className="mt-5 w-full rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                >
                  Create Room
                </button>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-black text-slate-950">
                  Join Existing Room
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Enter the room ID shared by your teammate.
                </p>

                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter room ID"
                  className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800 outline-none focus:border-blue-500 focus:bg-white"
                />

                <button
                  onClick={joinRoom}
                  className="mt-4 w-full rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white hover:bg-slate-800"
                >
                  Join Room
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MiniStat({ title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{text}</p>
    </div>
  );
}

export default Rooms;