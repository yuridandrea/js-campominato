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

// genero un array estraendo 16 numeri casuali 
var num = [];
var mine =[];
var numRimossi = [];


for (var i = 0; i < 100; i++) {
  num[i] = i + 1;
  while(mine.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
     numRimossi = removeItem(num, mine[r]); 
     i++;
  }
}
console.log(mine);
console.log(num);


function removeItem(arr, value) { 
  var index = arr.indexOf(value);
  if (index > -1) {
      arr.splice(index, 1);
  }
  return arr;
}

// chiedo all utente di inesire numeri tra 1 e 100 non puo inserire piu
// volte lo stesso numero
// var numUtente = [];
// var numScelti = [];

// var i = 0;
// while (numUtente[i] != numScelti){
//   numUtente[i] = i + parseInt(prompt("nuemri"));
//   numScelti.push(numUtente[i]);
//   i++;
// }
// console.log(numScelti);
// console.log(numUtente);
// se il numero e' uno dei 16 la partita termina
// altrimenti si va avanti



// software conta i punt


if(mine.indexOf(r) === -1) mine.push(r);
