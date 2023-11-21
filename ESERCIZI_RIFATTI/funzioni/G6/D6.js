/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().

  const myConcat = function (str1, str2) {
  // slice()
}
*/

let stringa1 = 'gesualda';
let stringa2 = 'stringa';

function concat(str1, str2) {
  let stringa1 = str1.slice(0, 2);
  let stringa2 = str2.slice(-3);
  let str_finale = (stringa1 + stringa2).toUpperCase();
  return str_finale;
}

console.log('ESERCIZIO 1');
console.log(concat(stringa1, stringa2));

//PRIMA dichiaro il valore delle stringhe, scrivo la funzione concat con paramentri generici str1 str2, uso slice per estrarre i caratteri, unisco le stringhe e le rendo UpperCase

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
// creare funzione
// all'interno creare array vuoto
// per 10 volte...
// generi un numero casuale
// e lo pushi
// torni l'array

  function giveMeRandom(n) {
    let arrayNum = [];
    for (let i = 0; i < 10; i++)
    if (n > 0 && n <= 100){
    arrayNum.push(Math.floor(Math.random()*11));
    }
    return arrayNum;
  }

console.log('ESERCIZIO 2');
console.log(giveMeRandom(10));

//creao una funzione con un array vuoto. visto che la sua lunghezza sarà 0-9 (10 elementi), nel ciclo for 'i' deve essere <10. imposto la condizione dell'if e pusho il numero random usando (Math.floor(Math.random()*11))

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const numeri = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,40,127]

const even = numeri.filter(function(x) {
  return  x % 2 === 0
})

console.log('ESERCIZIO 3');
console.log(even);
  


/*
const numeri = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,40,127]

const even = (number) => number.filter((x) => x % 2 === 0)


console.log('ESERCIZIO 3');
console.log(even);
*/

//creo l'array. creo una costante even alla quale assegno la funzione numeri. questa applica il filtro pari a tutti i numeri dell'array

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const somma = (array) => {
  let risultato = 0;
  array.forEach((el) => {
    risultato += el;
  });
  return risultato;
}

console.log('ESERCIZIO 4');
console.log(somma(numeri));

//usiamo la funzione freccia: alla costante somma corrisponde la funzione (non dichiarata) con parametro array. nella funzione impostiamo la variabile risultato 0. con forEach si dice di fare la somma tra 'risultato' ed 'el' (per ogni elemento 'el' dell'array: 0+1 = 1, 1+2 = 3,..)
//usiamo gli stessi numeri dell'array ESERCIZIO 3

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaReduce = (array) => 
	 array.reduce((valore, el) => valore + el);


console.log('ESERCIZIO 5');
console.log(sommaReduce(numeri));

//nella funzione freccia impostiamo il return del paramentro array con reduce: 'valore' corrisponde al valore della funzione precedente (in questo caso è 0), 'el' è l'elemento (dell'array numeri ES 3). a questo punto si fa la somma di valore e el

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const arr = [1, 2, 3]

const n = 5   

// [6, 7, 8]

const arrSum = (array, numero) => array.map((el) => el + numero);

console.log('ESERCIZIO 6');
console.log(arrSum(arr, n))

//creo 2 costanti, una 'arr = []' ( -> array) e 'n = 5' ( -> numero). a questo punto creo un'ulteriore costante arrSum che equivale ad una funzione (non nominata): i paramentri sono'array' e 'numero'. dentro la funzione voglio che si formi un nuovo array: uso la proprietà map.
//map ha come parametro il generico 'el' (che rappresenta i nuovi elementi dell'array).
//el verrà sommato al parametro 'numero' (= 5)
//si fa il console log della funzione arrSum con parametri arr e n (che sono (array, numero))

//è un ragionamento un sacco contorto ci ho messo 40 minutiiiiiiiiiiiiii

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const str = ["ho", "sonno", "voglio", "dormire"]

const arrStr = (array) => array.map((el) => el.length);

console.log('ESERCIZIO 7');
console.log(arrStr(str))


//come nell'esercizio 6, solo che c'è un unico parametro 'array' e nel map prendo in considerazione solo la LENGTH dei singoli EL dell'array

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
 
const oddNumber = () => {
  const odd = [];
  for (let i = 1; i < 100; i++) {
    if (i%2 !== 0){
    odd.push(i)
    }
  }
  return odd
}

console.log ('ESERCIZIO 8')
console.log (oddNumber())

//come ES 1

/* SOLUZIONE DI GIUSY :3

--> esercizio 2
function arrayRandom(){
  const arrayDieci= [];
  for(let i= 0; i< 10; i++){
     arrayDieci.push(Math.floor(Math.random()101))
     } return arrayDieci;
}
console.log(arrayRandom());


--> esercizio 8
function arrayDispari(array){
  return array.filter((el)=> el%2!==0);
}
console.log(arrayDispari(arrayRandom()));

//fai un return degli elementi random DISPARI (el%2!==0)
*/

//___________________________________________________________________________________________________________________________________________________________________________

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/


const vecchio = (array) => {
	let esito = { Year: 3000 };         
	array.forEach((film) => {          
		let anno = parseInt(film.Year); 
		if (anno < esito.Year) {
			esito = film;              
		}
	});
	return esito;
};

console.log('***Esercizio 9***');
console.log(vecchio(movies));

//creo variabile a cui assegno una funzione che prende come parametro l'array. alla funzione creo il blocco di istruzioni da fare: 
//creare una variabile 'esito' con un anno di partenza assurdo (questo cambierà valore ogni volta). devo 'ciclare' l'array: al posto di un for dico che per ogni elemento (forEach) devi dirmi l'anno (parseInt(film.Year) --> te lo dice non in formato stringa ma NUMERICO) e se questo è minore dell''esito', sostituiscilo con il film (per 'film) si intende il blocco oggetto che racchiude title, year, ecc ecc. --> è l'el dell'array).
//fammi il return

//___________________________________________________________________________________________________________________________________________________________________________


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function numeroTot(){
  return movies.length;
}

console.log('ESERCIZIO 10')
console.log(numeroTot())

console.log('ESERCIZIO 10b')
console.log(movies.length)

// = trova la lunghezza dell'array

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const titoli = (array) => array.map((el) => `Titolo: ${el.Title}`);

console.log('ESERCIZIO 11');
console.log(titoli(movies))

console.log('ESERCIZIO 11b');
let titolo = movies.filter((film) => film.Title)
console.log(titolo)

//creo la costante titoli, le assegno la funzione con parametro array. uso il map con la funzione freccia in modo che ritorni: `Titolo: ${el.Title}` ----> con il backtick e l'interpolazione di stringhe riesco a scrivere tutto in una singola riga: 'titolo' + proprietà dell'elemento(= Title: 'Avengers: Endgame',)

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const time = (number) => number.filter((film) => parseInt(film.Year) > 2000)

console.log('ESERCIZIO 12')
console.log(time(movies))

const time1 = movies.filter((film) => parseInt(film.Year) > 2000)
console.log('ESERCIZIO 12b')
console.log(time1)

//filtro il parseInt della proprietà Year dell'elemento film 

function uscite(movies){
  return movies.filter((film)=>  parseInt(film.Year) > 2000);
};
console.log('ESERCIZIO 12c')
console.log(uscite(movies))

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sommaTot = (array) => {return array.reduce((accumulatore, film) => accumulatore + parseInt(film.Year),0);}
console.log('ESERCIZIO 13')
console.log(sommaTot(movies))

 //il ,0 significa guarda che sono tutti numeri, non concatenarli come se fossero stringhe

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const trova = (array, index) => {return array.find((film) => film.imdbID === index);}

console.log('ESERCIZIO 14')
console.log(trova(movies, 'tt2395427'))

//sintassi:
//array.find(function(currentValue, index, arr),thisValue)

//la funzione riceve il parametro array e un secondo parametro index (da specificare nel console log per trovare il nome del film). la funzione deve ritornare l'elemento film la cui proprietà imdbID corrisponde all'index che decidiamo noi (nel console.log)

//___________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const anno = (array) => array.findIndex((film) => parseInt(film.Year) === 2018)

console.log('ESERCIZIO 15')
console.log(anno(movies))

// = 11 ---> findIndex trova l'indice dell'array: trova l'indice del film che corrisponde all'anno X