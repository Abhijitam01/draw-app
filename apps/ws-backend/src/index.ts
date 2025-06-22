import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket server started on ws://localhost:8080");
wss.on("connection", (ws) => {
  const url = request.url ;
  if(!url){
    return;
  }
  });
