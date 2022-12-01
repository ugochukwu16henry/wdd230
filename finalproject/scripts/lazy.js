// -------------- Lazy Loading -------------- 
// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
            if (image.getAttribute('id') != "orange-smoothie" && image.getAttribute('id') != "blue-smoothie") {
                image.className = "loaded";
            }
        };
    }
    // Check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);

    });
}