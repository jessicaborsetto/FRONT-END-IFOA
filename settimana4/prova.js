// var numRows = 5; // Numero di righe
//   var numCols = 5; // Numero di colonne
// //   var letterArray = Array(numRows * numCols).fill('M'); // Creare un array con M in tutte le posizioni
// var letterArray = [
//     'M', 'M', 'M',
//     'M', 'M', 'M',
//     'M', 'M', 'M',
//     'M', 'M', 'M',
//     'M', 'M', 'M'
//   ]; 


// // Funzione per far scomparire e riapparire una lettera 'M in posizione casuale
// function toggleRandomM() {
//   var randomIndex = Math.floor(Math.random() * letterArray.length);
//   var letterElement = document.getElementById('letter' + randomIndex);

//   // Inverti la visibilità dell'elemento
//   letterElement.style.opacity = (letterElement.style.opacity === '0') ? '1' : '0';
// }

// // Creare gli elementi HTML per ogni lettera 'M nell'array
// var letterContainer = document.getElementById('letterContainer');
//   for (var i = 0; i < numRows; i++) {
//     for (var j = 0; j < numCols; j++) {
//       var letterDiv = document.createElement('div');
//     //   letterDiv.innerHTML = 'M';
//     letterDiv.innerHTML = letterArray[i * numCols + j];
//       letterDiv.className = 'fade-in-out';
//       letterDiv.id = 'letter' + (i * numCols + j); // Calcola un ID univoco per ogni elemento

//       letterContainer.appendChild(letterDiv);
//     }
//     letterContainer.appendChild(document.createElement('br')); // Aggiungi una nuova riga dopo ogni riga di lettere
//   }

// // Chiamare la funzione ogni secondo (o qualsiasi intervallo di tempo desiderato)
// setInterval(toggleRandomM, 1000);


//   // Esempio di utilizzo
//   var myArray = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];
//   fadeInOutArrayElements(myArray, 'elementContainer');

var numRows = 10;
var numCols = 10;
var letterArray = Array(numRows * numCols).fill('M');

// Definisci quanti elementi coinvolgere nell'animazione
var animatedCount = 30;

// Definisci gli indici delle lettere 'M' fisse
var fixedIndices = [1,2,3,4, 5, 7, 9,12, 14,16,19, 20,21, 2327, 30,32, 36, 41,47, 45, 50,55,51,59,65,60,57,61,70,74,71,76,80,81,87,85,90,91,93,94,99,100];

// Assegna gli indici fissi alle lettere 'M'
fixedIndices.forEach(function(index) {
  letterArray[index] = 'M';
});

// Creare gli elementi HTML per ogni lettera 'M nell'array
var letterGrid = document.getElementById('letterContainer');
for (var i = 0; i < numRows; i++) {
  for (var j = 0; j < numCols; j++) {
    var letterDiv = document.createElement('div');
    letterDiv.innerHTML = letterArray[i * numCols + j];
    letterDiv.className = fixedIndices.includes(i * numCols + j) ? '' : 'fade-in-out';

    letterGrid.appendChild(letterDiv);
  }
}

// Funzione per generare un numero casuale tra min e max (inclusi)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per gestire il loop di animazione
// function animateLetters() {
//     var letterElements = document.querySelectorAll('.fade-in-out');
//     var animatedIndices = [];

//     letterElements.forEach(function(element, index) {
//       setTimeout(function() {
//         element.style.opacity = 1;
//       }, index * 50); // Ritardo di 50ms per far apparire le lettere

//       setTimeout(function() {
//         element.style.opacity = 0;
//         animatedIndices.push(index); // Salva l'indice della lettera animata
//       }, index * 50 + 500); // Ritardo di 500ms per far scomparire le lettere
//     });

//     // Ripristina l'opacità delle lettere animate
//     setTimeout(function() {
//         animatedIndices.forEach(function(index) {
//           letterElements[index].style.opacity = 1;
//         });
  
//         // Ripeti l'animazione inversa
//         setTimeout(function() {
//           animatedIndices.reverse().forEach(function(index, reverseIndex) {
//             setTimeout(function() {
//               letterElements[index].style.opacity = 0;
//             }, reverseIndex * 50); // Ritardo di 50ms per far scomparire le lettere durante l'animazione inversa
//           });
//         }, 500); // Ritardo dopo il ripristino dell'opacità
//       }, (letterElements.length * 50) + 500); // Ritardo dopo la scomparsa di tutte le lettere
//     }

  // Funzione per gestire il loop di animazione
  function animateLetters() {
    var letterDivs = document.querySelectorAll('.fade-in-out');
  
    letterDivs.forEach(function(div, index) {
      // Aggiungi un ritardo casuale tra le lettere
      var randomDelay = getRandomInt(0, 500); // Ritardo massimo di 500ms
      setTimeout(function() {
        div.style.opacity = 1;
      }, index * 50 + randomDelay); // Ritardo di 50ms (più il ritardo casuale) per far apparire le lettere
  
      setTimeout(function() {
        div.style.opacity = 0;
      }, (letterDivs.length - index) * 50 + randomDelay + 500); // Ritardo di 500ms (più il ritardo casuale) per far scomparire le lettere
    });
  }

  // Avvia il ciclo di animazione ad intervalli regolari
  setInterval(function() {
    animateLetters();
  }, 3000); // Ripeti ogni 3 secondi (puoi regolare il valore in base alle tue preferenze)



