var numContainer = [], userNum;

for ( var i = 0; i < 6; i++ ) {
  userNum = parseInt( prompt("Inserisci un numero intero") );
  if ( isNaN( userNum ) ) {
    risposta = confirm("Il valore non è valido, vuoi reinserire il numero? altrimenti non verrà assegnato un valore")
    if ( risposta == true ) {
      userNum = parseInt( prompt("Reinserisci il numero") );
    }
  }
   else if ( userNum % 2 == 1 ) {
    numContainer[i] = userNum;
  }
}

console.log( numContainer )
