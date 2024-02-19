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

let day = 1;

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

// console.log(letterGrade);


/*------------------------------------String Methods---------------------------------------*/

// string methods = allow you to manipulate and work with text (strings)

let userName = "FaciHmi ramadha";
let phoneNumber = "0895-6200-44877";
let char = userName.charAt(1); // menemukan character bedasarkan index
let index = userName.indexOf("c"); // menemukan index bedasarkan character
let lastIndex = userName.lastIndexOf("i"); // menumukan index akhir berdasarkan character
let LenghtIndex = userName.length; // mengukur total index di sebuah string
let trim = userName.trim(); // menghapus spasi di depan maupun dibelakang di sebuah string
let upper = userName.toUpperCase() // mengubah huruf string menjadi besar semua
let lower = userName.toLowerCase() // mengubah huruf string menjadi kecil semua 
let repeet = userName.repeat(3); // melakukan pengulangan pada string
let chaBegin = userName.startsWith(" "); // melakukan pengecekan terhadap character diawal string
let endsCha = userName.endsWith(" "); // melakukan pengecekan terhadap character diakhir string
let includeCha = userName.includes("@"); // melakukan pengecekan tehadap character didalam string
let valueStr = phoneNumber.padStart(20, '0'); // melakukan penambahan character diawal string sesuai dengan value
let valueEnd = phoneNumber.padEnd(20, '0') // melakukan penambahan character diakhir string sesuai dengan value
phoneNumber = phoneNumber.replaceAll('-', ".") // melakukan perubahan pada character didalam string


// if(includeCha){
//     console.log("your username can't begin with ' '")
// }else{
//     console.log(userName)
// }
