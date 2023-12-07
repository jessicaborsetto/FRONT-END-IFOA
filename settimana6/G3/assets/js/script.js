const url = "https://striveschool-api.herokuapp.com/books";

fetch(url)
.then(response => response.json()
.then(libri => handleBooks(libri)))


function handleBooks(libri){
    libri.forEach(el => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('bookCard');

        let img = document.createElement('img');
        img.src = el.img;
        img.classList.add('card-img-top');
        img.classList.add('imgHeight');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.display = "none";
        

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = el.title;

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.classList.add('category');
        cardText.innerText = el.category;
       
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');

        let cart = document.createElement('i');
        cart.classList.add('bi');
        cart.classList.add('bi-cart');

        let button = document.createElement('a');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.href = '#';
        button.innerText = cart + 'vai al carrello'
        button.style.display = "none";

        button.appendChild(cart);

        let buttonScarta = document.createElement('a');
        buttonScarta.classList.add('btn');
        buttonScarta.classList.add('btn-danger');
        buttonScarta.classList.add('btnInfo');
        buttonScarta.innerText = 'Info'
        
        buttonScarta.addEventListener('click', function() {
            // Inverte la visibilità di cardBody associato a questo pulsante
            if (cardBody.style.display === 'none' &&  button.style.display === "none") {
                cardBody.style.display = 'inline';
                button.style.display = "inline";
            } else {
                cardBody.style.display = 'none';
                button.style.display = "none";
            }
        });


        card.appendChild(img)
        card.appendChild(cardBody)
        card.appendChild(buttonDiv)
        card.appendChild(buttonScarta)

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        buttonDiv.appendChild(button)
       

        document.querySelector('main').appendChild(card)
        
    });
}
