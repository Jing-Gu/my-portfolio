//lazy loading images

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy");

  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px",
  };

  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        imgObserver.unobserve(lazyImage);
      }
    });
  }, imgOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });
});
