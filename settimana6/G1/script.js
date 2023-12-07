class User{
    constructor(name, surname, age, location) {
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
        this.location = location;
    }

    confrontaEta(altraPersona) {
        if (this.age === altraPersona.age) {
            return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
        } else if (this.age > altraPersona.age) {
            return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
        } else {
            return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
        }
    }
}

const utente1 = new User("Mario", "Rossi", 30, "Milano");
const utente2 = new User("Luigi", "Verdi", 25, "Roma");

// Confronto tra le età
const confrontoEta = utente1.confrontaEta(utente2);
console.log(confrontoEta);





//PET

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    stessoProprietario(altroPet) {
        return this.ownerName === altroPet.ownerName;
    }
}

function creaPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    // Aggiungi il nuovo Pet alla lista
    addPet(newPet);

    // Resetta il form
    document.getElementById('petForm').reset();
}

function addPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);

    // Verifica se ci sono altri Pets nella lista e confronta il proprietario
    const petsInList = petList.getElementsByTagName('li');
    if (petsInList.length > 1) {
        const lastPetData = petsInList[petsInList.length - 2].textContent.split(', ').map(item => item.split(': ')[1]);
        const lastPet = new Pet(...lastPetData);
    
        if (pet.stessoProprietario(lastPet)) listItem.textContent += ' - Condivide il proprietario con l\'animale precedente';
    }
   
}

//petsInList[petsInList.length - 2]: Accede all'elemento della lista che si trova in posizione (lunghezza della lista - 2). Questo è l'elemento che rappresenta l'animale domestico precedente nella lista.

//.textContent: Estrae il contenuto testuale dell'elemento della lista. Questo restituirà una stringa che rappresenta le informazioni sull'animale domestico precedente.

//.split(', '): Suddivide la stringa in un array utilizzando ', ' come separatore. Questo assume che le informazioni sull'animale domestico siano state inserite nella forma "proprietà: valore, proprietà: valore, ...".

//.map(item => item.split(': ')[1]): Applica la funzione split(': ')[1] a ciascun elemento dell'array risultante dalla divisione. Questo separa ciascun elemento usando ': ' come separatore e restituisce solo il secondo elemento dell'array risultante. L'obiettivo qui è estrarre i valori corrispondenti alle proprietà (es. nome, proprietario, specie, razza).
