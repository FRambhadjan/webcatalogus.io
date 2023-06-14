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


fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-dr-martens') //Hier wordt de link gefetched
    .then(response => response.json()) //dit vraagt om een reactie
    .then(DrMartens => { //hier wordt er gevraagd naar DrMartens of een dichtbezijnde woord
        console.log(DrMartens); //console.log om te check of het werkt
        let DM1460A = 0; //index 0 van de 3 schoenen die er zijn
        let DM1460B = DrMartens[DM1460A]; //Deze variabele is 1 object van de 3
        console.log(DM1460B); //console.log om te kijken of het werkt
        let DM1460Title = document.querySelector('#DM1460Title'); //zoekt in de HTML voor een id om object informatie in te stoppen
        DM1460Title.textContent += DM1460B.title; //vult de HTML met object informatie
        let DM1460Sizes = document.querySelector('#DM1460Sizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        DM1460Sizes.textContent += DM1460B.sizes[0] + " " + DM1460B.sizes[1] + " " + DM1460B.sizes[2]; //vult de HTML met object informatie
        let DM1460Colour = document.querySelector('#DM1460Colour'); //zoekt in de HTML voor een id om object informatie in te stoppen
        DM1460Colour.textContent += DM1460B.colour //vult de HTML met object informatie
        let DM1460Price = document.querySelector('#DM1460Price')
        DM1460Price.textContent += "€" + DM1460B.price //vult de HTML met object informatie
        document.getElementById('DM1460Img').src = DM1460B.imageUrl; //Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let DMTARIKA = 1;
        let DMTARIKB = DrMartens[DMTARIKA];
        console.log(DMTARIKB);
        let DMTARIKTitle = document.querySelector('#DMTARIKTitle');
        DMTARIKTitle.textContent += DMTARIKB.title;
        let DMTARIKSizes = document.querySelector('#DMTARIKSizes');
        DMTARIKSizes.textContent += DMTARIKB.sizes[0] + " " + DMTARIKB.sizes[1] + " " + DMTARIKB.sizes[2];
        let DMTARIKColour = document.querySelector('#DMTARIKColour');
        DMTARIKColour.textContent += DMTARIKB.colour
        let DMTARIKPrice = document.querySelector('#DMTARIKPrice')
        DMTARIKPrice.textContent += "€" + DMTARIKB.price
        document.getElementById('DMTARIKImg').src = DMTARIKB.imageUrl;

        let DMPascalA = 2;
        let DMPascalB = DrMartens[DMPascalA];
        console.log(DMPascalB)
        let DMPascalTitle = document.querySelector('#DMPascalTitle');
        DMPascalTitle.textContent += DMPascalB.title;
        let DMPascalSizes = document.querySelector('#DMPascalSizes');
        DMPascalSizes.textContent += DMPascalB.sizes[0] + " " + DMPascalB.sizes[1] + " " + DMPascalB.sizes[2];
        let DMPascalColour = document.querySelector('#DMPascalColour');
        DMPascalColour.textContent += DMPascalB.colour
        let DMPascalPrice = document.querySelector('#DMPascalPrice')
        DMPascalPrice.textContent += "€" + DMPascalB.price
        document.getElementById('DMPascalImg').src = DMPascalB.imageUrl;



    })