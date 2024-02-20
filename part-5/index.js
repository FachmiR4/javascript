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