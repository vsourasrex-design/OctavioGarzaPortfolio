const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


const imgs = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightboxImg");

let index = 0;
const arr = Array.from(imgs);

function open(i) {
  index = i;
  lightImg.src = arr[index].src;
  lightbox.classList.add("show");
}

function close() {
  lightbox.classList.remove("show");
}

function next() {
  index = (index + 1) % arr.length;
  lightImg.src = arr[index].src;
}

function prev() {
  index = (index - 1 + arr.length) % arr.length;
  lightImg.src = arr[index].src;
}

imgs.forEach((img, i) => img.onclick = () => open(i));

document.getElementById("closeBtn").onclick = close;
document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

lightbox.onclick = e => {
  if (e.target === lightbox) close();
};

const videoModal = document.getElementById("videoModal");
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const player = document.getElementById("videoPlayer");

openVideo.onclick = () => {
  videoModal.classList.add("show");
  player.play();
};

function closeVid() {
  videoModal.classList.remove("show");
  player.pause();
  player.currentTime = 0;
}

closeVideo.onclick = closeVid;

videoModal.onclick = e => {
  if (e.target === videoModal) closeVid();
};


document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    close();
    closeVid();
  }
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});
