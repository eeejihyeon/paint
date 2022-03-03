const canvas = document.querySelector("#jscanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

// Context default
ctx.strokeStyle = "2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

// function onMouseUp(event) {
//   stopPainting();
// }

// function onMouseLeave(event) {
//   painting = false;
// }

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

// mousedown: 클릭했을 때 발생하는 event

// Context: <canvas></canvas> 요소 안에서 픽셀에 접근할 수 있는 방법
// context variable 만들기
// const ctx = canvas.getContext('2d'...);

// canvas에 사이즈를 두 번 줘야 한다. CSS와 JS에서 한 번씩.
//
