// Zadanie 6
// Napisz funkcję getLastNumbers, która ma przyjmować dwa argumenty – liczbę i tablicę. 
// Funkcja ta ma zwracać tablicę skadającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. 
// Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.


function getLastNumbers(num, arr) {
    if (typeof num !== "number") {
        return [];
    }    
    if (typeof num === "number") {
    for (i=1; i<=arr.length; i++) {
    arr = arr.reverse();
    return arr.slice(0,num).reverse();
    }
    }
    } 
    
    
    
    
    console.log(getLastNumbers(2, [1,2,3,4,5,6,7,8]));
    console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
    console.log(getLastNumbers(5, [-4,-3,-2,0,1,2,4,8,3,4]));