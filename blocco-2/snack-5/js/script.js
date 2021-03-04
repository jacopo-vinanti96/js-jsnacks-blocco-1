// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var arrayBig = [46, 39, 57, 30, 78, 35, 73, 93, 44, 15, 21, 64],
    arraySmall = [76, 13, 51],
    i = 0;

do {
  if ( arraySmall[i] == undefined ) {
  arraySmall[i] = Math.floor( Math.random() * 100 );
  }
  i++;
} while ( arraySmall.length < arrayBig.length )

console.log( arraySmall, arrayBig );
