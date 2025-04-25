import { Server, Socket } from "socket.io";
import { produceMessage } from "./helper.js";

interface CustomSocket extends Socket {
  room?: string;
}
export function setupSocket(io: Server) {
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;
    if (!room) {
      return next(new Error("Invalid room"));
    }
    socket.room = room;
    next();
  });

  io.on("connection", (socket: CustomSocket) => {
    // * Join the room
    console.log('before joing the room telugu')
    socket.join(socket.room);
    console.log("After joining the room hindi")

    socket.on("message", async (data) => {
      try {
        await produceMessage("chats", data);
        console.log("tamil some random chats data")
      } catch (error) {
        console.log("The kafka produce error is", error);
      }
      socket.to(socket.room).emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
}
