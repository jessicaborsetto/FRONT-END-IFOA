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
       
        let cardText = document.createElement('p');
   
        let divButtons = document.createElement('div');
        divButtons.classList.add('divButtons')

        let buttonScarta = document.createElement('a');
        buttonScarta.classList.add('btn');
        buttonScarta.classList.add('btn-danger');
        buttonScarta.classList.add('btnInfo');
        buttonScarta.innerText = 'Info'
        buttonScarta.setAttribute('id', 'cardModal')

        let buttonBuy = document.createElement('a');
        buttonBuy.classList.add('btn');
        buttonBuy.classList.add('btn-danger');
        buttonBuy.classList.add('btnInfo');
        buttonBuy.innerText = 'Compra'

        
        buttonScarta.addEventListener('click', function () {
            // Creare il modale dinamicamente in JavaScript
            let modal = document.createElement('div');
            modal.classList.add('modal');
            modal.classList.add('fade');
            modal.setAttribute('id', 'dynamicCardModal');
            modal.setAttribute('tabindex', '-1');
            modal.setAttribute('role', 'dialog');

            let modalDialog = document.createElement('div');
            modalDialog.classList.add('modal-dialog');
            modalDialog.setAttribute('role', 'document');

            let modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            let modalHeader = document.createElement('div');
            modalHeader.classList.add('modal-header');

            let modalTitle = document.createElement('h5');
            modalTitle.classList.add('modal-title');
            modalTitle.classList.add('display-6');
            modalTitle.innerText = el.title;

            let closeButton = document.createElement('button');
            closeButton.classList.add('close');
            closeButton.classList.add('btnClose');
            closeButton.setAttribute('type', 'button');
            closeButton.setAttribute('data-dismiss', 'modal');
            closeButton.setAttribute('aria-label', 'Close');

            closeButton.addEventListener('click', function () {
                modal.remove(); // Rimuovi il modale al clic sulla chiusa
                document.body.classList.remove('modal-open');
            });

            let closeIcon = document.createElement('i');
            closeIcon.setAttribute('aria-hidden', 'true');
            closeIcon.classList.add('bi', 'bi-x-circle-fill')
           
            closeButton.appendChild(closeIcon)

            let modalBody = document.createElement('div');
            modalBody.classList.add('modal-body', 'category');
            modalBody.innerHTML = `
                <p>${el.category}</p>
                <p>$${el.price}</p>
                <img src="${el.img}" class="img-fluid" alt="${el.title}">
            `;


            let buttonDiv = document.createElement('div');
            buttonDiv.classList.add('buttonDiv');

            let button = document.createElement('a');
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.href = '#';
            button.innerText ='vai al carrello'

            buttonDiv.appendChild(button)
            modalBody.appendChild(button)
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(closeButton);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalDialog.appendChild(modalContent);
            modal.appendChild(modalDialog);

            // Aggiungere il modale dinamicamente al body
            document.body.appendChild(modal);

            // Aggiungere la classe 'show' per mostrare il modale
            modal.classList.add('show');
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        });

        
        card.appendChild(img)
        card.appendChild(cardBody)
        // card.appendChild(buttonDiv)
        card.appendChild(divButtons)
        divButtons.appendChild(buttonBuy)
        divButtons.appendChild(buttonScarta)


        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        
       

        document.querySelector('main').appendChild(card)
        
    });
}

