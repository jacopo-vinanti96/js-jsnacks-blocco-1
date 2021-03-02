var numeroUser = 0, numeroSomma = 0;

for ( var i = 0; i < 10; i++ ) {
  numeroUser = parseInt( prompt("inserisci un numero") );
  numeroSomma += numeroUser;
  if ( isNaN( numeroSomma ) ) {
    alert("Il valore inserito non è un numero intero");
  }
}

alert("La somma dei numeri è: " + numeroSomma );
