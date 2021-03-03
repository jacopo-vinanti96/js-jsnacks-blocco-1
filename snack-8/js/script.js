// Chiedere un numero di 4 cifre
var n = 0, risultato = 0;

do {
  n = parseInt( prompt ("Inserisci un numero di 4 cifre") );
  if ( n.toString().length != 4 ) {
    alert("Il valore inserito non è valido");
  }
} while ( n.toString().length != 4 )


// Stampare la somma delle 4 cifre

for ( var i = 0; i < n.toString().length; i++ ) {
  risultato += risultato + n.toString(i);
}

console.log( risutato );

// SOLUZIONE: Siccome le stringhe sono considerate dai programmi come un array di caratteri, ogni carattere è un elemento dell' array stringa.

// var n = prompt("Inserisci un numero di 4 cifre");
// var somma = 0;
// for ( var i = 0; i < n.length; i++ ) {
//   somma += parseInt( n[i] );
// }
//
// console.log( somma );
