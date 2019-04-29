// ### Zadanie 3
// W pliku ```planets.js``` jest stworzona tablica obiektów ```planets```. Znajduje się w niej 8 planet Układu Słoneczngo 
// wraz z informacjami ile posiadają księżyców. Napisz funkcję ```sortPlanet(planets)```, której zadaniem będzie 
// **zwrócenie** nowej, posortowanej wg. ilości księżyców, tablicy. Czyli od Jowisza do Wenus. 


var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];



function sortPlanet(planets) {
for (i = 0; i < planets.length; i++) {
 function sortPlanet(x,y) {
     if (x.numberOfMoons > y.numberOfMoons)
   return -1;
    if (x.numberOfMoons < y.numberOfMoons)
    return 1;
    return 0;  
}
}
return planets.sort(sortPlanet);
}


console.log(sortPlanet(planets));  



// second version

// function sortPlanet(x,y) {
//     if (x.numberOfMoons > y.numberOfMoons)
//     return -1;
//     if (x.numberOfMoons < y.numberOfMoons)
//     return 1;
//     return 0;
// }

// console.log(planets.sort(sortPlanet))
