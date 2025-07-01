// console.log("HELLO WORLD");
// var a =200;

// console.log(a);

// function abc()
// {
//     console.log("HELLO CLASS");
// }
// var b = 3000;
// console.log(b);

// setTimeout(()=>
// {
//     console.log("i am settimeout");

// },2000);

// console.log("end");
//______________________________________________________________________________________________________________________________________________________

//Functions:-
function GrandParent(){
    var a=200;
    console.log(a);
    function parent(){
        var b=300;
        console.log(b);
        function child(){
            var c=400;
            console.log(c);
        }
        child();
    }
    parent();
}
GrandParent();