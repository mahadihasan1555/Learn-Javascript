// Functions

// function addsNums(num1, num2){
//     console.log(num1 + num2);
// }
// addsNums(4, 3);

// NaN

function addsNums(num1, num2){
    console.log(num1 + num2);
}
addsNums();

// default values

function addsNums(num1 = 2, num2 = 3){
    console.log(num1 + num2);
}
addsNums(5, 5);

// return value

function addNums ( num1 = 1, num2= 1){
    return num1 + num2;

}
console.log(addsNums(5,5));