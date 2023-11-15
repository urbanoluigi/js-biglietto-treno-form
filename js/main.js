//alert di default che blocca il sito (eseguito subito)

alert("Benvenuto nella pagina dei biglietti,compila tutti i dati richiesti per avere il calcolo del prezzo del biglietto.");

// vediamo se funge l'alert come deve

console.log("Benvenuto")

//tutto funziona come deve, per ora

//per non perdere i dati dell'utente mettiamo questo comando così
//la pagina non ci fa perdere i dati

function utentehafinito(event){
    event.preventDefault();

//qui invece abbiamo tutti gli id con i loro valori

    let name = document.getElementById("name_and_surname").value;
    let km= document.getElementById("kmpercorrere").value;
    let age = document.getElementById("age").value;

//qui invece ho iniziato a calcolare il prezzo del ticket

let prezzoBase = kmDaPercorrere * 0.21;

// Applica gli sconti in base all'età
if (age < 18) {
    prezzoBase -= prezzoBase * 0.8; 
} else if (age >= 65) {
    prezzoBase -= prezzoBase * 0.6; 
}
let prezzoFinale = prezzoBase.toFixed(2);

//qui invece abbiamo tutti gli id che vengono printati
document.getElementById("nameuser").innerHTML = name;
document.getElementById("final-price").innerHTML = prezzoFinale;
}