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
        isCompleted: true
    
    }
];
console.log(todos);
console.log(todos[1].text);

//JSON (JavaScript Object Notation) is a lightweight data-interchange format
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
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);