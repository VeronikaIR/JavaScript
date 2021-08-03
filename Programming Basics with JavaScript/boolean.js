
function movie(budjetImput, statImput, clothesPriceImput){

    let decor = budjetImput*10/100;
    let allPriceOfClothes;

    if(statImput > 150){
        allPriceOfClothes = (statImput * clothesPriceImput) - ((statImput * clothesPriceImput)*10/100);
    }
    else{ 
        allPriceOfClothes = statImput * clothesPriceImput; }

    if((decor + allPriceOfClothes) > budjetImput){
        console.log("Not enough money!");
        console.log((decor + allPriceOfClothes)-budjetImput);
    }
    else {
        console.log("Action!");
        console.log(budjetImput - (decor+allPriceOfClothes));
    }
}

movie(20000, 120, 55.5);

function worldRecord(recordImput, distanceImput, timeSecImput){

    let time = distanceImput * timeSecImput;
    let extraTime = distanceImput / 15;
    let hisTime = (extraTime * 12.5) + time;

    if(recordImput < hisTime ){
        console.log("No, he failed!");
        console.log(hisTime - recordImput);
    }
    else{
        console.log("Yes, he succeeded!");
        console.log(hisTime);
    }

}
worldRecord(10464, 1500, 20);

function adventure(budjetImput, sesaonImput){

    if(budjetImput <= 100){
        console.log("Somewhere in Bulgaria.");
        
        if(sesaonImput == "summer"){
            let finalPrice = budjetImput*30/100;

            console.log("Camp -", finalPrice);
        }
        else {
            let finalPrice = budjetImput*70/100;

            console.log("Hotel -", finalPrice);
        }
    }

    else if(budjetImput > 100 && budjetImput <= 1000){
        console.log("Somewhere in Balkans.")

        if(sesaonImput == "summer"){
            let finalPrice = budjetImput*40/100;

            console.log("Camp -", finalPrice);
        }
        else {
            let finalPrice = budjetImput*80/100;

            console.log("Hotel -", finalPrice);
        }
        
    }
}
adventure(50, "summer");
adventure(678.53, "winter");