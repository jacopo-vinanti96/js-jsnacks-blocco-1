var numContainer = [];

for ( var i = 0; i < 6; i++ ) {
  userNum = parseInt( prompt("Inserisci un numero intero") );
  if ( userNum % 2 == 1 ) {
    numContainer[i] = userNum;
  }
}

console.log( numContainer )
