/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 5;
let numero2 = 10;
if (numero1 > numero2) {
  document.getElementById("es1").innerHTML =
    "il numero è maggiore è " + numero1;
} else if (numero1 < numero2) {
  document.getElementById("es1").innerHTML = "il numero è minore è " + numero1;
} else document.getElementById("es1").innerHTML = "i numeri sono uguali";

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
let verifica1 = 4;
let verifica2 = 4;
if (
  verifica1 + verifica2 === 8 ||
  verifica1 === 8 ||
  verifica2 === 8 ||
  verifica1 - verifica2 === 8 ||
  verifica2 - valore1 === 8
) {
  console.log("verificato");
} else {
  console.log("non verificato");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 51;
let spedizione = 10;
let totale = totalShoppingCart; //tecnica carrello di ecommerce

if (totalShoppingCart < 50) {
  totale += spedizione;
}
document.getElementById("totale").innerHTML = "il tuo totale è: " + totale;

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 51;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let spedizione2 = 10;
let totale2 = totalShoppingCart2;

if (totalShoppingCart < 50) {
  totale2 += spedizione2;
}
document.getElementById("black").innerHTML = "il tuo totale è: " + totale2;

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

  let x1 = 27;
  let x2 = 14;
  let x3 = 45;

          /*
            if (x1 >= x2) {
              if (x3 >= x1) {
                document.getElementById("primo").innerHTML = x3;
                document.getElementById("secondo").innerHTML = x1;
                document.getElementById("terzo").innerHTML = x2;
              } else {
                if (x3 >= x2) {
                  document.getElementById("primo").innerHTML = x1;
                  document.getElementById("secondo").innerHTML = x3;
                  document.getElementById("terzo").innerHTML = x2;
                } else {
                  document.getElementById("primo").innerHTML = x1;
                  document.getElementById("secondo").innerHTML = x2;
                  document.getElementById("terzo").innerHTML = x3;
                }
              }
            } else {
              if (x3 >= x2) {
                document.getElementById("primo").innerHTML = x3;
                document.getElementById("secondo").innerHTML = x2;
                document.getElementById("terzo").innerHTML = x1;
              } else {
                if (x3 >= x1) {
                  document.getElementById("primo").innerHTML = x2;
                  document.getElementById("secondo").innerHTML = x3;
                  document.getElementById("terzo").innerHTML = x1;
                } else {
                  document.getElementById("primo").innerHTML = x2;
                  document.getElementById("secondo").innerHTML = x1;
                  document.getElementById("terzo").innerHTML = x3;
                }
              }
            }
          */

// soluzione con array
let arrayOrd = [];
arrayOrd [0] = x1;
arrayOrd [1] = x2;
arrayOrd [2] = x3;

arrayOrd.sort();

document.getElementById ('primo').innerHTML = arrayOrd[2];
document.getElementById ('secondo').innerHTML = arrayOrd[1];
document.getElementById ('terzo').innerHTML = arrayOrd[0];



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let test = 'ciao'
if (typeof test === 'number'){
  document.getElementById('typeof').innerHTML = test + ' è un numero'
 } else {
  document.getElementById('typeof').innerHTML = test + ' non è un numero'}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let number7 = 10;
let pari = 10 % 2;

if (pari == 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

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

//bisogna invertire <10 e <5 perchè si ferma al <10 AL PRIMO TRUE!!!!
let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me); //elimino IL VALORE

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = []
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100;
console.log(myArray);