document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
    const header = document.querySelector("header");
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        header.style.backgroundColor = "#555";
    } else {
        header.style.backgroundColor = "#333";
    }
}
