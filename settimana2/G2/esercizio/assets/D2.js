/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 5;
let numero2 = 10;
if (numero1 > numero2) {
  document.getElementById("es1").innerHTML = "il numero è maggiore è " +  numero1;
} else if (numero1 < numero2){ 
  document.getElementById("es1").innerHTML = "il numero è minore è " +  numero1;
} else
  document.getElementById("es1").innerHTML = "i numeri sono uguali";

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 10;

if (numero3 == 5) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let divisione = 20 % 5;
if (divisione == 0) {
  console.log("il numero è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero5 = 4
let numero6 = 4
if (numero5 + numero6 == 8 || numero6 == 8 ) {
  console.log("true");
} else {console.log("false");}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
if  (totalShoppingCart < 50) {
  document.getElementById('ShoppingCart').innerHTML = totalShoppingCart + 10;
} else {
  document.getElementById('ShoppingCart').innerHTML = 'hai la spedizione gratis';
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const scontoBF = 20;
let totalShoppingCart1 = 60;
let totalescontato = (totalShoppingCart1 * scontoBF)/100

if  (totalescontato < 50) {
  document.getElementById('ShoppingCart1').innerHTML = totalShoppingCart + 10;
} else {
  document.getElementById('ShoppingCart1').innerHTML = 'hai la spedizione gratis';
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let valore1 = 2;
let valore2 = 10;
let valore3 = 1;

if (valore1 < valore2) {
  document.getElementById ('ordine').innerHTML = valore2; 
}






/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log (typeof 10);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let number7 = 10;
let pari = 10 % 2;

if (pari == 0) {console.log ('il numero è pari')};


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

     


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = 'Toronto';
document.getElementById('me').innerHTML =  me + '' + me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('eliminato').innerHTML =  me + '' + me.city;
delete me.city;
document.getElementById('eliminato').innerHTML += me.city; //elimino IL VALORE