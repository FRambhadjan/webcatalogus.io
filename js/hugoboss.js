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

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-hugo-boss') //Hier wordt de link gefetched
    .then(response => response.json()) //dit vraagt om een reactie
    .then(hugoboss => { //hier wordt er gevraagd naar HugoBoss of een dichtbezijnde woord
        console.log(hugoboss); //console.log om te check of het werkt
        let PantalonA = 0; //index 0 van de 3 schoenen die er zijn
        let PantalonB = hugoboss[PantalonA]; //Deze variabele is 1 object van de 3
        console.log(PantalonB); //console.log om te kijken of het werkt
        let PantalonTitle = document.querySelector('#PantalonTitle'); //zoekt in de HTML voor een id om object informatie in te stoppen
        PantalonTitle.textContent += PantalonB.title; //vult de HTML met object informatie
        let PantalonSizes = document.querySelector('#PantalonSizes'); //zoekt in de HTML voor een id om object informatie in te stoppen
        PantalonSizes.textContent += PantalonB.sizes[0] + " " + PantalonB.sizes[1] + " " + PantalonB.sizes[2]; //vult de HTML met object informatie
        let PantalonColour = document.querySelector('#PantalonColour');//zoekt in de HTML voor een id om object informatie in te stoppen
        PantalonColour.textContent += PantalonB.colour //vult de HTML met object informatie
        let PantalonPrice = document.querySelector('#PantalonPrice')//zoekt in de HTML voor een id om object informatie in te stoppen
        PantalonPrice.textContent += "€" + PantalonB.price //vult de HTML met object informatie
        document.getElementById('PantalonImg').src = PantalonB.imageUrl;//Hier wordt de img van fetch gebruikt in de HTML

        //Hier onder wordt er gerepeat wat er boven is uitgelegd

        let ChinoA = 1;
        let ChinoB = hugoboss[ChinoA];
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

        let Pantalon2A = 2;
        let Pantalon2B = hugoboss[Pantalon2A];
        console.log(Pantalon2B)
        let Pantalon2Title = document.querySelector('#Pantalon2Title');
        Pantalon2Title.textContent += Pantalon2B.title;
        let Pantalon2Sizes = document.querySelector('#Pantalon2Sizes');
        Pantalon2Sizes.textContent += Pantalon2B.sizes[0] + " " + Pantalon2B.sizes[1] + " " + Pantalon2B.sizes[2];
        let Pantalon2Colour = document.querySelector('#Pantalon2Colour');
        Pantalon2Colour.textContent += Pantalon2B.colour
        let Pantalon2Price = document.querySelector('#Pantalon2Price')
        Pantalon2Price.textContent += "€" + Pantalon2B.price
        document.getElementById('Pantalon2Img').src = Pantalon2B.imageUrl;
    })