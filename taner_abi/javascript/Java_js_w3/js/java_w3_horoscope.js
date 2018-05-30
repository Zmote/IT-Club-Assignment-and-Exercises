


// Returns sum of 2 numbers
function Calculation() {
    let day = +prompt("Enter day");
    let month = +prompt("Enter month");
    let horoscope = null;
   /* if (month == 1) && (day >= 20) || (month == 2) && (day <= 18) {
        horoscope = "Aquarius";
        console.log("Your horoscope is:",  horoscope);
    }*/
    if ((month===1 && day>=20) || (month===2 && day<=18)){
            horoscope = "Aquarius";
        }

    else if (((month==2) && (day>=19)) || ((month==3) && (day<=20))) {
        horoscope = "Pisces";
    }

    consoleLog(horoscope);
}


// console log
function consoleLog(horoscope) {
    if(horoscope != null){
        console.log("Your horoscope is", horoscope);
    }else{

    }
}
