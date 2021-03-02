var nomiAutorizzati = [ "alessio", "clelia", "samuele" ],
    nomeUser = prompt("Inserisci il tuo nome").toLowerCase();
    invitato = false;

for ( var i = 0; i < nomiAutorizzati.length; i++ ) {
  if ( nomiAutorizzati[i] == nomeUser ) {
    invitato = true;
  }
}

if (invitato == true ) {
  alert( "Ciao " + nomeUser + ", sei tra gli invitati!");
} else {
  alert( nomeUser + ", non sei tra gli invitati, mi dispiace");
}
