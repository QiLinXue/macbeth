
var input = document.getElementById("myInput");

function getQuote(){
    var x = document.getElementsByName(input.value)[0].innerHTML
    document.getElementById("quotation").innerHTML = x;
}

var act, scene, line = 0;
var lineId = act+"."+scene+"."+line
function randomQuote(){
    while(true){
        act = Math.floor(Math.random() * 2) + 1
        scene = Math.floor(Math.random() * 7) + 1
        line =  Math.floor(Math.random() * 7) + 1
        lineId = act+"."+scene+"."+line
        try{
            document.getElementById("quotation").innerHTML = document.getElementsByName(lineId)[0].innerHTML
            break;
        }
        catch{
            continue;
        }
    }
}

function scrollQuote(){
    try{
        document.getElementsByName(input.value)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }
    catch{
        document.getElementsByName(lineId)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }
}

function revealRandom(){
    document.getElementById("quotation").innerHTML = document.getElementsByName(lineId)[0].innerHTML + "<br/>Source: " + lineId
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

