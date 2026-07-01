# CodeSync AI

CodeSync AI is an AI-powered collaborative coding platform where users can create or join private coding rooms, write code together in real time, chat with teammates, run JavaScript code, and use an AI pair programmer to explain, debug, optimize, and generate test cases for code.

## Features

* Real-time collaborative coding rooms using Socket.IO
* Monaco Editor for a VS Code-like coding experience
* Live code synchronization between multiple users
* Live language synchronization across users
* Team chat inside the coding room
* Online participants tracking
* JavaScript code execution from the backend
* AI Pair Programmer for code explanation, debugging, optimization, and test case generation
* Markdown-based AI response rendering
* Copy room link, copy code, and download code functionality
* Toast notifications for better user experience
* Modern responsive light-themed UI

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Monaco Editor
* Socket.IO Client
* React Router
* React Hot Toast
* React Markdown

### Backend

* Node.js
* Express.js
* Socket.IO
* Google Gemini API
* JavaScript VM module
* dotenv
* CORS

## Project Structure

```txt
CodeSync-AI/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Rooms.jsx
│   │   │   └── CodeRoom.jsx
│   │   ├── socket.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-link>
cd CodeSync-AI
```

### 2. Install frontend dependencies

```bash
cd client
npm install
npm run dev
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Usage

1. Open the frontend in the browser.
2. Enter your name.
3. Create a new coding room or join an existing room using a room ID.
4. Share the room link with teammates.
5. Start coding together in real time.
6. Use AI to explain, debug, optimize, or generate test cases for your code.

## Current Limitations

* JavaScript code execution is currently supported through the backend.
* Java, C++, and Python execution require a compiler API or self-hosted code execution service.
* Authentication and database-based room history can be added in future versions.

## Future Improvements

* Add user authentication
* Save room history using MongoDB
* Add support for Java, C++, and Python execution
* Add voice/video collaboration
* Add problem statement panel for DSA practice
* Add GitHub login and code export
* Deploy frontend and backend online

## Author

Dhruv Gaur


## Live Demo

Frontend: https://code-sync-ai-ten.vercel.app  
Backend: https://https://codesync-ai-49yk.onrender.com