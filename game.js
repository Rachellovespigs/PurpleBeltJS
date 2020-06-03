var canvas;
var ctx;

var w, y, height, width;
x = 10;
y = 10;
height = 50;
width = 50;

var keys= [];

window.onkeydown = function (event)
{
  keys[event.key] = true; 
  this.console.log(event)
}

window.onkeyup = function (event)
{
  keys[event.key] = false; 
}

function startGame()
{
  canvas = document.getElementById("gc");
  ctx  = canvas.getContext("2d");

  window.setInterval(update, 100);

}

function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lavender";
    ctx.fillRect(x, y, height, width);

      if(keys["ArrowRight"] == true && x <= 750){
        x+=10;
        console.log()
      }

      if(keys["ArrowLeft"] == true && x >= 0)
        x-=10;
      

      if(keys["ArrowUp"] == true && y >= -5)
        y-=10;
      

      if(keys["ArrowDown"] == true && y <= 450)
        y+=10;
    }
