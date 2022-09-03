const express = require("express");
const socket = require("socket.io");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));
const server = app.listen(PORT, () =>
  console.log("server listening on port 3000")
);
const io = socket(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log("Connected socket id = " + socket.id);
  socket.on("mouse", (data) =>
    socket.broadcast.emit("mouse", { ...data, id: socket.id })
  );
});
