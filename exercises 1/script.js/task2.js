// ### Zadanie 2
// Napisz funkcję ```addTheSameNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać sumę
// wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszmy argument funkcji. 
// Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null. 

// ```JavaScript
// addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
// addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
// addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
// addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
// ```


function addTheSameNumbers(element, arr) {
    var sum = 0;
        for (i=0; i< arr.length; i++) {
            if (arr[i] === element) {
                sum += element;
            }  
        }
        return sum;
    }
    
    
    console.log(addTheSameNumbers(9, [2, 5, 9, 6, 9]));
    console.log(addTheSameNumbers(0, [2, 0, 5, 9, 6, 9]));
