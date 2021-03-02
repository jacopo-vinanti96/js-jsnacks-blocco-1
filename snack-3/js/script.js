var numeroUser = 0, numeroSomma = 0;

for ( var i = 0; i < 10; i++ ) {
  numeroUser = parseInt( prompt("inserisci un numero") );
  numeroSomma += numeroUser;
  if ( isNaN( numeroSomma ) ) {
    alert("Il valore inserito non è un numero intero, riprova dall' inizio");
    i = 0;
    numeroSomma = 0;
  }
}

alert("La somma dei numeri è: " + numeroSomma );
