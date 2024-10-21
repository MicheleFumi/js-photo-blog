/* Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: 
utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata


DAY 2   

Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .

Dopodichè facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.


Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

 */

// creo le variabili delle card, overlay e bottone dell'overlay
let cardEl = document.getElementById("card-wrap")
let overlayEl = document.querySelector(".overlay")
let buttonEl = document.getElementById('button')

console.log(overlayEl);

console.log(cardEl);


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")

    .then(response => {
        //recupero l'array di oggetti che hanno le info delle card
        const cards = response.data
        console.log(cards);
        // creo la variabile di appoggio dove salverò il markup responsive sottoforma di stringa
        let cardElement = ''



        // creo un ciclo dove per ogni titolo e url creo una card
        cards.forEach(card => {
            let { title, url, id } = card

            //creo la variabile con markup responsive
            const markup = `
          <div class="col-sm-12 col-md-6 col-lg-4 ">
                   
                    <div class="card">
                     <img src="./assets/img/pin.svg" class="pin">
                        <img id="card-img-${id}" src=${url} class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${title}</p>
                        </div>
                    </div>
                </div>
        `
            cardElement += markup


        });
        // stampo la variabile con le card responsive

        // inserisco le 6 card nella variabile cardElement

        cardEl.innerHTML = cardElement



        cards.forEach(card => {       
            let { url, id } = card
           

             let cardImgEl = document.getElementById(`card-img-${id}`)
            console.log(cardImgEl);

            // aggiungo gli event listener per l'overlay
            cardImgEl.addEventListener('click', () => {
                overlayEl.classList.remove("d-none")
                overlayEl.innerHTML = ` <img id="card-img-${id}" src=${url} class="overlay-img" alt="...">`
                
            })
            overlayEl.addEventListener('click', () => {
                overlayEl.classList.add("d-none")
            })
            buttonEl.addEventListener('click', () => {
                overlayEl.classList.add("d-none")
            }) 
        })





    })
    .catch(err => console.error(err));

