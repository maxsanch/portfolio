// afficher les liens dans le footer vers les différentes pages
let jsp=""
for (let i in SAE) {
    jsp += "<p> <a href='lesprojets.html?number=" + i + "' class='lienfooter'>" + i + "</a></p>"
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
var oui = document.querySelector(".menutel");
var deroulant = document.querySelector(".deroutel")

oui.addEventListener("click", function() {
  if(deroulant.classList.contains('deroutelo')){
    document.querySelector(".deroutel").classList.remove("deroutelo");
    document.querySelector("header").classList.remove("header2");
  }
  else{
    document.querySelector(".deroutel").classList.add("deroutelo");
    document.querySelector("header").classList.add("header2");
  }
});

let persoos = new URLSearchParams(location.search);
let persoss = persoos.get('number');
console.log(persoss)
document.querySelector('#numproj').innerText = persoss 

if(persoss == 'dessin 1' || persoss == 'dessin 2' || persoss == 'dessin 3' || persoss == 'dessin 4' || persoss == 'dessin 5' || persoss == 'dessin 6' || persoss == 'dessin 7'){
      document.querySelector("#titreproj").innerHTML = persoss
      document.querySelector("#tt").innerHTML = perso['dessin'][persoss]
      document.querySelector('#projperso').innerHTML = '<img src="../img/dessins/'+persoss+'.jpg" alt="dessin">'
}
if(persoss == 'photo 1' || persoss == 'photo 2' || persoss == 'photo 3' || persoss == 'photo 4' || persoss == 'photo 5' || persoss == 'photo 6' || persoss == 'photo 7'|| persoss == 'photo 8'|| persoss == 'photo 9'|| persoss == 'photo 10'|| persoss == 'photo 11'|| persoss == 'photo 12'){
  document.querySelector("#titreproj").innerHTML = persoss
  document.querySelector("#tt").innerHTML = perso['photo'][persoss]
  document.querySelector('#projperso').innerHTML = '<img src="../img/photos/'+persoss+'.jpg" alt="dessin">'
}
if(persoss == '3D 1' || persoss == '3D 2' || persoss == '3D 3' || persoss == '3D 4' || persoss == '3D 5'){
  document.querySelector("#titreproj").innerHTML = persoss
  document.querySelector("#tt").innerHTML = perso['TroisD'][persoss]
  document.querySelector('#projperso').innerHTML = '<img src="../img/3D/'+persoss+'.jpg" alt="dessin">'
}