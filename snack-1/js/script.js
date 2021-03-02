var num1 = parseInt(prompt("Inserisci un numero intero")),
    num2 = parseInt(prompt("Inserisci un altro numero intero"));

if ( isNaN( num1 ) || isNaN( num2 ) ) {
  alert("Ricarica la pagina, l' algoritmo funziona solo con numeri interi")
} else {
  if ( num1 > num2 ) {
    alert("il primo numero inserito è maggiore");
  } else if ( num1 < num2 ) {
    alert("il secondo numero inserito è maggiore");
  } else {
    alert("I numeri inseriti sono pari");
  }
}
