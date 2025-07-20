
// hello(move);


// function hello(callback){
//     console.log(`Hello!`)
//     callback();
// }
// function wait(){
//     console.log(`Wait!`)
// }
// function leave(){
//     console.log(`Leave!`)
// }
// function stay(){
//     console.log(`Stay!`)
// }
// function move(){
//     console.log(`Move!`)
// }    


let numbers = [1,3,5,7,11];

// numbers.forEach(function(element){
//     console.log(element);
// })

numbers.forEach(function double(element){
    console.log (element*2);
})

numbers.forEach(function triple(element){
    console.log(element*3)
})

numbers.forEach(function square(element){
    console.log(Math.pow(element,2))
})