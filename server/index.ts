import express from "express";
import { config } from "dotenv";
import { createServer } from "node:http";
import { Server } from "socket.io";

config();

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: process.env.FRONTEND_URL } });

app.get("/", (req, res) => {
  res.send("Working");
});

io.on("connection", (socket) => {
  console.log("Connected " + socket.id);

  socket.on("disconnect", () => {
    console.log("Disconnected " + socket.id);
  });
  socket.on("captureuserdetails", (userid) => {
    if (userid == null) {
      socket.disconnect();
    }
    console.log(userid);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`App Listening on PORT ${port}`));
