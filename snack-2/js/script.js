var parola1 = prompt("Inserisci la prima parola"),
    parola2 = prompt("inserisci la seconda parola");

if ( parola1.length < parola2.length )
{
  alert( parola1 + "\nè la parola più corta" );
  alert( parola2 + "\nè la parola più lunga");
}
else if ( parola1.length > parola2.length )
{
  alert( parola2 + "\nè la parola più corta" );
  alert( parola1 + "\nè la parola più lunga");
}
else
{
  alert( "\nLe due parole hanno la stessa lunghezza");
}
