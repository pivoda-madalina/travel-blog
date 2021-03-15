// alert('Hello World!');
console.log('Hello world!');

var myName = "Madalina";
console.log("Hello, " + myName);

// var i;
// for (i = 0; i <= 10; i++){
//     console.log(i);
// }

// i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// if (i < 10) {
//     console.log(i + " este mai mic decat 10:");
// }else{
//     console.log(i + " nu este mai mic decat 10");
// }


// var n;
// for (n = 0; n <= 100; n++){
//     if (n % 7 == 0){
//         console.log(n);
//     }
// }

// n = 0;
// while (n <= 100) {
//     if (n % 7 == 0){
//         console.log(n);
//     }
//     n++;
// }

// var x = [0, 1, 2, 8, "abc"];
// console.log(x.length);
// x.pop();
// console.log(x);
// var ultimul_element = x[x.length - 1];
// console.log(x.pop(ultimul_element));
// console.log(x);
// x.push('def');
// console.log(x);



// var fib = [0, 1];

// for (i=2; i < 10; i++){
//     fib.push(fib[i-1] + fib[i-2]);
// }
// console.log(fib[9]);

// function fibonacci(n) {
//     if(n == 0){
//         return 0;
//     }
//     if((n == 1) || (n == 2)){
//         return 1;
//     }else{
//         return fibonacci9(n-1) + fibonacci(n-2)
//     }
// }
// console.log("fibonacci de (10)= " + fibonacci(9))

function schimba_subtitlul() {
    var element = document.getElementById('subtitlu');
    element.innerHTML = 'How to Get to the Great Barrier Reef?'
    element.style = 'background-color: blue;'
}

function reschimba_subtitlul() {
    var element = document.getElementById('subtitlu');
    element.innerHTML = 'How to Get to the Great Barrier Reef?';
    element.style = 'background-color: rgb(202, 188, 188);';
}


function suma(x1, x2){
    var s = x1 + x2;
    return s;
} 

function calculeaza_suma(){
    var nr1 = parseInt(document.getElementById("numar1").value);
    var nr2 = parseInt(document.getElementById("numar2").value);

    var total = suma(nr1, nr2);

    var element_rezultat = document.getElementById("rezultat_suma");
    element_rezultat.innerHTML = total;
}



function compara(a, b){
    if (a > b){
        return a;
    }
    if (b > a){
        return b;
    }
    if (a == b){
        return "Numerele sunt egale.";
    }
}

function compara_numerele(){
    var nr_1 = parseInt(document.getElementById("numar1").value);
    var nr_2 = parseInt(document.getElementById("numar2").value);

    var rezultat = compara(nr_1, nr_2);
  
    var elem_rezultat = document.getElementById("rezultat_comparatie");
    elem_rezultat.innerHTML = rezultat;
}
