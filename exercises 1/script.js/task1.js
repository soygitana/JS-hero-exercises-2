    
// ### Zadanie 1
// Napisz funkcję ```getNumber```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. 
// Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

// ```JavaScript
// getNumber(2, [33, 54, 2, 1, 4, 100]) => true
// getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
// ```


function getNumber(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

console.log(getNumber([2, 5, 9, 6], 5));
