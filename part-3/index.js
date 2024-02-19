// ternary operator = a shortcut to if{} and else{} statement
//                    help to assign a variable based on a coditional
//                    conditional ? codeIfTrue : codeIfElse

let age = 23; 
let massage = age >= 20 ? "you are an dult" : "you are a minor";

let time = 16;
let greeting = time < 12 ? "Good Morning!" : "Good afternoon";

let isStudent = true;
let pesan = isStudent ? "you are a student" : "you are not student";

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`your total id ${purchaseAmount - purchaseAmount * (discount/100)}`)

/*------------------------------------Switch---------------------------------------*/
// switch = can be an affecient replacement to many else if statements

// let day = 1;

switch(day){
    case 1:
        console.log("ini hari senin");
        break;
    case 2:
        console.log("ini hari selasa");
        break;
    case 3:
        console.log("ini hari rabu");
        break;
    case 4:
        console.log("ini hari kamis");
        break;
    case 5:
        console.log("ini hari jum'at");
        break;
    case 6:
        console.log("ini hari sabtu");
        break;
    case 7:
        console.log("ini hari minggu");
        break;
    default:
        console.log(`${day} ini bukan hari`);
}

let testScore = 5;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 70:
        letterGrade = "B";
        break;
    case testScore >= 60:
        letterGrade = "C";
        break;
    case testScore >= 50:
        letterGrade = "D";
        break;
    default:
        letterGrade = "E";
}

console.log(letterGrade);
