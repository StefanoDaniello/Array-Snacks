/*
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti
 numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi nell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda 
non sia più grande del numero di elementi totali dell'array
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/


const nuButton =document.getElementById('nuButton');
nuButton.addEventListener('click' , function(){

    let numeri =[];
    let userNumber=document.getElementById('userNumber').value;
    console.log(numeri,userNumber);
    let randomNumber;
    for(let i =1 ; i<=userNumber ; i++){
        randomNumber=getRndInteger(1, 100);
        console.log(randomNumber)
    }
  
})




