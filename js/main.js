//alert di default che blocca il sito (eseguito subito)

alert("Benvenuto nella pagina dei biglietti,compila tutti i dati richiesti per avere il calcolo del prezzo del biglietto.");

// vediamo se funge l'alert come deve

console.log("Benvenuto")

//tutto funziona come deve, per ora

//per non perdere i dati dell'utente mettiamo questo comando così
//la pagina non ci fa perdere i dati

function utentehafinito(event){
    event.preventDefault();
}

//ora dall'html i dati dell'utente che ha inserito, ovvero:nome e cognome
//km da percorrere e fascia d'età

let name = document.getElementById("name_and_surname").value;
let name = document.getElementById("kmpercorrere").value;
let name = document.getElementById("age").value;

//ora calcoliamo il prezzo totale del viaggio, secondo queste regole:
//ilprezzo del biglietto