// Element variables
var burger = document.getElementById("burger");
var navlist = document.getElementById("navlist");
var bar = document.getElementById("bar");

// add black class windows is scrolled. otherwise remove it
document.addEventListener("scroll", () => {
  if (window.scrollY) {
    bar.classList.add("black");
    return;
  }
  bar.classList.remove("black");
});

// toggle active class when burger el is clicked
burger.addEventListener("click", () => navlist.classList.toggle("active"));
