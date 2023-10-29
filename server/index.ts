import { config } from "dotenv";
import { createServer } from "node:http";
import { Server } from "socket.io";

config();

const server = createServer();
const io = new Server(server, { cors: { origin: process.env.FRONTEND_URL } });

io.on("connection", (socket) => {
  console.log("Connected " + socket.id);

  socket.on("disconnect", () => {
    console.log("Disconnected " + socket.id);
  });
  socket.once("captureuserdetails", (userid) => {
    // Also Handle One User multiple socket connections
    if (userid == null) {
      socket.disconnect();
    }
    console.log(userid);
  });
});

const port = process.env.PORT || 5001;

server.listen(port, () => console.log(`App Listening on PORT ${port}`));
