// if else statement

// const x = 10;

// if (x == 10){
//     console.log("x is true");
// }

// const x = "10";

// if (x == 10){
//     console.log("x is true");
// }

// const x = 10;

// if (x === 10){
//     console.log("x is true");
// }

// const x = '10';

// if (x === 10){         // always === is good practice.
//     console.log("x is true");
// }else{
//     console.log("x is not true")
// }

// const x = '10';

// if (x === 10){
//     console.log("x is true");
// }else if( x < 9) {
//     console.log("it is also true");
// }else{
//     console.log("x is 10");
// };

// const x = 6;
// const y = 11;

// if ( x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }else{
//     console.log("x is smaller than 5")
// }


// ternary operator

const x = 9;

const color = x > 10 ? "red" : "blue";
console.log(color);

switch(color){
    case "red":
        console.log("color is red");
        break;
        case "blue":
            console.log("color is blue");
            break;
            default:
                console.log("color is not red or blue");
                break;
}