document.addEventListener('DOMContentLoaded', function () {
    const pageContent = document.querySelector('.page-content');
    pageContent.style.opacity = 1;

    var lastScrollTop = 0;
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.transition = "top 0.3s ease";
            navbar.style.top = "-49px";
        } else {
            navbar.style.transition = "top 0.3s ease";
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });

    nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
            preview();
            nextBtn.style.display = "none";
        } else {
            const currentImage = gallery[newIndex].querySelector("img");
            currentImage.classList.add("fade-out"); // Add fade-out class to current image
            setTimeout(() => {
                currentImage.classList.remove("fade-out"); // Remove fade-out class after the animation
                preview();
                prevBtn.style.display = "block";
            }, 300); // Adjust the time (in milliseconds) to match your CSS transition duration
        }
    };
});