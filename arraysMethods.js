//High Order Array Methods

//forEach, map, filter

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

//forEach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

//map

// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);