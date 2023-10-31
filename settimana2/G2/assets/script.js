const mioOggetto ={
    name: 'dario',
    surname: 'rossi',
    eta: 56,
    docente: true
}

document.getElementById('name').innerHTML = mioOggetto.name;
document.getElementById('surname').innerHTML = mioOggetto.surname;
document.getElementById('eta').innerHTML = mioOggetto.eta;
//aggiunta proprieà
mioOggetto.email = 'email@email.com'
document.getElementById('email').innerHTML += mioOggetto.email;
//eliminazione proprietà
delete mioOggetto.eta;
document.getElementById('eliminata').innerHTML += mioOggetto.eta; //elimino IL VALORE
//copia oggetto
const nuovoOggetto = mioOggetto;
nuovoOggetto.name = 'pippo';
document.getElementById('primo').innerHTML += mioOggetto.name;
document.getElementById('secondo').innerHTML += mioOggetto.name;

//COPIE

//SPREAD  {...nome_oggetto}
/*const altroOggetto = {...mioOggetto};
altroOggetto.name = 'paperino'
document.getElementById('precedente').innerHTML += mioOggetto.name;
document.getElementById('nuovo').innerHTML += altroOggetto.name;
*/
//--------------------
//Object.assign: Object.assign({}, nome_oggetto);
const altroOggetto = Object.assign({}, mioOggetto);
altroOggetto.name = 'paperino'
document.getElementById('precedente1').innerHTML += mioOggetto.name;
document.getElementById('nuovo1').innerHTML += altroOggetto.name;


//array --> quali sono i valori non ci interessa, quello che conta è la struttura
const mioArray = ['gatto', 'cane', 'coniglio'];
//lettura intero array 
document.getElementById('array').innerHTML = mioArray;
//destrutturazione
document.getElementById('primaVoce').innerHTML = mioArray [0];
document.getElementById('secondaVoce').innerHTML = mioArray [1];
document.getElementById('terzaVoce').innerHTML = mioArray [2];

//CAMBIA L'ARRAY: mioArray.sort();
mioArray.sort();

document.getElementById('ordinato').innerHTML = mioArray;

document.getElementById('ordinato1').innerHTML = mioArray [0];
document.getElementById('ordinato2').innerHTML = mioArray [1];
document.getElementById('ordinato3').innerHTML = mioArray [2];

//flussi condizionali 
let peso = 16;
//if
if (peso > 15){
    document.getElementById('semplice').innerHTML = 'il peso è superiore alla portata del pallet';
}
//if-else
if   (peso <= 15){
    document.getElementById('if_else').innerHTML = 'il peso è adatto alla portata del pallet';
} else {
    document.getElementById('if_else').innerHTML = 'troppo pesante per un pallet';
}
//con peso = 16 avvengono sia il primo if'selplice' che l'else

document.getElementById('successivo').innerHTML = 'js va avanti'
//il peso non è >15, non è una condizione verificata quindi va avanti


//if-else if-else --> VERIFICA DI PIU' CONDIZIONI
let nps = 85;

if (nps <= 35) {
document.getElementById('nps').innerHTML = 'nps insufficiente'
} else if (nps <= 70) {
    document.getElementById('nps').innerHTML = 'nps sufficiente'
} else {
    document.getElementById('nps').innerHTML = 'nps ottimo' 
} //se è maggiore 71

 
/* let nps = 20;
if (nps <= 75) {
document.getElementById('nps').innerHTML = 'nps sufficiente'
} else if (nps <= 30) {
    document.getElementById('nps').innerHTML = 'nps insufficiente'
} else {
    document.getElementById('nps').innerHTML = 'nps ottimo' //se è maggiore 71
}
scrfivera' sufficiente perchè è minore di 75 
*/

