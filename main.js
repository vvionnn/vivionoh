// year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// DOM Elements
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomClose = document.getElementById("zoomClose");
const zoomTitle = document.getElementById("zoomTitle"); 
const zoomDesc = document.getElementById("zoomDesc");   
const zoomHeader = document.getElementById("zoomHeader");
const zoomFooter = document.getElementById("zoomFooter");
function openZoom(src, alt, title, desc) {
    zoomModal.classList.add("open");
    zoomImg.src = src;
    zoomImg.alt = alt || "Zoomed preview";

    // 1. Handle Title (Top)
    if (title) {
        zoomHeader.style.display = "block";
        zoomTitle.textContent = title;
    } else {
        zoomHeader.style.display = "none";
    }

    // 2. Handle Description (Bottom)
    if (desc) {
        zoomFooter.style.display = "block";
        zoomDesc.textContent = desc;
    } else {
        zoomFooter.style.display = "none";
    }

    document.body.style.overflow = "hidden";
}

function closeZoom() {
    zoomModal.classList.remove("open");

    setTimeout(() => {
        zoomImg.src = "";
        if (zoomTitle) zoomTitle.textContent = "";
        if (zoomDesc) zoomDesc.textContent = "";
    }, 200);

    document.body.style.overflow = "";
}

zoomClose?.addEventListener("click", closeZoom);

zoomModal?.addEventListener("click", (e) => {
    if (e.target === zoomModal) closeZoom();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeZoom();
});

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        openZoom(img.src, img.alt, img.dataset.title, img.dataset.desc);
    });
});