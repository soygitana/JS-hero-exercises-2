// #### Zadanie 1

// W pliku ```app.js```  za pomocą kontruktora stwórz funkcję ```Tree```. Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
// Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.

// Dopisz do prototypu konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I am blooming".


function Tree(type) {
    this.type = type;
};

Tree.prototype.bloom = function () {
    console.log(`I am ${this.type} and I am blooming!`);
};

var oak = new Tree("oak");
var baobab = new Tree("baobab");
var hazel = new Tree("hazel");

console.log(oak.bloom());
console.log(baobab.bloom());
console.log(hazel.bloom());