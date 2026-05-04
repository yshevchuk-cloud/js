// Task 1.

// Task 2.


// Task 3.


// Task 4.

// Task 5.


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
let button1 = document.querySelector('.b-10');
let output1 = document.querySelector('.out-10');
button1.onclick = function t10() {   
    let val = input1.value;
    output1.innerHTML = val;

  }

// Task 11.

function t11() {
    
}


document.querySelector('.b-11').onclick = t11;

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

function t14() {

}


document.querySelector('.b-14').onclick = t14;

// Task 15.

function t15() {

}

document.querySelector('.b-15').onclick = t15;

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