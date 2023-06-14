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

fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-puma')//Hier wordt de link gefetched
    .then(response => response.json())//dit vraagt om een reactie
    .then(puma => { //hier wordt er gevraagd naar puma of een dichtbezijnde woord
        console.log(puma); //console.log om te check of het werkt
        let blazeSafariA = 0; //index 0 van de 3 schoenen die er zijn
        let blazeSafariB = puma[blazeSafariA]; //Deze variabele is 1 object van de 3
        console.log(blazeSafariB); //console.log om te kijken of het werkt
        let blazeSafariTitle = document.querySelector('#blazeSafariTitle'); //zoekt in de HTML voor een id om object informatie in te stoppen
        blazeSafariTitle.textContent += blazeSafariB.title; //vult de HTML met object informatie
        let blazeSafariSizes = document.querySelector('#blazeSafariSizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        blazeSafariSizes.textContent += blazeSafariB.sizes[0] + " " + blazeSafariB.sizes[1] + " " + blazeSafariB.sizes[2];//vult de HTML met object informatie
        let blazeSafariColour = document.querySelector('#blazeSafariColour'); //zoekt in de HTML voor een id om object informatie in te stoppen
        blazeSafariColour.textContent += blazeSafariB.colour //vult de HTML met object informatie
        let blazeSafariPrice = document.querySelector('#blazeSafariPrice') //zoekt in de HTML voor een id om object informatie in te stoppen
        blazeSafariPrice.textContent += "€" + blazeSafariB.price //vult de HTML met object informatie
        document.getElementById('blazeSafariImg').src = blazeSafariB.imageUrl; //Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let RSXCandyA = 1;
        let RSXCandyB = puma[RSXCandyA];
        console.log(RSXCandyB);
        let RSXCandyTitle = document.querySelector('#RSXCandyTitle');
        RSXCandyTitle.textContent += RSXCandyB.title;
        let RSXCandySizes = document.querySelector('#RSXCandySizes');
        RSXCandySizes.textContent += RSXCandyB.sizes[0] + " " + RSXCandyB.sizes[1] + " " + RSXCandyB.sizes[2];
        let RSXCandyColour = document.querySelector('#RSXCandyColour');
        RSXCandyColour.textContent += RSXCandyB.colour
        let RSXCandyPrice = document.querySelector('#RSXCandyPrice')
        RSXCandyPrice.textContent += "€" + RSXCandyB.price
        document.getElementById('RSXCandyImg').src = RSXCandyB.imageUrl;

        let XRaySpeedA = 2;
        let XRaySpeedB = puma[XRaySpeedA];
        console.log(XRaySpeedB)
        let XRaySpeedTitle = document.querySelector('#XRaySpeedTitle');
        XRaySpeedTitle.textContent += XRaySpeedB.title;
        let XRaySpeedSizes = document.querySelector('#XRaySpeedSizes');
        XRaySpeedSizes.textContent += XRaySpeedB.sizes[0] + " " + XRaySpeedB.sizes[1] + " " + XRaySpeedB.sizes[2];
        let XRaySpeedColour = document.querySelector('#XRaySpeedColour');
        XRaySpeedColour.textContent += XRaySpeedB.colour
        let XRaySpeedPrice = document.querySelector('#XRaySpeedPrice')
        XRaySpeedPrice.textContent += "€" + XRaySpeedB.price
        document.getElementById('XRaySpeedImg').src = XRaySpeedB.imageUrl;



    })