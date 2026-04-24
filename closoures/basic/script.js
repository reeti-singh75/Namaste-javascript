// function x(){
//     var a=10;
//     function y(){
//         console.log(a);

//     }

//     y();
// }

// x();








// function x(){
//     var a=10;
//     function y(){
//         console.log(a);

//     }
//      a=100;
//     return y;
// }

// var z=x();

// console.log(z);

// z();
// log 100 because  a targeting referance not value 






//same

// function x(){
//     var a=10;
//    return function y(){
//         console.log(a);

//     }


// }

// var z=x();

// console.log(z);

// z();























function z() {
    var b = 900;
    function x() {
        var  a=10;

        function y() {

            console.log(a,b);
        }

        y();
    }
    x();
}

z();



