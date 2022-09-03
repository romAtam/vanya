const socket = io();
function setup() {
  createCanvas(800, 800);
  background(0);
  socket.on("mouse", (data) => {
    line(data.pmouseX, data.pmouseY, data.mouseX, data.mouseY);
  });
}
function draw() {
  stroke("green");
}
function mouseDragged() {
  stroke("red");
  line(pmouseX, pmouseY, mouseX, mouseY);
  socket.emit("mouse", { pmouseX, pmouseY, mouseX, mouseY });
}
