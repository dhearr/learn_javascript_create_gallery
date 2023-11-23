const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if ((e.target.className = "thumb")) {
    hero.src = e.target.src;
    hero.classList.add("fade");
    setTimeout(function () {
      hero.classList.remove("fade");
    }, 300);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
