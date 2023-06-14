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

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-ralph-lauren') //Hier wordt de link gefetched
    .then(response => response.json()) //dit vraagt om een reactie
    .then(ralphlauren => { //hier wordt er gevraagd naar levi of een dichtbezijnde woord
        console.log(ralphlauren); //console.log om te check of het werkt
        let ChinoA = 0; //index 0 van de 3 schoenen die er zijn
        let ChinoB = ralphlauren[ChinoA]; //Deze variabele is 1 object van de 3
        console.log(ChinoB); //console.log om te kijken of het werkt
        let ChinoTitle = document.querySelector('#ChinoTitle'); //zoekt in de HTML voor een id om object informatie in te stoppen
        ChinoTitle.textContent += ChinoB.title; //vult de HTML met object informatie
        let ChinoSizes = document.querySelector('#ChinoSizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        ChinoSizes.textContent += ChinoB.sizes[0] + " " + ChinoB.sizes[1] + " " + ChinoB.sizes[2]; //vult de HTML met object informatie
        let ChinoColour = document.querySelector('#ChinoColour'); //zoekt in de HTML voor een id om object informatie in te stoppen
        ChinoColour.textContent += ChinoB.colour //vult de HTML met object informatie
        let ChinoPrice = document.querySelector('#ChinoPrice') //zoekt in de HTML voor een id om object informatie in te stoppen
        ChinoPrice.textContent += "€" + ChinoB.price //vult de HTML met object informatie
        document.getElementById('ChinoImg').src = ChinoB.imageUrl;  //Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let slimChinoA = 1;
        let slimChinoB = ralphlauren[slimChinoA];
        console.log(slimChinoB);
        let slimChinoTitle = document.querySelector('#slimChinoTitle');
        slimChinoTitle.textContent += slimChinoB.title;
        let slimChinoSizes = document.querySelector('#slimChinoSizes');
        slimChinoSizes.textContent += slimChinoB.sizes[0] + " " + slimChinoB.sizes[1] + " " + slimChinoB.sizes[2];
        let slimChinoColour = document.querySelector('#slimChinoColour');
        slimChinoColour.textContent += slimChinoB.colour
        let slimChinoPrice = document.querySelector('#slimChinoPrice')
        slimChinoPrice.textContent += "€" + slimChinoB.price
        document.getElementById('slimChinoImg').src = slimChinoB.imageUrl;

        let korteChinoA = 2;
        let korteChinoB = ralphlauren[korteChinoA];
        console.log(korteChinoB)
        let korteChinoTitle = document.querySelector('#korteChinoTitle');
        korteChinoTitle.textContent += korteChinoB.title;
        let korteChinoSizes = document.querySelector('#korteChinoSizes');
        korteChinoSizes.textContent += korteChinoB.sizes[0] + " " + korteChinoB.sizes[1] + " " + korteChinoB.sizes[2];
        let korteChinoColour = document.querySelector('#korteChinoColour');
        korteChinoColour.textContent += korteChinoB.colour
        let korteChinoPrice = document.querySelector('#korteChinoPrice')
        korteChinoPrice.textContent += "€" + korteChinoB.price
        document.getElementById('korteChinoImg').src = korteChinoB.imageUrl;



    })