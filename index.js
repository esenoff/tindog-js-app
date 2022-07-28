import dogs from "./data.js"
import Dog from "./Dog.js"


function like(){
    match.likeMatch()
    initial()
    setTimeout(()=>{
        newMatch()
        next = new Dog(dogs[Math.floor(Math.random( )*(dogs.length))])
    },1000)
}

function dislike(){
    match.dislikeMatch()
    initial()
    setTimeout(()=>{
        newMatch()
        next = new Dog(dogs[Math.floor(Math.random( )*(dogs.length))])
    },1000)
}

 let match = new Dog(dogs[Math.floor(Math.random( )*(dogs.length))])
 let next = new Dog(dogs[Math.floor(Math.random( )*(dogs.length))])

 function initial(){
    document.getElementById("content").innerHTML = match.getNewMatch()   
 }

 function newMatch(){
    document.getElementById("content").innerHTML = next.getNewMatch() 
    match = next 
 }
document.getElementById('btn-like').addEventListener("click", like);

document.getElementById('btn-dislike').addEventListener("click", dislike);

initial();



