//ödev "Burçlar"

//let month = 3; // mart ayi
//let day = 12; //ayin 12. günp
//let horoscope = null;

function printHoroscope(horoscope) {
    alert("Burcunuz: " + horoscope);
}

let month = Number(prompt("Enter your month:"));
let day = Number(prompt("Enter your birthday:"));

if (month === 3 && day >= 21 || month === 4 && day <= 20) {
    printHoroscope("Oglak");
}
if (month === 4 && day >= 21 || month === 5 && day <= 21) {
    printHoroscope("Boga");
}
if (month === 5 && day >= 22 || month === 6 && day <= 21) {
    printHoroscope("Ikizeler");
}
if (month === 6 && day >= 22 || month === 7 && day <= 22) {
    printHoroscope("Yengeç");
}
if (month === 7 && day >= 23 || month === 8 && day <= 22) {
    printHoroscope("Aslan");
}
if (month === 8 && day >= 23 || month === 9 && day <= 22) {
    printHoroscope("Basak");
}
if (month === 9 && day >= 23 || month === 10 && day <= 22) {
    printHoroscope("Terazi");
}
if (month === 10 && day >= 23 || month === 11 && day <= 22) {
    printHoroscope("Akrep");
}
if (month === 11 && day >= 22 || month === 12 && day <= 21) {
    if((month === 11 && day >=29) ||(month === 12 && day <= 17)){
        printHoroscope("Yay ve Yilan");
    }else{
        printHoroscope("Yay");
    }
}
if (month === 12 && day >= 22 || month === 1 && day <= 20) {
    printHoroscope("Oglak");
}
if (month === 1 && day >= 21 || month === 2 && day <= 18) {
    printHoroscope("Kova");
}
if (month === 2 && day >= 19 || month === 3 && day <= 20) {
    printHoroscope("Balik");
}

/**
 •    Bélier : 21 mars - 20 avril.
 •    Taureau : 21 avril - 21 mai. ...
 •    Gémeaux : 22 mai - 21 juin. ...
 •    Cancer : 22 juin - 22 juillet. ...
 •    Lion : 23 juillet - 22 août. ...
 •    Vierge : 23 août - 22 septembre. ...
 •    Balance : 23 septembre - 22 octobre. ...
 •    Scorpion : 23 octobre - 22 novembre.
 •    Sagittaire 22 novembre au  21 décembre.
 •    Capricorne 22 décembre au 20 janvier.
 •    Verseau 21 janvier au 18 février.
 •    Poisson 19 février au 20 mars.
 •    Serpentaire 29 novembre au 17 décembre.
 •
 */


/**ödev:

 let a = Number (prompt ("Enter your first number:"));
 let b = Number (prompt ("Enter your second number:"));

 alert ("Resultat:" + " " + (a+b))

 let c = Number (prompt ("Enter your first number:"));
 let d = Number (prompt ("Enter your second number:"));

 alert ("Resultat:" + " " + (c-d))

 let e = Number (prompt ("Enter your first number:"));
 let f = Number (prompt ("Enter your second number:"));

 alert ("Resultat:" + " " + (e/f))

 let g = Number (prompt ("Enter your first number:"));
 let h = Number (prompt ("Enter your second number:"));

 alert ("Resultat:" + " " + (g*h))

 let num = Number (prompt ("Enter your first number:"));
 let pt = Number (prompt ("Enter your first number:"));
 alert ("Resultat:" + " " + (num**pt))

 */

/**Function !!?? beceremedim*/

//let firstnumber = Number (prompt ("Enter your first number:"));
//let secondnumber = Number (prompt ("Enter your second number:"));

//function number ( first){}
//alert (first + second);

//alert ((first + second) + (first - second) + (first / second) + (first * second) + (first ** second));
//console.log ((first + second) + (first - second) + (first / second) + (first * second) + (first ** second));


/**let age = Number (prompt ("Enter your age:"));
 let greeting = "";
 if (age >0 && age <=8)
 alert ("çocuk");


 else if (age >= 9 && age <=16)
 alert ("Genç");


 else if (age >=17 && age <=22)
 alert ("Genç yetiskin");


 else if (age >=23 && age <=50)
 alert ("Yetiskin");



 else if (age >=51 && age <=120)
 alert ("Yasli");



 else (age <0 && age >120)
 alert ("UNKNOWN");

 console.log (typeof age);
 */

/**
 Su verileri bas olarak kullanin:
 - Çocuk: 0 - 8
 - Genç: 8 - 16
 - Genç yetişkin: 16 - 22
 - Yetişkin: 22 - 50
 - Yasli: 50 - 120
 Programı, 0'ın altında veya 120'nin
 üzerinde olan sayıların karşılık gelen "UNKNOWN"
 çıkışını döndürecek şekilde yazınız.
 */


//var a = Number(prompt("Enter first number"));
//var b = Number(prompt("Enter second number"));
//alert(a + b);


/**const firstname = prompt ("Enter your firstname:");
 const lastname = prompt ("Enter your Lastname:");
 const age = prompt ("Enter your Age:");
 const nationality = prompt ("Enter your Nationality:");

 alert (firstname + " " + lastname + " " + age + " " + nationality);

 console.log  (firstname + " " + lastname + " " + age + " " + nationality);

 const PREFIX = "ITCLUB";
 alert(PREFIX + " " + firstname + " " +
 PREFIX + " " + lastname + " " +
 PREFIX + " " + age + " " +
 PREFIX + " "+ nationality) ;*/

/**const PREFIX = "ITCLUBBBB";

 function populateWithPrefix(input) {
	return PREFIX + input + " ";
}
 let firstname = prompt ("Enter your firstname:");
 let lastname = prompt ("Enter your Lastname:");
 let age = prompt ("Enter your Age:");
 let nationality = prompt ("Enter your Nationality:");

 alert (PREFIX + firstname + PREFIX + lastname + PREFIX + age + PREFIX + nationality);*/


/*function reverse(input){
	let reversed = "";
	for(let index = input.length - 1; index >= 0; index--){
		reversed = reversed + input[index];
	}
    return reversed;
    
}

function spaceWith(input, delimiter){
	let spaced = "";
	for(let index = 0; index < input.length; index++){
		spaced = spaced + (input[index] + delimiter);
	}
    return spaced;
   
}

let firstname = prompt("Enter your first name");
let lastname = prompt("Enter your last name");

//alert("firstname: " + firstname);
//alert("lastname: " + lastname);

firstname = reverse(firstname);
lastname = reverse(lastname);

//alert("firstname: " + firstname);
//alert("lastname: " + lastname);

firstname = spaceWith(firstname, " ");
lastname = spaceWith(lastname, "@");

//alert("firstname: " + firstname);
//alert("lastname: " + lastname);
function firstname(){
    alert ("firstname");
}

function laststname(){
    alert ("lastname");
}

alertfirstname();
alertlastname();
*/