var numeroUser = 0, numeroSomma = 0, risposta = confirm("vuoi reinserire il valore?");

for ( var i = 0; i < 10; i++ ) {
  numeroUser = parseInt( prompt("inserisci un numero") );
  if ( isNaN( numeroUser ) ) {
    risposta;
    if ( risposta == true ) {
      numeroUser = parseInt( prompt("Reinserisci il numero") );
    } else {
      numeroUser = 0;
    }
  }
  numeroSomma += numeroUser;
}

alert("La somma dei numeri è: " + numeroSomma );
