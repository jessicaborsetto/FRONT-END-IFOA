/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function area(l1, l2){
    moltiplicazione = l1 * l2;
    return moltiplicazione;
};
console.log(area(5, 6))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2){
    let somma = n1 + n2
    if (n1 === n2){
        let somma1 = somma * 3;
        return somma1;
    } else {
        return somma;
    }
}

console.log(crazySum(2, 7))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n3, n4){
    if(n3 < 19){
        let differenza = n3 - n4;
        let differenza1 = Math.abs(differenza);
        return differenza1;
    } else if (n3 === 19) {
        let differenza = n3 - n4;
        return differenza;
    } else {
        let differenza = n3 - n4;
        let differenza1 = Math.abs(differenza);
        let moltiplicazione = differenza1 * 3;
        return moltiplicazione;
    }
}

console.log(crazyDiff(20, 19))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    
    if (n > 20 && n <= 100 || n === 400){
        return 'true'
    } else {
        return 'false'
    }
}
console.log(boundary(401))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa){ 
    if (stringa) {
        let stringa = 'EPICODE corso IFOA';
        return stringa; 

    } else{ 
        let parola = 'EPICODE ';
        let stringa1 = 'sono una stringa';
       
        return parola + stringa1;
    }
}
console.log(epify())

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n){
    if (n%3 === 0 || n%7 === 0){
        return 'il numero è multiplo di 3 o 7';
    } else if (n>=0){
       return 'il numero è positivo';
    }else {
        return 'il numero non è accettato';
    }
}
console.log(check3and7(-11))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(){
    let stringa = 'EPICODE';
    let splitstr = stringa.split ('');
    let reversestr = splitstr.reverse();
    let joinstr = reversestr.join('');
    return joinstr;
}
console.log(reverseString())

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let frase = 'Questo è il numero otto del gruppo di esercizi del giorno quattro settimana due'

function upperFirst(stringa){
    let arrayFrase = stringa.split (' '); //ottengo un array di parole se metto lo split con lo spazio
    let risultato = [];
    for (let i=0; i < arrayFrase.length; i++){
        let prima = arrayFrase[1].charAt(0) //estrai la prima lettera delle parole che trovi
        let parolaTagliata = arrayFrase[1].slice(1) //elimina la prima lettera di ogni parola
        let parolaFinale = prima.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    }
   return risultato.join(' ')
}
console.log(upperFirst(frase))
   

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa){
    return stringa.slice(1, stringa.length -1); //da quale carattere a dove fermarti
}

console.log(cutString('gesualda'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    
function giveMeRandom(n){
    let random = Math.floor(Math.random(n)*11)
    return random;
}
console.log(giveMeRandom())