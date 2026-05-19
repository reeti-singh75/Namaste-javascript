


// function a(){
//     console.log("a"); 
// }

// a();
// console.log("End");



// ==========================================


// console.log("Start");

// setTimeout(function cd(){

//     console.log("Callback");
    
// },5000);
// console.log("End");




// =============================================




// console.log("Start");

// document.getElementById("btn")
// .addEventListener("click", function cb(){
//  console.log("callback");
 
// })

// console.log("End");


//=====================================================



console.log("Start");

// fetch() makes a network request
// The callback function (the .then block) goes into the MicroTask Queue
fetch("https://api.example.com/data")
.then(function cb() {
console.log("Callback from fetch");
});

console.log("End");



  
