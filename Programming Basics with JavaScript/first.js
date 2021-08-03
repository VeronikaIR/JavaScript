<<<<<<< HEAD:first.js
function usdToBgnConverter(usd){

    let usdAmount = Number(usd);

    console.log(typeof usdAmount);
}
usdToBgnConverter("22");

function fromRadiansToDegrees(rad){

    let radians = Number(rad);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));

}

fromRadiansToDegrees("3.1416");

function depositCalculator(depositCur, termCur, percentCur){

    let deposit = + depositCur;
    let term = + termCur;
    let percent = + percentCur;

    let sum = deposit + term *((deposit*percentCur/100)/12);

    console.log(sum);
}
depositCalculator("200", "3", "5.7");

function requiredLiterature(pagesInBookImput, pagesForHourImput, daysImput){

    let pagesInBook = + pagesInBookImput;
    let pagesForHour = + pagesForHourImput;
    let days = + daysImput;

    let result = (pagesInBook/pagesForHour)/days;

    console.log(result);
}
requiredLiterature("212", "20", "2");

function birthday(rentImput){

    let rent = + rentImput;
    let cakePrice = rent*(20/100);
    let drinksPrice = cakePrice - (cakePrice*45/100);
    let animatorPrice = rent/3;

    let allPrice = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(allPrice);
}
birthday("2250");

function charityCampaign(daysImput, chefsImput, cakesImput, 
    wafflesImput, puncakesImput ){

        let moneyFromCakes = (+cakesImput)*45;
        let moneyFromWaffles = (+wafflesImput)*5.80;
        let moneyFromPuncakes = (+puncakesImput)*3.20;

        let result = ((moneyFromCakes + moneyFromWaffles + moneyFromPuncakes)*(+chefsImput)*(+daysImput)) - ((moneyFromCakes + moneyFromWaffles + moneyFromPuncakes)*(+chefsImput)*(+daysImput))/8;

        console.log(result);
}
charityCampaign("23", "8", "14", "30", "16");

function diet(berriesPriceImput, bananasImput, orangesImput, 
    raspberriesImput, berriesImput ){

        let raspberriesPrice = (+berriesPriceImput) / 2;
        let orangePrice = raspberriesPrice - (raspberriesPrice*40/100);
        let bananaPrice = raspberriesPrice - (raspberriesPrice*80/100);

        let result = (raspberriesPrice * (+raspberriesImput)) + (orangePrice*(+orangesImput)) + (bananaPrice *(+bananasImput)) + (+berriesImput *(+berriesPriceImput));

        console.log(result);
}
diet("48", "10", "3.3", "6.5", "1.7");

function aquarium(lengthImput, widthImput, heightImput, precImput){

    let volume = (+lengthImput) * (+widthImput) * (+heightImput);
    let liters = volume * 0.001;
    let percent = (+precImput)*0.01;
    let result = liters*(1-percent);

    console.log(result);
}
aquarium("85", "75", "47", "17");
=======
function usdToBgnConverter(usd){

    let usdAmount = Number(usd);

    console.log(typeof usdAmount);
}
usdToBgnConverter("22");

function fromRadiansToDegrees(rad){

    let radians = Number(rad);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));

}

fromRadiansToDegrees("3.1416");

function depositCalculator(depositCur, termCur, percentCur){

    let deposit = + depositCur;
    let term = + termCur;
    let percent = + percentCur;

    let sum = deposit + term *((deposit*percentCur/100)/12);

    console.log(sum);
}
depositCalculator("200", "3", "5.7");
>>>>>>> b245a1ac8cbf54ebecdb595ed6e6ee86472bd826:Programming Basics with JavaScript/first.js
