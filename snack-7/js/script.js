// Stampare le potenze di 2 fino al valore risultante 1000

var esponente = 0,
    risultato = 0;

do {
  risultato = Math.pow( 2, esponente );
  if ( risultato < 1000) {
    console.log( risultato );
    esponente++;
  }
} while ( risultato < 1000 )

// for ( var n = 1; n < 1000; n = n * 2 ) {
//   console.log(n)
// }

// do {
//   risultato = Math.pow( 2, esponente );
//   if ( risultato < 1000) {
//     console.log( risultato );
//     esponente++;
//   }
// } while ( Math.pow( 2, esponente ) < 1000 )
