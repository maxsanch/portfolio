let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('number');

console.log(LaSAE)

document.querySelector("#numero").innerHTML = LaSAE + ' : ' + SAE[LaSAE]["titre"]
document.querySelector("#semestres").innerHTML = 'Semestre : ' + SAE[LaSAE]["semestre"]

document.querySelector("#objectifs").innerHTML = SAE[LaSAE]["description"]
document.querySelector("#numproj").innerHTML = LaSAE

document.querySelector("#ac").innerHTML = '<a href="../pdf/'+LaSAE+'.pdf" class="centrage"><div class="boutontel">Lien vers le détail des ACs du projet</div ></a > '

let ressources = ""

for (let res in SAE[LaSAE]["ressources"]) {
    ressources += "<p>" + res + ' | ' + SAE[LaSAE]["ressources"][res] + "</p>"
}

document.querySelector("#ressources").innerHTML = ressources

let compe = ""
SAE[LaSAE]["compétences"].forEach(function (competences) {
    compe += "<p class='spé'>" + competences + "</p>"
});
document.querySelector('#compétences').innerHTML = compe

let livrables = ""
for (let livre in SAE[LaSAE]["livrables"]) {
    livrables += "<p>" + livre + ' | ' + SAE[LaSAE]["livrables"][livre] + "</p>"
}

document.querySelector("#livrables").innerHTML = livrables

document.querySelector("#real").innerHTML = SAE[LaSAE]["réalisation"]

let ACbn = ""
for (let Acm in SAE[LaSAE]["AC"]) {
    ACbn += "<p class='spé'>" + Acm + " | " + SAE[LaSAE]['AC'][Acm] + "</p>"
}
document.querySelector("#AC").innerHTML = ACbn

document.querySelector("#premier").innerHTML = '<img src="../img/projets/' + LaSAE + 'ill1.png" alt="illustration_maxence">'
document.querySelector("#deux").innerHTML = '<img src="../img/projets/' + LaSAE + 'ill2.png" alt="illustration_maxence">'
document.querySelector("#trois").innerHTML = '<img src="../img/projets/' + LaSAE + 'ill3.png" alt="illustration_maxence">'

if(LaSAE=="projet 4"){
    document.querySelector("#trois").innerHTML='<iframe width="90%" height="200" src="https://www.youtube.com/embed/_jRLkDJtrR4?si=_tLtZnjeU60TtVkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}
else{
    document.querySelector("#trois").innerHTML = '<img src="../img/projets/' + LaSAE + 'ill3.png" alt="illustration_maxence">'
}

let jsp = ""

// afficher les liens dans le footer vers les différentes pages

for (let i in SAE) {
    jsp += "<p> <a href='lesprojets.html?number=" + i + "' class='lienfooter'>" + i + "</a></p>"
}
document.querySelector('#link').innerHTML = jsp

// changement du header au scroll 

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

// menu déroulant téléphone

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