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