// Dichiarazione variabili
var numeri = [ 13, 2, 5, 11, 8, 23, 16, 31, 4, 6 ], i, somma = 0;

// Ciclo con incremento +2 partendo da 1
for ( i = 1; i < numeri.length; i = i + 2 ) {
  somma += numeri[i];
}
console.log(somma);
