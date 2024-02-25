let bouton=""

for(let cle in SAE){
    bouton+='<a href="lesprojets.html?number='+cle+'"><div class="bloc"><img src="../img/'+cle+'.jpg" alt="projets" class="imm"><div class="textss">'+cle+' : '+SAE[cle]["titre"]+'</div></div></a>'
}

document.querySelector(".suite").innerHTML=bouton

let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('number');

console.log(LaSAE)