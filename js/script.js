let htmlOut = document.getElementById('output');
const costPerKm = 0.21;
let discount;

// chiediamo input
let totKm = prompt('Quanti km vuoi percorrere ?');
// aggiungi controllo
let age = prompt('Quanti anni hai ?');
// aggiungi controllo

// applichiamo una riduzione ?
/*
switch (true) {
  case (age < 18):
    discount = .2;
    break;

  case (age > 65):
    discount = .4;
    break;

  default:
    discount = 0;
}
*/
// forse meglio usare if else
if (age < 18) {
  discount = .2;
} else if (age > 65) {
  discount = .4;
} else {
  discount = 0;
}
console.log(discount);

// calcolo del prezzo, arrotondato per eccesso perche 
// le compagnie di trasporto sono avide !
let price = Math.ceil(totKm * costPerKm * (1 - discount) * 100) / 100;
console.log(price);

htmlOut.innerHTML = `Tot = ${price}€. <br>Qualsiasi forma di ritardo è da aspettarsi e il biglietto non sarà rimborsato !`;
