let students = [
    { name: "Alice", marks: 90 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 93 }
];  
// students.forEach(function(student) {
//     console.log(student.name + " is " + student.age + " years old.");
// }   );      
// Output:
// Alice is 20 years old.
// Bob is 22 years old.
// Charlie is 23 years old.

let ne = students.map((el) => {
    return el.marks / 10; 
});