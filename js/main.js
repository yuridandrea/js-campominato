// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di 
// inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati,
//  la partita termina, altrimenti si continua chiedendo all’utente 
//  un altro numero.
// La partita termina quando il giocatore 
// inserisce un numero “vietato” o raggiunge il numero massimo
//  possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.



var arrayMine = [];
var numMine = 16;
var arrayNumUtente = [];

while (arrayMine.length < numMine) {
  var numGenerato = numeriRandom(1, 100);
  if (isInArray(arrayMine, numGenerato) == false) {
  arrayMine.push(numGenerato);
  }
}

// do {
//   var numUtente = parseInt(prompt("inserisci un numero"));
// } while (isInArray(arrayMine, numUtente)==false);
console.log(arrayMine);

var haiPerso = false;

while (arrayNumUtente.length < (100 - numMine) && haiPerso == false) {
  var numUtente = parseInt(prompt("inserisci un numero"));

  haiPerso == false
  if (isInArray(arrayMine, numUtente)) {
    alert("hai perso");
    haiPerso == true;
    var nuovaPartita = prompt("Vuoi riprovare? y/n");
      if (nuovaPartita == "y") {
        location.reload();
      } else if(nuovaPartita == "n") {
        break;
      }
  }else if (isInArray(arrayNumUtente, numUtente) == true) {
    alert("hai gia utilizzato questo numero");
  } else if (isInArray(arrayNumUtente, numUtente) == false) {
    arrayNumUtente.push(numUtente);
      if (arrayNumUtente.length == ( 100 - numMine)){
        alert("hai vinto");
      }
  }
}  



// funzioni
function numeriRandom (min, max) {
  return Math.floor(Math.random()*(max - min +1)) + 1;
}

function isInArray(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}


// chiedo all utente di inesire numeri tra 1 e 100 non puo inserire piu
// volte lo stesso numero


// for (var i = 0; i < 100; i++) {
//   var numUtente = parseInt(prompt("numero"));
//   var check = sceltaUtente.includes(mine);
//   if (check == false) {
//     sceltaUtente.push(numUtente);
//   } else { 
//     prompt("boom");
    
//   }
// }

// var numUtente = parseInt(prompt("numero"));
// var check = sceltaUtente.includes(mine);

// var x = 0;
// while (x < 10) {
//   numUtente = parseInt(prompt("numero"));
//   if (check == false) {
//     sceltaUtente.push(numUtente);
//     console.log(sceltaUtente);
//   } else {
//     alert("boom");
//   location.reload();
//   }
//   x++;
// }




// var x = 0;
//  while (x < 100) {
//   var sceltaUtente = parseInt(prompt("numero"));
//   if (sceltaUtente != mine) {
//     alert("sei ancora vivo");
//   } else if (sceltaUtente == mine){
//     alert("BOOOM!");
//     break;
//   }
//   x++;
// }



// software conta i punt


// while (check == true) {
//   numUtente = parseInt(prompt("numero"));
//   check = sceltaUtente.includes(numUtente);
//   if (check == false) {
//   sceltaUtente.push(numUtente);
//   }
// }