// ### Zadanie 2
// Znajdź element o id menu,
// stwórz funkcję getDataInfo(element) do której przekaż , jako argument , znaleziony element,
// stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data-info każdego elementu li. Zauważ, że elementy li to dzieci elementu o id menu.
// zwróć tą tablicę.

var menu = document.querySelector("#menu");


function getDatasInfo(element) {
    var elements = menu.querySelectorAll("li");
    return Array.from(elements).map(function (element) {
        return element.dataset;
    });
};

console.log(getDatasInfo(menu));


// ### Zadanie 3
// Znajdź element o id main-contener.
// stwórz funkcję getElementClass(element) do której przekaż , jako argument , znaleziony element.
// zwróć tablicę złożoną z nazw klas tego elementu.

var container = document.querySelector("#main-contener");


function getElementClass(element) {
    var array = [];
    array.push(element.className);
    return array;
};

console.log(getElementClass(container));


// ### Zadanie 4
// Znajdź element o klasie pink-color.
// stwórz funkcję getElementText(element) do której przekaż , jako argument , znalezione elementy.
// zwróć z funkcji tekst, znajdujący się w tym elemencie

var pink = document.querySelector(".pink-color");

function getElementText(element) {
    return element.innerText;
};

console.log(getElementText(pink));

// ### Zadanie 5
// Znajdź elementy o klasie images.
// stwórz funkcję getElementAlt(element) do której przekaż , jako argument , znalezione elementy.
// stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

var images = document.querySelectorAll(".images");

function getElementAlt(element) {
    var imgArray = [];
    images.forEach(function (image) {
        var attribute = image.alt;
        imgArray.push(attribute);
    });
    return imgArray;
}

console.log(getElementAlt(images));

// ### Zadanie 6
// Znajdź elementy o klasie my-link.
// stwórz funkcję getElementHref(element) do której przekaż , jako argument , znalezione elementy.
// stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.

var myLinks = document.querySelectorAll(".my-link");

function getElementHref(element) {
    var hrefArray = [];
    myLinks.forEach(function (link) {
        var href = link.href;
        hrefArray.push(href);
    });
    return hrefArray;
};

console.log(getElementHref(myLinks));