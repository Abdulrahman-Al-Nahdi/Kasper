// Start Increase Number In Stats Section
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .text h3");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
// end increase number
//start portfolio filter
let portfolioLis = document.querySelectorAll(".portfolio .shuffle li");
let portfolioImages = document.querySelectorAll(
  ".portfolio .portfolio-images .box"
);
portfolioLis.forEach((li) => {
  li.addEventListener("click", deleteActive);
  li.addEventListener("click", filterWorks);
});
function deleteActive() {
  portfolioLis.forEach((li) => {
    li.classList.remove("active");
  });
  this.classList.add("active");
}
function filterWorks() {
  portfolioImages.forEach((img) => {
    img.style.display = "none";
  });
  document
    .querySelectorAll(`.portfolio .portfolio-images ${this.dataset.cat}`)
    .forEach((ele) => {
      ele.style.display = "block";
    });
}
//end portfolio filter
