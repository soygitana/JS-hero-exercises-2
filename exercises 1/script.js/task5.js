// Zadanie 5
// Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument – tablicę zawierającą rosnące liczby całkowite. 
// Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden).
// Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać null.



function getMissingElement(newArr) {
    var missingElement = 0;
	for (var i = 0; i < newArr.length - 1; i++) {
		if (newArr[i]+1 != newArr[i+1]) {
			missingElement = newArr[i]+1;
		} 
	}
	if (missingElement === 0) {
	 return null;
    }
    return missingElement;
}


console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
