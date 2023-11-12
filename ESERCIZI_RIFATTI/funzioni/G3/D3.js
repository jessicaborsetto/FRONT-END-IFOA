const starWarsCharacters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 277,
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    },
    {
      name: "C-3PO",
      height: 167,
      mass: 75,
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
    },
    {
      name: "R2-D2",
      height: 96,
      mass: 32,
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
    },
    {
      name: "Owen Lars",
      height: 178,
      mass: 120,
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
    },
    {
      name: "Beru Whitesun lars",
      height: 165,
      mass: 75,
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
    },
    {
      name: "R5-D4",
      height: 97,
      mass: 32,
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a",
    },
    {
      name: "Biggs Darklighter",
      height: 183,
      mass: 84,
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male",
    },
    {
      name: "Obi-Wan Kenobi",
      height: 182,
      mass: 77,
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
    },
  ];
  
  /* ESERCIZIO 1
    Crea una variabile chiamata "characters" e assegnale un array vuoto
  */
  
    const characters = []
//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 2
    Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
    Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
    Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
  */
  
    for (let i = 0; i < starWarsCharacters.length; i++) {
        const nameCharacters = starWarsCharacters[i];
        characters.push(nameCharacters.name);
    }
    
    console.log('ESERCIZIO 2')

    console.log(characters)

    //per ogni elemento fino alla fine dell'array, creami una costante che è uguale a tutti gli elementi dell'array. la proprietà che voglio di questa costante devi pusharla dentro all'array characters

//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 3
    Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
  */

    const femaleCharacters = []
  
    for (let i = 0; i < starWarsCharacters.length; i++) {
        if (starWarsCharacters[i].gender === 'female') {
            femaleCharacters.push(starWarsCharacters[i]);
        }      
    }
    console.log('ESERCIZIO 3')

    console.log(femaleCharacters)
    
    //per ogni elemento fino alla fine dell'array, se il gender dell'elemento [i] è femmina, pusha l'oggetto [i] dentro l'array femaleCharacters

//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 4
    Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
    Ad ognuna di queste proprietà assegna come valore un array vuoto.
  */
  
    let eyeColor = {
        blue : [],
        yellow : [],
        brown: [],
        red: [],
        blue_gray: [],
    }

//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 5
    Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
    Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
  */

    for (let i = 0; i < starWarsCharacters.length; i++){
    switch (starWarsCharacters[i].eye_color) {
        case 'blue':
        eyeColor.blue.push(starWarsCharacters[i])
        break;

        case 'yellow':
        eyeColor.yellow.push(starWarsCharacters[i])
        break;

        case 'brown':
        eyeColor.brown.push(starWarsCharacters[i])
        break;

        case 'red':
        eyeColor.red.push(starWarsCharacters[i])
        break;

        case 'blue-gray':
        eyeColor.blue_gray.push(starWarsCharacters[i])
        break;
    }
    }

    console.log('ESERCIZIO 5')
    console.log(eyeColor)

    //è una cosa che devo fare per ogni elemento = FOR -> per ogni elemento i dell'array starWarsCharacters.length se l'elemento i ha come eye_color x pushalo dentro l'array corrispondente


//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 6
    Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
  */

    let massaTot = 0;
    let crewMass = 0

    while (massaTot < starWarsCharacters.length){
        crewMass += starWarsCharacters[massaTot].mass;
        massaTot++
    }
    console.log('ESERCIZIO 6')
    console.log(crewMass)

    //si creano 2 variabili =0. massaTot è i. fintanto che i rimane minore della lunghezza dell'array (= la condizione rimane vera), mi calcoli la crewMass. la crewMass è data dal valore di crewMass + la massa dell'elemento. Una volta che finisce questa ripetizione incrementa l'indice (massaTot++). la massa data dal risultato precedente si aggiunge alla nuova massa fino ad arrivare alla fine del ciclo


//____________________________________________________________________________________________________________________________________________________________________________________
  
  /* ESERCIZIO 7
    Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".
  
    Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
    Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
    Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
    Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
    Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"
  
    Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
  */
  
    console.log('ESERCIZIO 7')

    if (crewMass > 1000) {
        console.log('DANGER! OVERLOAD ALERT: escape from ship now!');
    } else if (crewMass > 900){
        console.log('Critical Load: Over 900');
    } else if (crewMass > 700){
        console.log('Warning: Load is over 700 Load: Over 900');
    }else if (crewMass > 500){
        console.log('Ship is half loaded');
    }else {
        console.log('Ship is under loaded');
    }


//____________________________________________________________________________________________________________________________________________________________________________________

  /* ESERCIZIO 8
    Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
  */
  
    const robotCharacters = []

    for (let i = 0; i < starWarsCharacters.length; i++) {
        if (starWarsCharacters[i].gender === 'n/a') {
            robotCharacters.push(starWarsCharacters[i].name);
        }      
    }
    console.log('ESERCIZIO 8')

    console.log(robotCharacters)

    //come ESERCIZIO 3
  
//____________________________________________________________________________________________________________________________________________________________________________________
  
  /* --EXTRA-- ESERCIZIO 9
    Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
    Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
  */
    console.log('ESERCIZIO 9')
    
    console.log(femaleCharacters);
    console.log('Array characters prima dell\'eliminazione: ', characters.length);
    
    for (let i = 0; i < characters.length; i++) {
      for (let j = 0; j < femaleCharacters.length; j++) {
        if (femaleCharacters[j].name === characters[i]) {
          characters.splice(i,1);                               
        }
      }
    }
    
    console.log ('Array characters dopo eliminazione: ', characters.length);

    //ci sono due array di oggetti: characters e femaleCharacters. femaleCharacters si trova dentro characters quindi: ad ogni ripetizione di characters, per ogni femaleCharacters che c'è (femaleCharacters[j].name === characters[i]) fammi uno splice nel characters = elimina quell'elemento.
    //.splice(i,1) -> i è lo start = l'elemento (non sappiamo che indice ha), 1 è il numero di elementi da eliminare (quindi elimina l'elemento i)

//____________________________________________________________________________________________________________________________________________________________________________________
  
  /* --EXTRA-- ESERCIZIO 10
    Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
  */

    const casuale = Math.floor(Math.random() * starWarsCharacters.length); 
    const elemento  = starWarsCharacters[casuale];      //NB NON USARE RANDOM SU COST CHE SBALLA TUTTO LOL
    
    console.log('ESERCIZIO 10')
    console.log (elemento.name)
    console.log (elemento.height)
    console.log (elemento.mass)
    console.log (elemento.hair_color)
  
    //uso Math.floor(Math.random()) per avere l'elemento randomico (.length IMPORTANTE -> elemento random * lunghezza dell'array -> ne restituisce uno). creo una costante elemento che è uguale all'elemento casuale ricavato da starWarsCharacters (starWarsCharacters[casuale]) e faccio il console log degli elementi che voglio vedere


