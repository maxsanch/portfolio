let jsp = ""

// afficher les liens dans le footer vers les différentes pages

for (let i in SAE) {
    jsp += "<p> <a href='lesprojets.html?number=" + i + "' class='lienfooter'>" + i + "</a></p>"
}
document.querySelector('#link').innerHTML = jsp

let photo=""
for(let o=1; o<=12; o++){
    photo+='<img src="../img/photos/bien'+o+'.jpg" class="perso" alt="photo"></img>'
}
console.log(photo);
document.querySelector("#photo").innerHTML=photo

let D=""
for(let r=1; r<=5; r++){
    D+='<img src="../img/3D/'+r+'.PNG" class="perso" alt="photo"></img>'
}
console.log(D);
document.querySelector("#eho").innerHTML=D

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