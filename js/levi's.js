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

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-levi') //Hier wordt de link gefetched
    .then(response => response.json()) //dit vraagt om een reactie
    .then(levi => { //hier wordt er gevraagd naar levi of een dichtbezijnde woord
        console.log(levi); //console.log om te check of het werkt
        let CargobroekA = 0; //index 0 van de 3 schoenen die er zijn
        let CargobroekB = levi[CargobroekA]; //Deze variabele is 1 object van de 3
        console.log(CargobroekB); //console.log om te kijken of het werkt
        let CargobroekTitle = document.querySelector('#CargobroekTitle'); //zoekt in de HTML voor een id om object informatie in te stoppen
        CargobroekTitle.textContent += CargobroekB.title; //vult de HTML met object informatie
        let CargobroekSizes = document.querySelector('#CargobroekSizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        CargobroekSizes.textContent += CargobroekB.sizes[0] + " " + CargobroekB.sizes[1] + " " + CargobroekB.sizes[2];//vult de HTML met object informatie
        let CargobroekColour = document.querySelector('#CargobroekColour'); //zoekt in de HTML voor een id om object informatie in te stoppen
        CargobroekColour.textContent += CargobroekB.colour //vult de HTML met object informatie
        let CargobroekPrice = document.querySelector('#CargobroekPrice') //zoekt in de HTML voor een id om object informatie in te stoppen
        CargobroekPrice.textContent += "€" + CargobroekB.price //vult de HTML met object informatie
        document.getElementById('CargobroekImg').src = CargobroekB.imageUrl; //Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let ChinoA = 1;
        let ChinoB = levi[ChinoA];
        console.log(ChinoB);
        let ChinoTitle = document.querySelector('#ChinoTitle');
        ChinoTitle.textContent += ChinoB.title;
        let ChinoSizes = document.querySelector('#ChinoSizes');
        ChinoSizes.textContent += ChinoB.sizes[0] + " " + ChinoB.sizes[1] + " " + ChinoB.sizes[2];
        let ChinoColour = document.querySelector('#ChinoColour');
        ChinoColour.textContent += ChinoB.colour
        let ChinoPrice = document.querySelector('#ChinoPrice')
        ChinoPrice.textContent += "€" + ChinoB.price
        document.getElementById('ChinoImg').src = ChinoB.imageUrl;

        let KorteBroekA = 2;
        let KorteBroekB = levi[KorteBroekA];
        console.log(KorteBroekB)
        let KorteBroekTitle = document.querySelector('#KorteBroekTitle');
        KorteBroekTitle.textContent += KorteBroekB.title;
        let KorteBroekSizes = document.querySelector('#KorteBroekSizes');
        KorteBroekSizes.textContent += KorteBroekB.sizes[0] + " " + KorteBroekB.sizes[1] + " " + KorteBroekB.sizes[2];
        let KorteBroekColour = document.querySelector('#KorteBroekColour');
        KorteBroekColour.textContent += KorteBroekB.colour
        let KorteBroekPrice = document.querySelector('#KorteBroekPrice')
        KorteBroekPrice.textContent += "€" + KorteBroekB.price
        document.getElementById('KorteBroekImg').src = KorteBroekB.imageUrl;



    })