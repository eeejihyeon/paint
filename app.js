const canvas = document.querySelector("#jscanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jscolor");
const range = document.querySelector("#jsrange");
const mode = document.querySelector("#jsmode");
const saveBtn = document.querySelector("#jssave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// Context default
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
    // ctx.fillStyle = ctx.strokeStyle;
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick(event) {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", changeColor)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

// mousedown: 클릭했을 때 발생하는 event

// Context: <canvas></canvas> 요소 안에서 픽셀에 접근할 수 있는 방법
// context variable 만들기
// const ctx = canvas.getContext('2d'...);

// canvas에 사이즈를 두 번 줘야 한다. CSS와 JS에서 한 번씩.

// canvas 자체가 pixel을 다루기 때문에 기본적으로 img 형태,
// doenload와 save는 canvas에 내장되어있음
// background 색상이 transparent로 저장되기 때문에 onload 시 배경 지정 세팅:
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
