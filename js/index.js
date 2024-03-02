let jsp = ""

// afficher les liens dans le footer vers les différentes pages

for (let i in SAE) {
    jsp += "<p> <a href='pages/lesprojets.html?number=" + i + "' class='lienfooter'>" + i + "</a></p>"
}
document.querySelector('#link').innerHTML = jsp

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > 50) {
        header.classList.add("scroll"); 
      } else {
        header.classList.remove("scroll");
      }
    });
});