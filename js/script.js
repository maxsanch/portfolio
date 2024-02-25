let bouton=""

for(let cle in SAE){
    bouton+='<div class="bloc"><img src="../img/'+cle+'.jpg" alt="projets" class="imm"><div class="textss">'+cle+' : '+SAE[cle]["titre"]+'</div></div>'
}

document.querySelector(".suite").innerHTML=bouton