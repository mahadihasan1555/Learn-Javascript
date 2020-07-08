// For Loops

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// };

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// };

// for (let i = 0; i <= 10; i++) {
//     console.log("For Loop Number: ${i}");
// }

//while loops

// let i = 0;
// while(i < 10){
//     console.log("while loop Number: ${i}");
//     i++;
// }

const todos = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true
    
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    
    },
    {
        id: 3,
        text: "Dentist appt.",
        isCompleted: false
    
    }
];

// for ( let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

for (let todo of todos){
    console.log(todo.text);
}