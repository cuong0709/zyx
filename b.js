const bigImage = document.getElementById("big-image")
const text = bigImage.querySelector("p")
const images = document.querySelectorAll(".gallery img")
images.forEach(img =>{
img.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = `url(${this.src})`;
    text.style.display = "none";
})
img.addEventListener("mouseout", function(){
    bigImage.style.backgroundImage ="";
    text.style.display = "block"
})



});







