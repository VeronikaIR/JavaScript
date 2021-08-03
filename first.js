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