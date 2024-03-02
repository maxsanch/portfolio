let bouton=""

for(let cle in SAE){
    bouton+='<a href="lesprojets.html?number='+cle+'"><div class="bloc"><img src="../img/'+cle+'.jpg" alt="projets" class="imm"><div class="textss">'+cle+' : '+SAE[cle]["titre"]+'</div></div></a>'
}

document.querySelector(".suite").innerHTML=bouton


let jsp = ""

// afficher les liens dans le footer vers les différentes pages

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