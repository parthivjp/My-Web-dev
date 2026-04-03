function hello(){
    console.log("by calling Demo inside the hello ");
    console.log("hello");
}
function demo(){
    console.log("inside the demo calling hello");
    hello();
}
console.log("before the demo call");
demo();
console.log("After the demo call");