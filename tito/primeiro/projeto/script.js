function handleScroll() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (winScroll / height) * 100;

  document.getElementById("progress-bar").style.width = scrollPercentage + "%";

  document.getElementById("top-button").style.visibility =
    scrollPercentage > 0 ? "visible" : "hidden";
}

function handleMobileMenu() {
  const navigation = document.getElementById("navigation");

  navigation.style.display =
    navigation.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("scroll", handleScroll);

document
  .getElementById("mobile-menu")
  .addEventListener("click", handleMobileMenu);
