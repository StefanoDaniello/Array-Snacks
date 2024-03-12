/*
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let arrayco = document.getElementById('arrayco');
let arrayfr = document.getElementById('arrayfr');
let result = document.getElementById('result');
let button =document.querySelector('.btn');

let colori =[
    'red',
    'yellow',
    'green',
    'pink',
    'pink'
]

let frutta=[
    'apple',
    'banana',
    'pinepple'
]

arrayco.innerHTML= colori;
arrayfr.innerHTML= frutta;

let sottrazione = colori.length-frutta.length;
console.log(sottrazione)

for(i=0 ; i<sottrazione ; i++){
    frutta.push('frutta')
    console.log(frutta)
}

button.addEventListener('click' , function(){
    result.innerHTML=frutta;
})
