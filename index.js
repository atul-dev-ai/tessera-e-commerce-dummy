function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".demo-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  const btns = document.querySelectorAll(".demo-btn");
  const map = {
    home: 0,
    listing: 1,
    detail: 2,
    cart: 3,
    checkout: 4,
    admin: 5,
  };
  if (btns[map[page]]) btns[map[page]].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Flash sale timer
let secs = 23,
  mins = 47,
  hours = 8;
setInterval(() => {
  secs--;
  if (secs < 0) {
    secs = 59;
    mins--;
  }
  if (mins < 0) {
    mins = 59;
    hours--;
  }
  if (hours < 0) {
    hours = 0;
    mins = 0;
    secs = 0;
  }
  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("mins").textContent = pad(mins);
  document.getElementById("secs").textContent = pad(secs);
}, 1000);
