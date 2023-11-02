/* const gruppo={
    nome: "Mario",
    cognome: "Rossi",
    document.getElementById('prova').innerHTML = gruppo,
  }
  
  NON FUNZIONA PERCHE' document.getElementById('prova').innerHTML = gruppo, NON TROVA L'ELEMENTO DENTRO IL GRUPPO */

/* _____________________________________________________________________________________________________________________
  const gruppo={
    nome: "Mario",
    cognome: "Rossi",
  }
  
  document.getElementById('prova').innerHTML = gruppo

FUNZIONA MA document.getElementById('prova').innerHTML = gruppo, STAMPA [object Object] = l'oggetto in quanto tale */

/*_______________________________________________________________________________________________________________________
const gruppo={
    nome: "Mario",
    cognome: "Rossi",
  }
  
  document.getElementById('prova').innerHTML = gruppo.nome

FUNZIONA E STAMPA nome */