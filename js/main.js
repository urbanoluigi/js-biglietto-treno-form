//alert di default che blocca il sito (eseguito subito)

alert("Benvenuto nella pagina dei biglietti,compila tutti i dati richiesti per avere il calcolo del prezzo del biglietto.");

// vediamo se funge l'alert come deve

console.log("Benvenuto")

//tutto funziona come deve, per ora

//per non perdere i dati dell'utente mettiamo questo comando così
//la pagina non ci fa perdere i dati

function utentehafinito(event){
    event.preventDefault();
    let name = document.getElementById("name_and_surname").value;
let km= document.getElementById("kmpercorrere").value;
let age = document.getElementById("age").value;

document.getElementById("name_surname").innerHTML = name;
document.getElementById("final-price").innerHTML = name;
document.getElementById("name_surname").innerHTML = name;


    let prezzoBase = kmDaPercorrere * 0.21;

// Applica gli sconti in base all'età
if (age < 18) {
    prezzoBase -= prezzoBase * 0.2; 
} else if (age >= 65) {
    prezzoBase -= prezzoBase * 0.4; 
}

// Formatta il prezzo finale con massimo due decimali
let prezzoFinale = prezzoBase.toFixed(2);
}