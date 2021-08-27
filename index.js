window.addEventListener("DOMContentLoaded", function(e){
  console.log("The page is loaded");
  let screen = window.screen;
  let angle = screen.orientation.angle;
  let type = screen.orientation.type;
  console.log(`angle: ${angle}, type: ${type}`);
});