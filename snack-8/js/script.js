// Chiedere un numero di 4 cifre
var n = 0, risultato = 0;

do {
  n = parseInt( prompt ("Inserisci un numero di 4 cifre") )
  if ( n.toString().length != 4 ) {
    alert("Il valore inserito non è valido")
  }
} while ( n.toString().length != 4 )


// Stampare la somma delle 4 cifre

for ( var i = 0; i < n.toString().length; i++ ) {
  risultato += risultato + n.toString(i);
}

console.log( risutato );
