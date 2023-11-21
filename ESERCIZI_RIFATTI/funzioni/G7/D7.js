/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = document.querySelector('h1');
changeTitle.innerHTML = 'Ostrogoto'

//creo una nuova costante changeTitle per accedere all'elemento 'h1' nell'html e lo rinonimo con quello che voglio io

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = document.querySelector('h1');
addClassToTitle.classList.add('myHeading');


//OPPURE
//      const addClassToTitle = document.querySelector('h1').classList.add('myHeading'); 

//uso la proprietà add per agiungere la classe (---> la renderà lilla)

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
*/      

const changePcontent = function () {
  document.querySelectorAll('p').forEach((element) => {
    element.innerHTML = 'Ermenegildo è il nuovo contenuto del p';
     })
}
changePcontent()

//devo applicare un forEach per cambiare il testo per ogni elemento p

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const newLink = document.querySelector('a:not(footer a)')
newLink.innerHTML = 'Questo link porta a google'

const changeUrls = function () {
  const newLink = document.querySelectorAll('a:not(footer a)');
  newLink.forEach((element) => {
   element.setAttribute('href', 'https://www.google.com');
   
    })
    
};

changeUrls()

//ho cambiato il testo del link usando lo stesso metodo dell'ES 1
//

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const seconda = document.getElementById('secondList')
  const newLi = document.createElement('li')
  newLi.innerHTML = 'nuovo elemento'
  seconda.appendChild(newLi)
};

addToTheSecond()

//creare una costante che selezioni la lista che voglio. creare una seconda costante che dica il tipo di elemento da creare e che cosa ci deve essere scritto. appendo la seconda costante alla prima

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const primoDiv = document.querySelector('div')
  const newP = document.createElement('p')
  newP.innerHTML = 'questo è un nuovo paragrafo'
  primoDiv.appendChild(newP)
};

addParagraph()

  //come esercizio 5

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = document.querySelector('ul').style.display = "none"

//uso style per settare lo stile dell'elemento = come mettere un css 

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
	const liste = document.querySelectorAll('ul');
	liste.forEach((element) => {
	element.classList.add('sfondoVerde');
	});
};

paintItGreen();

//AGGIUNGERE UNA CLASSE con lo style non funzia

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function(){
  const titolo = document.querySelector('h1');
  titolo.onclick = function(){
  titolo.innerHTML = titolo.innerHTML.slice(0, -1)
}
}

// creo la costante makeItClickable alla quale associo  la funzione: delineo l'elemento h1, gli applico la funzione onclick (devo inserirla anche nellHTML) e dico che al testo nell'html corrisponde al testo html con slice (=ogni volta che lo clicco si toglie l'ultima lettera)

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footerLink = document.querySelector('footer');
  footerLink.onclick = function(){
    const link = document.querySelector('footer a')
    alert(link.getAttribute('href'))
  }
};

//come esercizio 9 solo che si parte dal presupposto che io non conosco il link presente nel footer. quindi devo selezionare il 'footer a' e nell'alert dirgli di inserire l'attributo href del link

//____________________________________________________________________________________________________________________________________________________________________________

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
 
};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
