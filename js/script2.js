let bonneSAE = new URLSearchParams(location.search);
let LaSAE = bonneSAE.get('number');

console.log(LaSAE)

document.querySelector("#numero").innerHTML=LaSAE+' : '+ SAE[LaSAE]["titre"]
document.querySelector("#semestres").innerHTML='Semestre : '+ SAE[LaSAE]["semestre"]

document.querySelector("#objectifs").innerHTML=SAE[LaSAE]["description"]

let ressources=""

for(let res in SAE[LaSAE]["ressources"]){
    ressources+="<p>"+res+' | '+SAE[LaSAE]["ressources"][res]+"</p>"
}

document.querySelector("#ressources").innerHTML=ressources

let compe=""
SAE[LaSAE]["compétences"].forEach(function (competences) {
    compe += "<p class='spé'>" + competences + "</p>"
});
document.querySelector('#compétences').innerHTML = compe

let livrables=""
for(let livre in SAE[LaSAE]["livrables"]){
    livrables+="<p>"+livre+' | '+SAE[LaSAE]["livrables"][livre]+"</p>"
}

document.querySelector("#livrables").innerHTML=livrables

document.querySelector("#real").innerHTML=SAE[LaSAE]["réalisation"]

let ACbn = ""
for (let Acm in SAE[LaSAE]["AC"]) {
    ACbn += "<p class='spé'>" + Acm + " | " + SAE[LaSAE]['AC'][Acm] + "</p>"
}
document.querySelector("#AC").innerHTML = ACbn