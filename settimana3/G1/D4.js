
const mioArray = ['mario', 'daniele', 'giovanna', 'jessica']
console.log(mioArray)
mioArray.splice(2); //parte a cancellare dal 2
console.log(mioArray)
//console log mi restituisce lo stesso array???

const nuovoArray = mioArray.splice(2, 1)
//elimina dal due, togliene solo uno
console.log(nuovoArray)

//--------------------------------------------------------------

//seleziona elementi da checkbox
let studente = {
    nome: 'mario',
    cognome: 'rossi',
    materie: []
}

console.log(studente)

let html = document.getElementById('HTML');
let css = document.getElementById('CSS');
let js = document.getElementById('JS');

let scelti = [html, css, js];       //ci sono i 3 elementi html 


//verificare chi é checkato
function invia(){
    let corsi = [];                 //a ogni invia l'array deve essere vuoto
    document.getElementById('scelti').innerHTML = '';
    scelti.forEach((el)=> {    //funzione freccia, =function(el){}
        if (el.checked) {            //per verificare se checkato si scrive .checked
            corsi.push(el.value);
        }       
    });

    document.getElementById('scelti').innerHTML = `Corsi scelti: ${corsi}`;
    studente.materie.push(...corsi);
    console.log(studente)

}


//METODO MAP
let arrayNomi = ['mario', 'aldo', 'anna', 'nicola', 'maria']

const nomiA = arrayNomi.map((el) =>{
    if (el.charAt(0) === 'a') {
    return el;
    }
})
console.log(nomiA)

//gli undefined ci sono perche map fa qualcosa per ogni elemento degli array = ritorna un valore per tutti anche se uso if (=condizioni per pochi). con foreach non spuntano gli undefined ma dovevo creare unn nuovo array vuoto e pushare