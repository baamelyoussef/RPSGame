let userScore=0;
let computerScore=0;
let userScore_span= document.getElementById("User-score");
let computerScore_span= document.getElementById("Computer-score");
const scoreBoard_div= document.querySelector(".score-board");
let result_div= document.querySelector(".Result");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");

function getComputerChoice(){
    const Choices =['r','p','s'];
    const random =Math.floor(Math.random()*3);
    return Choices[random];
}
function resultCheck(userScore,computerScore){
    if(userScore==10){
        alert("You Won !");
    }else
    if(computerScore==10){
        alert("You Lost !");
    }
}

function winAnimation(){
    document.getElementById("User-score").classList.add('greeny');
    setTimeout(function() {document.getElementById("User-score").classList.remove('greeny')}, 1000);
}

function lostAnimation(){
    document.getElementById("Computer-score").classList.add('redy');
    setTimeout(function() {document.getElementById("Computer-score").classList.remove('redy')}, 1000);
    
}
function drawAnimation(){
    document.getElementsByTagName('span').classList.add('greyy');
    setTimeout(function() {document.getElementsByTagName('span').classList.remove('greeny')}, 1000);

}
function game(userChoice){
    
    resultCheck(userScore,computerScore);
    const computerChoice= getComputerChoice();
    if(userChoice=="p" && computerChoice =="r"){
        
        result_div.innerHTML ="Your Paper Coverd The Rock. You win 🎉";
        userScore++;
        
        document.getElementById("p").classList.add('green');
        setTimeout(function() {document.getElementById("p").classList.remove('green')}, 1000);
        document.getElementById("User-score").innerHTML=userScore.toString();
        
    }else
    if(userChoice=="r" && computerChoice=="s"){
        
        result_div.innerHTML="Your Rock Destroyed The Scissors. You win 🎆";
        userScore++;
        
        document.getElementById("r").classList.add('green');
        setTimeout(function() {document.getElementById("r").classList.remove('green')}, 1000);    
        document.getElementById("User-score").innerHTML=userScore.toString();
        
    }else
    if(userChoice=="s" && computerChoice=="p"){
        
        result_div.innerHTML="Your Scissors Cuts The Paper. You win 🎊";
        userScore++;
        
        document.getElementById("s").classList.add('green');
        setTimeout(function() {document.getElementById("s").classList.remove('green')}, 1000);
        document.getElementById("User-score").innerHTML=userScore.toString();
       
    }else
    if(userChoice=="r" && computerChoice =="p"){
        
        result_div.innerHTML ="Your Rock got covered by the paper. You Lose ☠️";
        computerScore++;
        document.getElementById("r").classList.add('red');
        setTimeout(function() {document.getElementById("r").classList.remove('red')}, 1000);
        document.getElementById("Computer-score").innerHTML=computerScore.toString();
                

    }else
    if(userChoice=="s" && computerChoice=="r"){
        
        result_div.innerHTML="Your Scissors got destroyed with the rock. You Lose 😔";
        computerScore++;
        
        document.getElementById("s").classList.add('red');
        setTimeout(function() {document.getElementById("s").classList.remove('red')}, 1000);
        document.getElementById("Computer-score").innerHTML=computerScore.toString();
       
    }else
    if(userChoice=="p" && computerChoice=="s"){
        
        result_div.innerHTML="Your Paper got cut with the scissors. You Lose 🤦‍♂️";
        computerScore++;
        document.getElementById("p").classList.add('red');
        setTimeout(function() {document.getElementById("p").classList.remove('red')}, 1000);
        document.getElementById("Computer-score").innerHTML=computerScore.toString();
        

    }else
    if(userChoice=="p" && computerChoice=="p"){
        result_div.innerHTML="Paper Vs Paper. Draw ! 👀";
        
        document.getElementById("p").classList.add('grey');
        setTimeout(function() {document.getElementById("p").classList.remove('grey')}, 1000);
        
    }else
    if(userChoice=="r" && computerChoice=="r"){
        result_div.innerHTML="Rock Vs Rock. Draw ! 👌";
        
        document.getElementById("r").classList.add('grey');
        setTimeout(function() {document.getElementById("r").classList.remove('grey')}, 1000);
        
    }else
    if(userChoice=="s" && computerChoice=="s"){
        result_div.innerHTML="Scissors Vs Scissors. Draw ! 😶";
        
        document.getElementById("s").classList.add('grey');
        setTimeout(function() {document.getElementById("s").classList.remove('grey')}, 1000);
        
    }
    
}

function loadPage(){
    document.getElementById("buttons").addEventListener('click', function(){
        document.getElementById("loadPage").classList.add('hide');
        document.getElementById("Game").classList.add('show');
        document.getElementById("Game").classList.remove('rata');
    })
}

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissors_div.addEventListener('click',function(){
    game("s");
})
}
loadPage();
main();
