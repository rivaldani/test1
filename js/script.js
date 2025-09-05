const links = document.querySelectorAll(".menu a");
const currentUrl = window.location.href;
links.forEach(link => {
  if (currentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
