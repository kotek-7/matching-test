"use client";

import { AppType } from "backend/src/index";
import { hc } from "hono/client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const clientRef = useRef(hc<AppType>("http://localhost:8787"));
  const socketRef = useRef<WebSocket | null>(null);
  const [value, setValue] = useState("");
  const [wsValue, setWsValue] = useState("");

  const handleClick = async () => {
    const res = await clientRef.current.index.$get();
    if (!res.ok) return;
    const data = await res.json();
    setValue(data.message);
  };

  useEffect(() => {
    socketRef.current = clientRef.current.ws.$ws();
    const socket = socketRef.current;
    let intervalId: number;

    const handleOpen = (_event: Event) => {
      console.log("WebSocket is open now.");
      intervalId = window.setInterval(() => {
        socket.send("Hello from the client!");
      }, 1000);
    };
    socket.addEventListener("open", handleOpen);

    const handleMessage = (event: MessageEvent) => {
      console.log("WebSocket message received:", event.data);
      setWsValue(event.data);
    };
    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("message", handleMessage);
      if (intervalId) {
        clearInterval(intervalId);
      }
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Matching Test</h1>
      <p>{value}</p>
      <p>{wsValue}</p>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Fetch
      </button>
    </div>
  );
}
