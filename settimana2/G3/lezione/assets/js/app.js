// ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. leggere il campo nome e memorizzarlo
2. leggere il campo anno e memorizzarlo
3. calcolare l'età 
4. verificare la maggiore o minore età
5. scrivere nell'html 
6. cancellare il form

EVENTO SCATENANTE - click

VARIABILI GLOBALI - servono in più punti dell'analisi
    nome (la uso in due punti:1/5)
    anno (in 3 punti:2/3/4/5)
    stato minorenne/magg (4/5)
*/

let nome = document.getElementById('nome'); 
let anno = document.getElementById('anno');
let eta;
let stato;
let errore = document.getElementById('errore');

//per scatenare l'evento per convenzione si usa questo:
//serve per dare ordine agli eventi

function eventHandler(){
    leggiForm();
    //controllo form
    if (anno>=1900 && anno<=2023 && nome!=''){
        errore.innerHTML = '';
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else { 
        //alert('Inserire un numero tra 1900 e 2023')
        errore.innerHTML='Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
        return;
    }
}

function leggiForm() {
    nome = nome.value;  
    anno = anno.value;
    //console.log(nome,anno);
}

function calcolaEta(){
    eta = 2023 - anno; //generalmente quello che arriva dal form è stringa
}

function verifica(){
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
    //console.log(stato)
}

function scrivi(){
    
}