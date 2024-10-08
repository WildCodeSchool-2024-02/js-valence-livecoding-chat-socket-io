import { Routes, Route } from "react-router-dom";
import socketIo from "socket.io-client";
import Home from "./pages/Home";
import ChatPage from "./components/ChatPage";
import "./App.css";

const socket = socketIo.connect(import.meta.env.VITE_BACKEND_URL);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Routes>
  );
}

export default App;
