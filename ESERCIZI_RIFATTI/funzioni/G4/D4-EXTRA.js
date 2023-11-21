// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

function checkArray(array) {
	let somma = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 5) {
			console.log('Il numero ' + array[i] + ' è maggiore di 5');
			somma += array[i];
		} else {
			console.log('Il numero ' + array[i] + ' è minore di 5');
		}
	}
	console.log(somma);
}

console.log ('ESERCIZIO EXTRA 1')
checkArray(giveMeRandom(5));

//la funzione riceve un'array di numeri quindi come parametro si scrive array. si crea una variabile somma che è uguale a zero (nel ciclo cambierà valore).
// si cicla l'array con for e si mette la condizione if e else: se l'elemento i è maggiore 5 scrivi che è >5 E aggiungine il valoe alla somma -> primo cilo sarà 0 + x = x, secondo x + y = z ecc ecc; altrimenti dì che è minore di 5. 

//____________________________________________________________________________________________________________________________________________________________________________________

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
	{
		price: 25,
		name: 'Prodotto 1',
		id: 1,
		quantity: 5,
	},
	{
		price: 37,
		name: 'Prodotto 2',
		id: 2,
		quantity: 12,
	},
	{
		price: 9,
		name: 'Prodotto 3',
		id: 3,
		quantity: 8,
	},
	{
		price: 41,
		name: 'Prodotto 4',
		id: 4,
		quantity: 20,
	},
];

function shoppingCartTotal() {
	let totalValue = 0;
	for (let i = 0; i < shoppingCart.length; i++) {
		let singleValue = shoppingCart[i].price * shoppingCart[i].quantity;
		totalValue += singleValue;
	}
	return totalValue;
}

console.log ('ESERCIZIO EXTRA 2')

console.log(shoppingCartTotal());

//si crea l'array con i diversi oggetti. nella funzione (senza parametro) scriverò una somma generale 'let totalValue = 0' e col ciclo for ciclo l'array di partenza creando una variabile singleValue (rappresenta il valore totale di 1 oggetto) dato dalla moltiplicazioni delle proprietà PRICE * QUANTITY di qull'elemento [i] contenuto nell'array di partenza. per calcolare la somma totale: totalValue += singleValue -> totalValue = totalValue + singleValue

//____________________________________________________________________________________________________________________________________________________________________________________

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let newItem = {
	price: 18,
	name: 'Prodotto 5',
	id: 5,
	quantity: 24,
};

function addToShoppingCart(newItem) {
    let shoppingCart = []
    for (let i = 0; i < newItem.length; i++) {
        shoppingCart.push(newItem)
    }
} 
console.log ('ESERCIZIO EXTRA 3')

addToShoppingCart(newItem);
console.log(shoppingCart);

// NB io quello del prof non l ho capito perchè viene fuori 5 prodotti. con questo metodo ne vengono fuori 4
//creo un oggetto con le sue caratteristiche. creo la funzione con parametro newItem. lo ciclo e pusho dentro l'array vuoto. richiamo la funzione e l'array

//____________________________________________________________________________________________________________________________________________________________________________________

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart() {
    let prices = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        prices.push(shoppingCart[i].price);
    }
    let max = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > max) {
            max = prices[i];
        }
    }
    return max;
}

console.log(maxShoppingCart());

//____________________________________________________________________________________________________________________________________________________________________________________

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
