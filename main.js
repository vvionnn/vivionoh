// main.js (FULL)
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ===== Image Zoom Modal =====
const zoomModal = document.getElementById("zoomModal");
const zoomClose = document.getElementById("zoomClose");
const zoomImg = document.getElementById("zoomImg");

function openZoom(src, alt) {
  zoomImg.src = src;
  zoomImg.alt = alt || "Zoomed preview";
  zoomModal.classList.add("show");
  zoomModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeZoom() {
  zoomModal.classList.remove("show");
  zoomModal.setAttribute("aria-hidden", "true");
  zoomImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => openZoom(img.src, img.alt));
});

if (zoomClose) zoomClose.addEventListener("click", closeZoom);

if (zoomModal) {
  zoomModal.addEventListener("click", (e) => {
    if (e.target === zoomModal) closeZoom();
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && zoomModal.classList.contains("show")) closeZoom();
});
