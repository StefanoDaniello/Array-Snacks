/*Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
*/




const frButton =document.getElementById('frButton');
frButton.addEventListener('click' , function(){
    let refrigerator =[
        'banana', 
        'mela', 
        'pera', 
        'ciliegia', 
        'arancia', 
        'mandarino', 
        'cocomero',
        'limone', 
        'fragola'  
    ];
    let tavolo = 'pesca';
    refrigerator.push(tavolo);
    console.log(refrigerator);
    let userFruit = document.getElementById('userFruit').value;
    let found=false;
    let frResult= document.getElementById('frResult');

    for(i=0; i<=refrigerator.length; i++){
        console.log(i)
        if(userFruit === refrigerator[i]){
            found=true;
        }
    }

    if(found){
        frResult.innerHTML="Trovato! Devo solo preparare il cocktail.";
    }else if(userFruit === '' || !isNaN(userFruit)){
        frResult.innerHTML='Errore inserici un frutto!'
    }else if(userFruit !== refrigerator){
        frResult.innerHTML='questo frutto non c\è nel frigo!'
    }else{
        frResult.innerHTML="Oh no, devo uscire a comprare il cocomero!"
    }

})

const frClear = document.getElementById('frClear');

frClear.addEventListener("click", function(){
userFruit.value= '';
frResult.innerHTML= '';

})