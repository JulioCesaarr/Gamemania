let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showNextImage() {
images.forEach((img, index) => {
img.classList.remove("active");
if (index === currentIndex) {
img.classList.add("active");
}
});
currentIndex = (currentIndex + 1) % images.length;
}

setInterval(showNextImage, 3000); // Alterna a cada 3 segundos