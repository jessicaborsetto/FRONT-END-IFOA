// 1. capire il mese (da scrivere in h1) + quanti giorni ha (coretto n di celle).

const now = new Date();

//per salvare gli appuntamenti c'è bisogno dell'array: 
//ogni appuntamento -> stringa
//ogni giorno -> infiniti appuntamenti
//ogni mese -> n giorni variabile
/* creare quindi un array di array  dove: l'array PADRE è il MESE e gli array FIGLI i GIORNI
[mese
    [giorno1 + appointments], 
    [giorno2 + appointments], 
    [giorno3 + appointments],
    ...
]
*/

const appointments = []
//ci pusheremo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
]
//per prendere i nomi in italiano e non inglse


//scrivere il mese in h1
const scriviMese = function(){
    const title = document.querySelector('h1') //seleziona lh1 dove devi scrivere il mese
    const indiceMese = now.getMonth();  //il numero del mese me lo scrivi dentro la variabile
    const nomeMese = monthNames[indiceMese];    //restituiscimi il valore dell'indice che corrisponde a 10
    title.innerText = nomeMese;
}
scriviMese();


//sappiamo il mese, ora quanti giorni ha il mese? -> N CELLE
//visto che febbraio in bisestile ha 29 gg, per sapere anche il tipo di anno

const giorniTotali = function() {
    const anno = now.getFullYear();     //2023 perchè siamo nel 2023
    const mese = now.getMonth();        //10 perchè siamo a novembre
    
    //nell'oggetto DATE il numero dei giorni del mese parte da 1, mi basta sapere qual'è l'ultimo giorno del mese in corso per avere il suo numero di giorni

    //per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese successivo al mese in corso e faccio -1
    // es -> 1st dec -1 = 30th nov

    let ultimoGiorno = new Date(anno, mese + 1, 0)        //corrisponde allo 0 dic 2023 che non esiste. corrisponde quindi al 30 nov = nov ha 30 giorni
    const numeroGiorni = ultimoGiorno.getDate();
    return numeroGiorni;    //numeroGiorni è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti ai singoli giorni
}
giorniTotali();

// quando carico un mese, eventuali classi selected precedenti devono essere rimosse altrimenti mi troverò selezionati i giorni del mese precedente che avevano degli appuntamenti
//seleziono TUTTI gli elemneti con classe selected e rimuovo la classe

const deselezioneCelle = function () {
    const celle = document.querySelectorAll('.day');
    celle.forEach((element) => {
        element.classList.remove('selected');
    });
};

const giornoAppuntamento = function(indiceGiorno){
    const giorno = document.getElementById('newMeetingDay');
    giorno.classList.add('hasDay');
    giorno.innerText = indiceGiorno + 1
}

//

const creaGriglia = function(numeroGiorni) {
    const calendarDiv = document.getElementById('calendar');
    
    for (let i = 0; i < numeroGiorni; i++) {
        const cellaGiorno = document.createElement('div');
        cellaGiorno.classList.add('day');

        cellaGiorno.addEventListener('click', function(e){
            deselezioneCelle();
            cellaGiorno.classList.add('selected');
            giornoAppuntamento(i);

            if (appointments[i].length>0){
                mostraAppuntamenti(i);

            } else {
                const divAppuntamenti = document.getElementById('appointments');
                divAppuntamenti.style.display = 'none';
            }
        });
        //devo crivere il numero di giorno dei div
        const valoreCella = document.createElement('h3')
        valoreCella.innerText = i + 1;
        //appendo gli elementi creati
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);

        //creato il calendario, inserisco l'array 
        appointments.push([])

    }
}
creaGriglia(giorniTotali())

const mostraAppuntamenti = function(indiceGiorno) {
    //si popola la lista degli appuntamenti con gli appuntamenti del giorno

    //
    const appuntamentiGiorno = appointments[indiceGiorno];
    //
    const lista = document.querySelector('#appointments ul');
    //
    lista.innerHTML = '';
    //
    appuntamentiGiorno.forEach((element) => {
        const newLi
    })
}