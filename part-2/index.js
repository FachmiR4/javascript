// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("how old are you");
// age = Number(age);
// age+=1;

let x = "0";
let y = "saya";
let z = "saya";

x = Number(x);
y = String(y);
z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*------------------------constant------------------------------*/

// const = a variable that can't be changed

const PI = 3.14159; // variable constant harus mengunakan huruf besar
let radius;
let circumference;


// radius = window.prompt("enter the radius of circle");



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";

}


/*-------------------------------------------------math------------------------------------*/

// math = built-in object that provide a collection of properties and methods
            // collection of properties and methods


// console.log(Math.PI);
// console.log(Math.E)

let a = 45;
let d = 10;
let e = 1;

z = Math.round(a); // mengubah menjadi bilangan bulat
z = Math.floor(a); // mengubah bialng bulat kebawah 3.99 = 3
z = Math.ceil(a); // mengubah bilang bulat ke atas 3.25 = 4
z = Math.trunc(a); // mengubah bilang bulat bedasarkan dari angka depan 3.111 = 3 & 3.999 = 3
z = Math.pow(d, a); // mempangkatkan sebuah nilai 2**3 = 8
z = Math.sqrt(a); //mencari akar kuadrat dari sebuah nilai 81 = 9
z = Math.log(a); // mencari logaritma natural dari sebuah nilai 10 = 2.302
z = Math.sin(a); // mendapatkan sebuah nilai radian dri sebuah nilai 45 = 0.85
z = Math.cos(a); // mendapatkan nilai costanta bedasarkan nilai 45 = 0.52
z = Math.tan(a); // mendapatkan sebuah nilai tan bedasarkan nilai 45 = 1.61
z = Math.abs(a); // mendapaikan nilai absolute bedasarkan nilai 45 = 45
z = Math.sign(a) // mendapatkan niali awal dari sebuah nilai 45 = 1, 0 = 0, -45 = -1;
let max = Math.max(a,d,e); // mendapatkan nilai max pada suatu nilai 45, 10, 1 = 45
let min = Math.min(a,d,e); // mendapatkan sebuah nilai min berdasarkan nilai 45,10,1 =1



/*------------------------------------Random Number Generation-------------------------------*/
// bilangan bulat yang diacak mencapai 0-5  (Math.random() * 6)
// tapi jika ingin mencapai 0-6 maka tambahkan + 1 (Math.random() * 6 + 1) 
// const minimum = 50;
// const maximum = 100;

// let rendomNum = Math.round(Math.random() * (maximum - minimum)) + minimum; 



