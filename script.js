const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");
const container = document.querySelector(".container");

// Create a staging layer for background cross-fade if not present
let bgStaging = document.querySelector(".bg-staging");
if (!bgStaging) {
  bgStaging = document.createElement("div");
  bgStaging.className = "bg-staging";
  // Insert as the first child to sit behind content
  container?.insertBefore(bgStaging, container.firstChild);
}

let active = 0;
const total = items.length;
let timer;

function setBackgroundForActive() {
  // Expect each .item to have data-bg like "cristianoBg.jpg"
  const bgName = items[active]?.dataset?.bg || "cristianoBg.jpg";
  const url = `img/backgrounds/${bgName}`;

  // Cross-fade: set staging bg, activate, then set container bg when done
  bgStaging.style.backgroundImage = `url(${url})`;
  // Force reflow for transition start
  void bgStaging.offsetWidth;
  bgStaging.classList.add("active");

  // After transition, commit to container and hide staging
  setTimeout(() => {
    if (container) {
      container.style.backgroundImage = `linear-gradient(135deg, rgba(15,15,30,0.6) 0%, rgba(31,31,58,0.6) 100%), url(${url})`;
    }
    bgStaging.classList.remove("active");
  }, 700);
}

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active + 1;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;
    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  numberIndicator.textContent = String(active + 1).padStart(2, "0");

  // Update background according to active item
  setBackgroundForActive();
}

clearInterval(timer);
timer =setInterval(() => {
  update(1);
}, 20000);

prevButton.addEventListener("click", () => {
  update(1);
});

nextButton.addEventListener("click", () => {
  update(-1);
});

// Initial background setup
setBackgroundForActive();