const scenes = document.querySelectorAll(".scene");
let index = 0;
let locked = false;

function setScene(i) {
  if (locked || i === index || i < 0 || i >= scenes.length) return;

  locked = true;

  scenes[index].classList.remove("active");
  index = i;

  scenes[index].classList.add("active");

  setTimeout(() => {
    locked = false;
  }, 1200);
}

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) setScene(index + 1);
  else setScene(index - 1);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") setScene(index + 1);
  if (e.key === "ArrowUp") setScene(index - 1);
});


const imgs = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;
const arr = Array.from(imgs);

function open(i) {
  current = i;
  lightboxImg.src = arr[current].src;
  lightbox.classList.add("show");
}

function close() {
  lightbox.classList.remove("show");
}

function nextImg() {
  current = (current + 1) % arr.length;
  lightboxImg.src = arr[current].src;
}

function prevImg() {
  current = (current - 1 + arr.length) % arr.length;
  lightboxImg.src = arr[current].src;
}

imgs.forEach((img, i) => img.addEventListener("click", () => open(i)));

closeBtn.addEventListener("click", close);
next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) close();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") nextImg();
  if (e.key === "ArrowLeft") prevImg();
});
