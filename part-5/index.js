// variable scope = where a variable is recognized 
//                  and accessible  (local & global).

let x = 6; // variable global yang dapat diakses dimana saja
function2()

function function1(){
    let x = 3; //variable local yang dapat diakses tempat tertentu
    console.log(x);
}

function function2(){
    let x = 4; //variable local yang dapat diakses tempat tertentu
    console.log(x);
}

/*-----------------------------------Array------------------------------------------*/
// array = a variable like structure that can hold more than 1 more

let fruits = ["apple", "orange", "banana","cerry"];

fruits.push("coconat"); //untuk menambahkan data baru ke array
fruits.pop(); // untuk menghapus data trakhir disebuah array
fruits.unshift("manggo") //untuk menambahkan data baru diindex pertama ke sebuah array
fruits.shift(); // menghapus data pertama disebuah array

let numOfFruits = fruits.length;
let index = fruits.indexOf("");

// sort() digunakan untuk mengurutkan alfabet dari a-z
// reverse() digunakan untuk kebalikanya

fruits.sort().reverse(); 

for(let fruit of fruits){
    console.log(fruit);
}
