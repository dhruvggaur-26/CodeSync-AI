import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import vm from "vm";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";


const app = express();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const allowedOrigins = [
  "http://localhost:5173",
  "https://code-sync-ai-ten.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

const roomCodeMap = new Map();
const roomLanguageMap = new Map();
const roomUsersMap = new Map();

app.get("/", (req, res) => {
  res.send("CodeSync AI server is running");
});

// Compiler language aliases
app.post("/run", async (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({
      success: false,
      error: "Language and code are required",
    });
  }

  if (language !== "javascript") {
    return res.json({
      success: true,
      output:
        "Compiler for Java, C++, and Python needs Judge0 API key or self-hosted compiler. JavaScript local runner is working now.",
    });
  }

  try {
    let output = "";

    const sandbox = {
      console: {
        log: (...args) => {
          output += args.map((arg) => JSON.stringify(arg)).join(" ") + "\n";
        },
      },
    };

    vm.createContext(sandbox);

    vm.runInContext(code, sandbox, {
      timeout: 3000,
    });

    res.json({
      success: true,
      output: output || "Code executed successfully. No output.",
    });
  } catch (error) {
    res.json({
      success: true,
      output: error.message,
    });
  }
});


app.post("/ai", async (req, res) => {
  const { code, language, action, question } = req.body;

  if (!code || !language || !action) {
    return res.status(400).json({
      success: false,
      error: "Code, language, and action are required",
    });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "Gemini API key is missing in server .env file",
    });
  }

  try {
    const prompt = `
You are an expert AI pair programmer.

The user is working in a collaborative coding room.

Language: ${language}

Action requested: ${action}

User question:
${question || "No custom question provided"}

Code:
\`\`\`${language}
${code}
\`\`\`

Give a clear, beginner-friendly, and practical answer.

Important formatting rules:
- Keep the answer short and useful.
- Use maximum 5 short bullet points.
- Avoid very long explanations unless the user asks.
- Include time and space complexity only when relevant.
- If debugging, mention only the main issue and fix.
- If generating test cases, give maximum 4 test cases.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error("AI error:", error.message);

    res.status(500).json({
      success: false,
      error: "Failed to get AI response",
    });
  }
});


io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", ({ roomId, username }) => {
    socket.join(roomId);

    socket.data.roomId = roomId;
    socket.data.username = username;

    if (!roomUsersMap.has(roomId)) {
      roomUsersMap.set(roomId, new Map());
    }

    roomUsersMap.get(roomId).set(socket.id, username);

    const users = Array.from(roomUsersMap.get(roomId).values());

    io.to(roomId).emit("participants-update", users);

    console.log(`${username} joined room: ${roomId}`);

    const savedCode = roomCodeMap.get(roomId);

    if (savedCode) {
      socket.emit("load-code", savedCode);
    }

    const savedLanguage = roomLanguageMap.get(roomId);

    if (savedLanguage) {
      socket.emit("load-language", savedLanguage);
    }

    socket.to(roomId).emit("user-joined", {
      username,
      message: `${username} joined the room`,
    });
  });

  socket.on("code-change", ({ roomId, code }) => {
    roomCodeMap.set(roomId, code);
    socket.to(roomId).emit("code-update", code);
  });

  socket.on("language-change", ({ roomId, language, code }) => {
    roomLanguageMap.set(roomId, language);
    roomCodeMap.set(roomId, code);

    socket.to(roomId).emit("language-update", {
      language,
      code,
    });
  });

  socket.on("send-message", ({ roomId, message }) => {
    socket.to(roomId).emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    const roomId = socket.data.roomId;
    const username = socket.data.username;

    if (roomId && roomUsersMap.has(roomId)) {
      roomUsersMap.get(roomId).delete(socket.id);

      const users = Array.from(roomUsersMap.get(roomId).values());

      io.to(roomId).emit("participants-update", users);

      socket.to(roomId).emit("receive-message", {
        sender: "System",
        text: `${username} left the room`,
      });

      if (users.length === 0) {
        roomUsersMap.delete(roomId);
      }
    }

    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});