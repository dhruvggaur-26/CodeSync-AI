import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import CodeRoom from "./pages/CodeRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room/:roomId" element={<CodeRoom />} />
    </Routes>
  );
}

export default App;