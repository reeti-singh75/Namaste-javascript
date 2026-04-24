// function x(){
//     var i=1;
//     setTimeout(() => {

//         console.log(i);

//     }, 3000);
//     console.log("Namste Javascript");

// }
// x();












// function x() {
//     for (var i = 1; i <= 5; i++) {

//         setTimeout(function()  {

//             console.log(i);

//         }, i * 1000);
//     }

//     console.log("Namsate Javascript");

// }
// x();
//6
//6 all 6  come 











//fix one way 
// function x() {
// for (let i = 1; i <= 5; i++) {
// setTimeout(function () {
// console.log(i);
// }, i * 1000);
// }
// console.log("Namaste JavaScript");
// }
// x();





//second way 






function x() {

    for (var i = 1; i <= 5; i++) {
        function close(x) {

            setTimeout(function () {

                console.log(x);

            }, x * 1000);
        }

        close(i);

    }
    console.log("Namsate Javascript");
}
x();