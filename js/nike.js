//NAVBAR - START
let homeButton = document.querySelector(".navBtn");

homeButton.addEventListener('click', function () {
    window.location.href = '../websites/index.html'
})

let aboutusButton = document.querySelector(".navBtn2");

aboutusButton.addEventListener('click', function () {
    window.location.href = 'aboutus.html'
})

let contactButton = document.querySelector(".navBtn3");

contactButton.addEventListener('click', function () {
    window.location.href = 'contact.html'
})
//NAVBAR - END

fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-nike') //Hier wordt de link gefetched
    .then(response => response.json()) //dit vraagt om een reactie
    .then(nike => { //hier wordt er gevraagd naar Nike of een dichtbezijnde woord
        console.log(nike); //console.log om te check of het werkt
        let airMaxA = 0; //index 0 van de 3 schoenen die er zijn
        let airMaxB = nike[airMaxA]; //Deze variabele is 1 object van de 3
        console.log(airMaxB); //console.log om te kijken of het werkt
        let airMaxTitle = document.querySelector('#AirMaxTitle'); //zoekt in de HTML voor een id om object informatie in te stoppen
        airMaxTitle.textContent += airMaxB.title; //vult de HTML met object informatie
        let airMaxSizes = document.querySelector('#AirMaxSizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        airMaxSizes.textContent += airMaxB.sizes[0] + " " + airMaxB.sizes[1] + " " + airMaxB.sizes[2]; //vult de HTML met object informatie
        let airMaxColour = document.querySelector('#AirMaxColour'); //zoekt in de HTML voor een id om object informatie in te stoppen
        airMaxColour.textContent += airMaxB.colour //vult de HTML met object informatie
        let AirMaxPrice = document.querySelector('#AirMaxPrice') //zoekt in de HTML voor een id om object informatie in te stoppen
        AirMaxPrice.textContent += "€" + airMaxB.price //vult de HTML met object informatie
        document.getElementById('AirMaxImg').src = airMaxB.imageUrl; //Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let performanceRevolutionA = 1;
        let performanceRevolutionB = nike[performanceRevolutionA];
        console.log(performanceRevolutionB);
        let perfRevTitle = document.querySelector('#perfRevTitle');
        perfRevTitle.textContent += performanceRevolutionB.title;
        let perfRevSizes = document.querySelector('#perfRevSizes');
        perfRevSizes.textContent += performanceRevolutionB.sizes[0] + " " + performanceRevolutionB.sizes[1] + " " + performanceRevolutionB.sizes[2];
        let perfRevColour = document.querySelector('#perfRevColour');
        perfRevColour.textContent += performanceRevolutionB.colour
        let perfRevPrice = document.querySelector('#perfRevPrice')
        perfRevPrice.textContent += "€" + performanceRevolutionB.price
        document.getElementById('perfRevImg').src = performanceRevolutionB.imageUrl;

        let phantomGXA = 2;
        let phantomGXB = nike[phantomGXA];
        console.log(phantomGXB)
        let phantomGXTitle = document.querySelector('#phantomGXTitle');
        phantomGXTitle.textContent += phantomGXB.title;
        let phantomGXSizes = document.querySelector('#phantomGXSizes');
        phantomGXSizes.textContent += phantomGXB.sizes[0] + " " + phantomGXB.sizes[1] + " " + phantomGXB.sizes[2];
        let phantomGXColour = document.querySelector('#phantomGXColour');
        phantomGXColour.textContent += phantomGXB.colour
        let phantomGXPrice = document.querySelector('#phantomGXPrice')
        phantomGXPrice.textContent += "€" + phantomGXB.price
        document.getElementById('phantomGXImg').src = phantomGXB.imageUrl;
    })

let cardContainer = document.querySelector("#cardContainer");