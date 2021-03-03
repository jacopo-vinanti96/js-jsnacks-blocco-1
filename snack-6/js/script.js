// Chiedi N numeri

var n = 0, cubo = 0;

do {
  n = parseInt( prompt("Inserisci la quantità di numeri da elevare al cubo") );
  if ( isNaN( n ) ) {
    alert("Il valore inserito non è valido");
  }
} while ( isNaN( n ) )

// Stampa N numeri al cubo

for ( var i = 1; i <= n; i++ ) {
  cubo = i * i * i;
  console.log( i );
}
