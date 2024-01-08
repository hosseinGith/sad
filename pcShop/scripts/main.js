const form = document.querySelector("form");
const urlPagesContent = document.querySelectorAll(".urlPages > ul > li");
const weavy = new Weavy();
weavy.url = "https://94499dd72fd2429e982986f4d63c7a8f.weavy.io";

form.onsubmit = (e) => {
  e.preventDefault();
};
urlPagesContent.forEach((item) => {
  item.addEventListener("mouseover", () => {
    urlPagesContent.forEach((element) => {
      element.children[1].classList.remove("hideWithAnimate");
    });
  });
  item.addEventListener("mouseout", () => {
    item.children[1].classList.add("hideWithAnimate");
  });
  item.addEventListener("animationend", () => {
    item.children[1].classList.remove("hideWithAnimate");
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    items: 1,
  });
  document.onscroll = () => {
    if (scrollY >= $(".urlPagesContainer")[0].scrollHeight)
      $(".urlPagesContainer")[0].classList.add("active");
    else $(".urlPagesContainer")[0].classList.remove("active");
  };
});
weavy.tokenFactory = async () => "wyu_NfOdJopgwJDsmbdM388gXj3Dme7cGg41y2tQ";
