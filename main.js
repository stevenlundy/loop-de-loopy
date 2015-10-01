var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

var startPoint = {
  x: 600,
  y: 200
};

var unit = 40;

var rotateCW = function(direction){
  if(direction.y){
    direction.y *= -1;
  }
  var temp = direction.x;
  direction.x = direction.y;
  direction.y = temp;
  return direction;
};
var rotateCCW = function(direction){
  if(direction.x){
    direction.x *= -1;
  }
  var temp = direction.x;
  direction.x = direction.y;
  direction.y = temp;
  return direction;
};

var loopDeLoopy = function(){
  c.clearRect(0,0,800,800);
  var currentPoint = {
    x: startPoint.x,
    y: startPoint.y
  };
  var direction = {
    x: 0,
    y: 1
  };
  var index = 0;
  c.beginPath();
  c.moveTo(currentPoint.x, currentPoint.y);
  do {
    currentPoint.x += direction.x*unit*arguments[index];
    currentPoint.y += direction.y*unit*arguments[index];

    c.lineTo(currentPoint.x, currentPoint.y);
    index = (index + 1)%arguments.length;
    rotateCW(direction);
  } while (!(currentPoint.x === startPoint.x && currentPoint.y === startPoint.y));
  c.stroke();
};