/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function maggiore(n1, n2){
  if (n1>n2){
    return true
  } else {
    return false
  }
}
console.log('***esercizio 1***')
console.log(maggiore(5,7))


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notEqual(n3){
  if (n3 === 5){
    return true
  } else {
    return 'not equal'
  }
}
console.log('***esercizio 2***')
console.log(notEqual(7))


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function diviso(n4){
  if (n4 % 5 === 0){
    return 'divisibile per 5'
  } else {
    return 'non divisibile per 5'
  }
}
console.log('***esercizio 3***')
console.log(diviso(10))


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verifica(n5, n6){
  if (n5 + n6 === 8 || n5 === 8 || n6 === 9){
    return true
  } else {
    return false
  }
}
console.log('***esercizio 4***')
console.log(verifica(8, 10))


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function saldo(l) {
  if (l > 50) {
    return 'il tuo carrello è: ' + l + ' hai diritto alla spedizione gratuta'
  } else {
    let somma = l + 10;
    return 'il tuo carrello è: ' + somma
  }
}
console.log('***esercizio 5***')

console.log(saldo(100))

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function newSaldo(l) {
  let blackFriday = l * 0.8;
  if (blackFriday > 50) {
    return 'il tuo carrello è: ' + l + ' hai diritto alla spedizione gratuta'
  } else {
    let somma = blackFriday + 10;
    return 'il tuo carrello è: ' + somma
  }
}
console.log('***esercizio 6***')

console.log(newSaldo(20))

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let x1 = 7;
let x2 = 127;
let x3 = 8;

let array = []
array [0] = x1
array [1] = x2
array [2] = x3

array.sort()

console.log('***esercizio 7***')

console.log(array[1])
console.log(array[2])
console.log(array[0])

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function myTypeof(l){
  return typeof l
}
console.log('***esercizio 8***')

console.log(myTypeof('gesualda'))

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function oddEven(l){
  if (l%2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}
console.log('***esercizio 9***')
console.log(oddEven(7))

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

let val = 7

console.log('***esercizio 10***')

if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Meno di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

console.log('***esercizio 11***')

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName


console.log('***esercizio 12***')

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()

console.log('***esercizio 13***')

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arrayNum = [];

arrayNum[0] = 1
arrayNum[1] = 2
arrayNum[2] = 3
arrayNum[3] = 4
arrayNum[4] = 5
arrayNum[5] = 6
arrayNum[6] = 7
arrayNum[7] = 8
arrayNum[8] = 9
arrayNum[9] = 10

console.log('***esercizio 14***')
console.log(arrayNum)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayNum[9] = 100
console.log('***esercizio 15***')
console.log(arrayNum)

