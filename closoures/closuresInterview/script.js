// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
        
//     }
//     return inner;
// }

// var close=outer()
// // outer() (); its same 

// close();








// function outer(b){
   
//     function inner(){
//         console.log(a,b);
        
//     }
//      var a=10;
//     return inner;
// }

// var close=outer("hello world ")
// // outer() (); its same 

// close();







function outest(){
    var c=20;

    function outer(b){
   
    function inner(){
        console.log(a,b ,c);
        
    }
    //  var a=10;
    return inner;
}
return outer;

}

let a=100;
var close=(outest()) ("hello world ")


close();