// ### Zadanie 3
// Na stronie znajduje się sekcja z dwoma elementami ```article```.
// W każdym artykule znajdują się elementy `h2`, `a` oraz `div` o klasie `content`, który jest ukryty w CSS.
// * ustaw na pierwszym linku event, który spowoduje, że kiedy użytkownik w niego kliknie pokaże się element o klasie `content` (należący do tego artukułu).
// * ustaw na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego najedzie pokaże się element o klasie 'content'
// (należący do tego artukułu).


var articles = document.querySelectorAll("article");
console.log(articles);

var links = document.querySelectorAll("a");
console.log(links);


links.forEach(function (link) {
    link.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("content");
    });
});