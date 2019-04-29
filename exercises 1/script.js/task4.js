
// Zadanie 4
// Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, 
// która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). 
// Jeżeli liczba jest mniejsza lub równa 0, to funkcja ma zwracać pustą tablicę.


function factors(num) {   
    var factorsArr = [];  
    if (num <= 0) {
        return factorsArr;
    }
    else  {
    for (i=1; i<=num; i++) {
        if(num%i === 0) {
            factorsArr.unshift(i); 
           }
    }
    return factorsArr;
    }
    }
    
    
    console.log(factors(54)); 
    console.log(factors(-7)); 
    console.log(factors(6)); 
    