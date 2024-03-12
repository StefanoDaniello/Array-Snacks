/*
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let arrayco = document.getElementById('arrayco')
let arrayfr = document.getElementById('arrayfr')
let result = document.getElementById('result')


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

let somma = colori.length-frutta.length;
console.log(somma)

for(i=0 ; i<somma ; i++){
    frutta.push('frutta')
    console.log(frutta)
}


result.innerHTML=frutta;