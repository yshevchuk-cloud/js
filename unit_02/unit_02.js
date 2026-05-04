// Task 1.
let a=7;
let b=9;
console.log(a+b);
// Task 2.
let c=7;
let d=9;
document.querySelector('.out-2').textContent = c/d;

// Task 3.
let e=3;
let f=5;
document.querySelector('.out-3').textContent = e*f;

// Task 4.
let e1='3';
let f1=5;
document.querySelector('.out-4').textContent = e+f;
// Task 5.
let e2=3;
let f2=0;
document.querySelector('.out-5').textContent = e/f;

// Task 6.
let e3 = 3;
let f3 = 'Hello';
document.querySelector(' .out-6'). textContent = e3+f3;


// Task 7.
let e4 = 3;
let f4 = 'Hello';
document.querySelector(' .out-7'). textContent = e3*f3;

// Task 8.
let inputIn = document.querySelector('.i-8');
let button = document.querySelector('.b-8');
let output = document.querySelector('.out-8');
button.onclick = function t8() {   
    let val = inputIn.value;
    output.innerHTML = val;    
}


// Task 9.

let input = document.querySelector('.i-9');
let button1 = document.querySelector('.b-9');
let outputIn = document.querySelector('.out-9');
function t9() {   
    let val = input.value;
    outputIn.innerHTML = val;   
    input.value = null; 
}

button1.onclick = t9;

// Task 10.
let input1 = document.querySelector('.i-10');
let butto1 = document.querySelector('.b-10');
let output1 = document.querySelector('.out-10');
butto1.onclick = function t10() {   
    let val = input1.value;
    output1.innerHTML = val;

  }

// Task 11.

let input3 = document.querySelector('.i-11');
let butto3 = document.querySelector('.b-11');
let output3 = document.querySelector('.out-11');
butto3.onclick = function t11() {   
    let val = input3.value;
    output3.innerHTML = val + 55;
     

  }

// Task 12.
 let lastName = document.querySelector('.i-12-1').value;
 let firstName = document.querySelector('.i-12-2').value;
function t12() {
    document.querySelector('.out-12').textContent = `Hello ${lastName} ${firstName} `;
}


document.querySelector('.b-12').onclick = t12;

// Task 13.

function t13() {
    let number1 = +document.querySelector('.i-13-1').value;
    let number2 = +document.querySelector('.i-13-2').value;
    document.querySelector('.out-13').textContent = number1 + number2;

}

document.querySelector('.b-13').onclick = t13;

// Task 14.

let input2 = document.querySelector('.i-14');
let butto2 = document.querySelector('.b-14');
let output2 = document.querySelector('.out-14');
butto2.onclick = function t14() {   
    let val = input1.value;
    output2.innerHTML = val;
    input2.value = 'Go';
  }

// Task 15.

let input5 = document.querySelector('.i-15');
let butto5 = document.querySelector('.b-15');
let output5 = document.querySelector('.out-15');
butto5.onclick = function t15() {   
    let val = input5.value;
    output5.innerHTML = val;
    input5.value = style.border = "4px solid red";
  }

// Task 16.

function t16() {
    
}
document.querySelector('.b-16').onclick = t16;

// Task 17.


function t17() {
    
}

document.querySelector('.b-17').onclick = t17;

// Task 18.


function t18() {
    
}

document.querySelector('.b-18').onclick = t18;

// Task 19.

function t19() {
    let number1 = +document.querySelector('.i-19-1').value;
    let number2 = +document.querySelector('.i-19-2').value;
    let output = document.querySelector('.out-19');
    if( number1 < 0 && number2 < 0){
        output.textContent = number1 + number2
    }
    else{
         output.textContent = 'Ваші числа не від ємні'
    }
    document.querySelector('.out-19').textContent = number1+number2;
    
}

document.querySelector('.b-19').onclick = t19;

// Task 20
 let count = 0;

function t20() {
    count++;
    let out = document.querySelector('.out-20');
    out.textContent = count.toString();
}

document.querySelector('.b-20').onclick = t20;