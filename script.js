const scenes = document.querySelectorAll(".scene");
let index = 0;
let lock = false;

function setScene(i) {
  if (lock || i === index || i < 0 || i >= scenes.length) return;

  lock = true;
  scenes[index].classList.remove("active");
  index = i;
  scenes[index].classList.add("active");

  setTimeout(() => lock = false, 1200);
}

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) setScene(index + 1);
  else setScene(index - 1);
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

closeBtn.onclick = close;
next.onclick = nextImg;
prev.onclick = prevImg;

lightbox.onclick = (e) => {
  if (e.target === lightbox) close();
};



const videoLightbox = document.getElementById("videoLightbox");
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const modalVideo = document.getElementById("modalVideo");

openVideo.onclick = () => {
  videoLightbox.classList.add("show");
  modalVideo.play();
};

function closeVideoModal() {
  videoLightbox.classList.remove("show");
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

closeVideo.onclick = closeVideoModal;

videoLightbox.onclick = (e) => {
  if (e.target === videoLightbox) closeVideoModal();
};



document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
    closeVideoModal();
  }

  if (e.key === "ArrowRight") nextImg();
  if (e.key === "ArrowLeft") prevImg();
});
