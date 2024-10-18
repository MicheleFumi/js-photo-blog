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
 */


let cardEl = document.getElementById("card-wrap")

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
        let {title, url} = card
       //creo la variabile con markup responsive
        const markup =`
          <div class="col-sm-12 col-md-6 col-lg-4 ">
                   
                    <div class="card">
                     <img src="./assets/img/pin.svg" class="pin">
                        <img src=${url} class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${title}</p>
                        </div>
                    </div>
                </div>
        `
        // inserisco le 6 card nella variabile cardElement
        cardElement += markup
    });
    // stampo la variabile con le card responsive
    cardEl.innerHTML= cardElement

  })
  .catch(err => console.error(err));