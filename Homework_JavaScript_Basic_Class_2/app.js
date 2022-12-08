//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

// first solution

document.querySelector("#btn-sign").addEventListener('click', getZodiac);

function getZodiac() {
    let birthYear = document.getElementById("year").value;

    if (isNaN(birthYear) || birthYear < 0) {
        alert("Invalid birth year!")
        return;
    }

    let result = calculateChineseZodiac(birthYear);
    
    let zodiacSign = "unknown";

    if (result === 0){
        zodiacSign = ("Rat");
    } else if (result === 1){
        zodiacSign = ("Ox");
    } else if (result === 2){
        zodiacSign = ("Tiger");
    } else if (result === 3){
        zodiacSign = ("Rabbit");
    } else if (result === 4){
        zodiacSign = ("Dragon");
    } else if (result === 5){
        zodiacSign = ("Snake");
    } else if (result === 6){
        zodiacSign = ("Horse");
    } else if (result === 7){
        zodiacSign = ("Goat");
    } else if (result === 8){
        zodiacSign = ("Monkey");
    } else if ( result === 9){
        zodiacSign = ("Rooster");
    } else if (result === 10){
        zodiacSign = ("Dog");
    } else if (result === 11){
        zodiacSign = ("Pig");
    }
    
    document.getElementById("output").textContent = zodiacSign;
}


function calculateChineseZodiac(birthYear) {
    return (birthYear - 4) % 12;
}
//second solution

// let userYear = Number(prompt('Enter your birth year'));
// let calculateFormula = (userYear - 4) % 12;
// console.log(calculateFormula)
// if (calculateFormula === 0){
//     console.log('Rat');
// } else if (calculateFormula === 1){
//     console.log('Ox');
// } else if (calculateFormula === 2){
//     console.log('Tiger')
// } else if (calculateFormula === 3){
//     console.log('Rabbit');
// } else if (calculateFormula === 4){
//     console.log('Dragon');
// } else if (calculateFormula === 5){
//     console.log('Snake')
// } else if (calculateFormula === 6){
//     console.log('Horse');
// } else if (calculateFormula === 7){
//     console.log('Goat');
// } else if (calculateFormula === 8){
//     console.log('Monkey')
// } else if (calculateFormula === 9){
//     console.log('Rooster');
// } else if (calculateFormula === 10){
//     console.log('Dog');
// } else if (calculateFormula === 11){
//     console.log('Pig');
// } else{
//     console.log('Unknown value');
// }
