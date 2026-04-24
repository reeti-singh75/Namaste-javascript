



// function counter(){
//     var count =0;
//     return function increamentCounter(){
//         count++;
//         console.log(count);


//     }}

//     var counter1 =counter();
//     counter1();
//     counter1();


//     var counter2=counter();
//     counter2();
//     counter2();
//     counter2();
//     counter2();
//     counter2();







//Good and scalable way


// function Counter() {
//     var count = 0;
//     this.increamentCounter = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count);

//     }
// }

// var counter1 = new Counter();


// counter1.increamentCounter();
// counter1.increamentCounter();
// counter1.decrementCounter();













function a(){
    var x=0,z=10;
    return function b(){
        console.log(x);
        
    }
}

var y=a();
y();