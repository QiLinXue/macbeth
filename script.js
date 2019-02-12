
var input = document.getElementById("myInput");

function getQuote(){
    var x = document.getElementsByName(input.value)[0].innerHTML
    document.getElementById("quotation").innerHTML = x;
}

function scrollQuote(){
    document.getElementsByName(input.value)[0].scrollIntoView({block: "start", behavior: "smooth"});
}

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        getQuote()
    }
});

// document.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 9) {
//         var lineCode = prompt("Enter an act.scene.line (etc 2.3.32).");
//         document.getElementsByName(lineCode)[0].scrollIntoView({block: "start", behavior: "smooth"});
//     }
// });

