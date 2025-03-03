document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn");

    button.addEventListener("mouseover", function() {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", function() {
        button.style.transform = "scale(1)";
    });
});