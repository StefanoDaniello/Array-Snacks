/*
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti
 numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi nell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda 
non sia più grande del numero di elementi totali dell'array

*/


const nuButton =document.getElementById('nuButton');
nuButton.addEventListener('click' , function(){

    let numeri =[];
    let userNumber=document.getElementById('userNumber').value;
    console.log(userNumber);
    let errore=document.getElementById('errore');
    for(let i =0 ; i<userNumber ; i++){
        if(userNumber>=1){
            let randomNumber=getRndInteger(1, 100);
            numeri.push(randomNumber);
            console.log(numeri);
        }else{
            errore.innerHTML='Devi inserire minimo 1 numero!';
        }
    }
    console.log(numeri);
    let userChoice =document.getElementById('userChoice').value;
    console.log(userChoice);
    let errore2=document.getElementById('errore2');
    if(userChoice  < numeri.length){
        let lastFive= numeri.slice(-userChoice);
        let nuResult = document.getElementById('nuResult');
        nuResult.innerHTML = lastFive;
    }else{
        errore2.innerHTML='non inserire numeri più grandi!';
        nuResult.innerHTML = '';
    }
})




