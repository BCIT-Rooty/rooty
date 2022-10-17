import { Server } from 'socket.io'
import date from "date-and-time";
import * as db from "../../../server/database.js"

export default function ioHandler(req, res)  {
    if (!res.socket.server.io) {
      console.log('First use, starting socket.io')
      const io = new Server(res.socket.server)

      var theChatRoomId;
      var userIdGlobal;
      io.on("connection", (socket) => {
        console.log(socket.rooms)
        socket.join(theChatRoomId);
        socket.on("send-text", (inputText, room) => {
          if (room == null) {
            socket.broadcast.emit("receive-message", inputText);
          } else {
            const dateDB = date.format(new Date(), "YYYY-DD-MM");
            db.writeChatToTheDataBase(inputText, dateDB, userIdGlobal, room);
            socket.to(room).emit("receive-message", inputText, userIdGlobal);
          }
        });
        socket.on("join-room", (room) => {
          console.log(room)
          theChatRoomId = room
          socket.join(room);
          socket.leave(socket.id);
        });
        socket.on("avoid-duplicate", () => {
          // socket.leave(theChatRoomId);
        });
        socket.on("disconnect", function () {
          console.log("disconnected!");
        });
      });

      res.socket.server.io = io
    } else {
      console.log('socket.io already running')
    }
    res.end()
  }
  
  export const config = {
    api: {
      bodyParser: false
    }
  }
  
