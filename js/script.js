let bouton=""

for(let cle in SAE){
    bouton+='<a href="lesprojets.html?number='+cle+'"><div class="bloc"><img src="../img/'+cle+'.jpg" alt="projets" class="imm"><div class="textss">'+cle+' : '+SAE[cle]["titre"]+'</div></div></a>'
}

document.querySelector(".suite").innerHTML=bouton

let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('number');

console.log(LaSAE)

// icone pour la maison 

document.addEventListener('DOMContentLoaded', function() {
    const accueilIcon = document.getElementById('accueilIcon');
  
    if (accueilIcon) {
      accueilIcon.addEventListener('click', function() {
        // Redirigez vers l'index de votre site
        window.location.href = 'index.html';
      });
  
      // Affichez l'icône après un court délai
      setTimeout(function() {
        accueilIcon.style.opacity = 1;
      }, 1000); // Vous pouvez ajuster le délai selon vos préférences
    }
  });