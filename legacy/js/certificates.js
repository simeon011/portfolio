//zoom button for photos
const zoomImages = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");


zoomImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.classList.remove("zoomed");   
    lightboxImg.src = img.src;
  });
});


closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation(); 
  const wasZoomed = lightbox.classList.toggle("zoomed");

  if (wasZoomed) {
    lightbox.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
});