// ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. leggere il campo nome e memorizzarlo
2. leggere il campo anno e memorizzarlo
3. calcolare l'età 
4. controllare la validità del form
5. verificare la maggiore o minore età
6. scrivere nell'html 
7. cancellare il form

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
let esegui;

//per scatenare l'evento per convenzione si usa questo:
//serve per dare ordine agli eventi

function eventHandler(){
    leggiForm();
    //esegui()
    //controllo form
    if (controlla){
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else { 
        return;
    }
}

//creo una funzione di SOLO controllo, quando una funzione risulta false si ferma tutto fino a quando non dà true
 
 function controlla() {
        if (anno>=1900 && anno<=2023 && nome!='') {
            errore.innerHTML = '&nbsp;';
            return true;
        }else{
            errore.innerHTML='Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
            return false;
        }
    }


 /*   function esegui(){
        if (anno>=1900 && anno<=2023) {
            if (nome !=''){
                errore.innerHTML = '';
                esegui = true;
            }
        }
        return esegui;
    }
*/

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
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm(){
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';

}