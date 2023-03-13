// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// :alphabet-yellow-question:**Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// :lampadina:**Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//Milestone 1

const gridElem = document.querySelector(".grid");
for (let i = 1; i <=100; i++){

    let result;
    let classColor
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result = "FizzBuzz";
        classColor = "fizz-buzz-color"
    } else if (i % 5 === 0){
        result = "Buzz"
        classColor = "buzz-color"
    } else if (i % 3 === 0){
        result= "Fizz"
        classColor = "fizz-color"
    } else{
        result = i
        classColor = "main-color"
    }

    console.log(result);
    gridElem.innerHTML += `<div class="box ${classColor}">${result}</div>`;
}

