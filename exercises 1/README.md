## EXERCISES - part 1
----

### Zadanie 1
Napisz funkcję getNumber, która ma przyjmować dwa argumenty – liczbę i tablicę. Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

### Zadanie 2
Napisz funkcję addTheSameNumbers, która ma przyjmować dwa argumenty – liczbę i tablicę. Funkcja ta ma zwracać sumę wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszmy argument funkcji. Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.

### Zadanie 3
Tablica obiektów planets. Znajduje się w niej 8 planet Układu Słoneczngo wraz z informacjami ile posiadają księżyców. Napisz funkcję sortPlanet(planets), której zadaniem będzie zwrócenie nowej, posortowanej wg. ilości księżyców, tablicy. Czyli od Jowisza do Wenus.

### Zadanie 4
Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa 0, to funkcja ma zwracać pustą tablicę.

factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []

### Zadanie 5
Napisz funkcję getMissingElement, która ma przyjmować tylko jeden argument – tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać null.

getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1

### Zadanie 6
Napisz funkcję getLastNumbers, która ma przyjmować dwa argumenty – liczbę i tablicę. Funkcja ta ma zwracać tablicę skadającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.

getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []