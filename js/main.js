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


// genero i 100 numeri 
var num = [];

for (var i = 0; i < 100; i++) {
  num[i] = i + 1;
}
// genero mine 
var mine = [];

for (let i = 0; i < 16; i++) {
  var n =  Math.floor(Math.random() * 100) + 1;
  var check = mine.includes(n); //controllo che il numero non si ripeta

  if(check === false) { // definisco come non far ripetere il numero
    mine.push(n);
  } else {
    while(check === true) {
      n = Math.floor(Math.random() * 100) + 1;
      check = mine.includes(n);
        if(check === false){
          mine.push(n);
        }
      }
    }
  // const index = mine.indexOf(mine[n]); //tolgo i numeri dall'array totale (num) - non funziona
  // if (index > -1) {
  // num.splice(index, 16);
  // }
}
console.log(mine);
console.log(num);

// chiedo all utente di inesire numeri tra 1 e 100 non puo inserire piu
// volte lo stesso numero
var sceltaUtente = [];

// for (var i = 0; i < 100; i++) {
//   var numUtente = parseInt(prompt("numero"));
//   var check = sceltaUtente.includes(mine);
//   if (check == false) {
//     sceltaUtente.push(numUtente);
//   } else { 
//     prompt("boom");
    
//   }
// }

var numUtente = parseInt(prompt("numero"));
var check = sceltaUtente.includes(mine);

var x = 0;
while (x < 10) {
  numUtente = parseInt(prompt("numero"));
  if (check == false) {
    sceltaUtente.push(numUtente);
    console.log(sceltaUtente);
  } else {
    alert("boom");
  location.reload();
  }
  x++;
}




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