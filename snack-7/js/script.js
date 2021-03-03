// Stampare le potenze di 2 fino al valore risultante 1000

var esponente = 0,
    risultato = 0;

do {
  risultato = Math.pow( 2, esponente );
  if ( risultato > 1000 ) {
    break
  }
  console.log( risultato );
  esponente++;
} while ( risultato < 1000 )
