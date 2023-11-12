/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
    let moltiplicazione = l1 * l2;
    return moltiplicazione;
};

console.log('ESERCIZIO 1')

console.log(area(2,5))

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(l1,l2){
    if (l1 === l2) {
        let somma = l1 + l2;
        return somma * 3;
    } else {
    let differenza = l1 - l2;
    return differenza;
    }
};

console.log('ESERCIZIO 2')

console.log(crazySum(4,4))

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(l1){
    if (l1 > 19){
        let diffAbs = Math.abs(l1-19) * 3;      //Math.abs per creare un risultato assoluto
        return diffAbs;
    } else {
        let diffAbs1 = l1-19;
        return diffAbs1
    }
}
console.log('ESERCIZIO 3')

console.log(crazyDiff(20,19))

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (n > 20 && n <= 100 || n === 400){           //si usa il costrutto if 
        return 'numero accettato'
    } else {
        return 'numero non accettato'
    }
}
console.log('ESERCIZIO 4')

console.log(boundary(500))

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una str come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della str fornita, ma se la str fornita comincia già con "EPICODE" allora deve
 ritornare la str originale senza alterarla.
*/

function epify(str) {
    if (str.startsWith('EPICODE')) {
        return str;
    } else {
        return 'EPICODE ' + str;
    }
}

console.log('ESERCIZIO 5');
    //console.log(epify('EPICODE are the best developers!'));
console.log(epify('Corso Front-End IFOA'));

// uso il costrutto id che ha come condizione: se str.startsWith('parola') fai questo, altrimenti questo. su console.log scrivo la str!!!

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(n){
    if (n % 3 === 0){
        return 'il numero è divisibile per 3'
    } else if (n % 7 === 0){
        return 'il numero è divisibile per 7'
    } else if (n % 3 === 0 && n % 7 === 0){
        return 'il numero è divisibile per 7 e per 3'
    } else if (n > 0){
        return 'il numero è accettato'
    } else {
        return 'il numero non è accettato'
    }
}
console.log('ESERCIZIO 6');

console.log(check3and7(7))


//faccio tutte le condizioni possibili con if else if


//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una str fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(){
    let str = 'EPICODE';
    str_split = str.split('')
    str_reverse = str_split.reverse()
    str_join = str_reverse.join('')
    return str_join
}

console.log('ESERCIZIO 7');

console.log (reverseString())

//nella funzione non serve scrivere un paramentro perchè deve ritornare solo l'azione di inversione della stringa:
//str_split = str.split('') -> per splittare let str = 'EPICODE'; in un array con i suoi elementi (le '' devono essere messe sennò non splitta un cazzo e il reverse non funzionerà)
//str_reverse = str_split.reverse() -> per invertire l'ordine delle lettere
//str_join = str_reverse.join('') -> come split ma serve per unire gli elementi splittati

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una str formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella str.
*/

let frase = 'Questo è il numero otto del gruppo di esercizi del giorno quattro settimana due'

function upperFirst(stringa) {
    let arrayFrase = stringa.split(' ');
    let risultato = [];
    for (let i = 0; i < arrayFrase.length; i++) {
        let prima = arrayFrase[i].charAt(0);
        let parolaTagliata = arrayFrase[i].slice(1);
        let parolaFinale = prima.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    }
   return risultato.join(' ')
}

console.log('ESERCIZIO 8');

console.log(upperFirst(frase))

//creo uno split per dividere la stringa in array (let arrayFrase = stringa.split (' ')), creo un array nuovo, con il ciclo for devo ciclare l'array:
//1.   let prima = arrayFrase[i].charAt(0)
        //estrai la prima lettera delle parole che trovi --> i (NON SAPPIAMO A QUALE INDICE DELL'ARRAY CORRISPONDE) è indice della prima parola senza maiuscola, 0 è la posizione della lettera (estrai 'q', 1a lettera della prima parola senza maiuscola in posizione 0)
    
//2.    let parolaTagliata = arrayFrase[i].slice(1)
        //elimina la prima lettera di ogni parola e restituisci il resto della parola (slice: parte dal carattere 1 di ogni parola (non funziona come gli array), estrae e restituisce il resto. in questo caso parte dalla prima lettera, la estrae e restituisce il resto della parola )
    
//3.    let parolaFinale = prima.toUpperCase() + parolaTagliata;
        //si cambia la lettera iniziale con .toUpperCase() e la si unise con parolaTagliata (restituzione di slice)
    
//4.    si unisce con join 

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una str. La funzione deve creare una nuova str senza il primo e l'ultimo carattere
 della str originale.
*/

function cutString(stringa){
    return stringa.slice(1, stringa.length -1); 
}

console.log(cutString('ostrogoto'))

//inizia l'estrazione dal carattere 1, lascia la lunghezza della stringa ma fermati ad un carattere dalla fine (-1)

//____________________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let arrayNumeri = [];
    for(let i = 0; i < n; i++){
    arrayNumeri.push(Math.floor(Math.random()*11))
    }
    return arrayNumeri
}
console.log ('ESERCIZIO 10')
console.log(giveMeRandom(10))

//creo un array vuoto, per tutta la sua lunghezza ipotetica devo ciclarlo aggiungendo un numero random da 0 a 10. nel 'console.log(giveMeRandom(5))' il numero rappresenta la lunghezza dell'array



