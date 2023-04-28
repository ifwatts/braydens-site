
function setUserMessage(msg){
    document.getElementById("user_msg").innerHTML = msg;

}

function getUserName(){
    return document.getElementById("name").innerHTML;
}

function setGameMsg(msg){
    document.getElementById("gameMsg").innerHTML = msg;

}
function setAIMessage(msg){
    document.getElementById("ai_msg").innerHTML = msg;
}

function getRockPile(){
    return document.getElementById("rockPile").value ;
}

function askForName(){
    document.getElementById("btnRestartGame").disabled = true;
    document.getElementById("btnRestartGame").style.visibility = 'hidden';
    var name = prompt("Please enter your name");
    document.getElementById('name').innerHTML= name;
}


function restartGame(){
    setGameMsg("");
    setAIMessage("Computer AI is ready to play ");
    setUserMessage("Welcome to Game of Rocks, Make your first choice.");
    setRockPile(21);
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btnRestartGame").disabled = true;
    document.getElementById("btnRestartGame").style.visibility = 'hidden';
    
}

function setRockPile(totalRocks){
    document.getElementById("rockPile").value = totalRocks;
    document.getElementById("rockPileMsg").innerHTML = "<h1>Rocks in the Pile: " + totalRocks + "</h1>";
    


    if(totalRocks<4){
        document.getElementById("btn3").disabled = true;
    }else{
        document.getElementById("btn3").disabled = false;
    }
    if(totalRocks<3){
        document.getElementById("btn2").disabled = true;
    }else{
        document.getElementById("btn2").disabled = false;
    }
    if(totalRocks<2){
        document.getElementById("btn1").disabled = true;
        document.getElementById("btnRestartGame").disabled = false;
        document.getElementById("btnRestartGame").style.visibility = 'visible';
    }else{
        document.getElementById("btn1").disabled = false;
    }
}

function generateRandom(min = 1, max = 4) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}


function aiPicksRocks() {
    var numRocks = generateRandom();
    var rocks = getRockPile();
    rocks = rocks - numRocks;
    setRockPile(rocks);
    setAIMessage("AI removed " + numRocks + " rocks from the pile.");
    if(rocks <2){
        setGameMsg("<h1>Game Over: AI Player has won the game, long live our AI overloads</h1>");
    }else{
        setUserMessage("It is your turn " + getUserName() + ", choose wisely...");
    }
}

function userPicksRock(numRocks){
    //Disable all the user buttons
    var rocks = getRockPile();
    rocks = rocks - numRocks;
    setRockPile(rocks);
    setUserMessage(getUserName() + " removed " + numRocks + "  from the pile");
    if(rocks<2){
        name = document.getElementById('name').innerHTML;
        setGameMsg("<h1>Game Over: " + name + " has won the game</h1>");
    }else{
        //disable user
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        //Sleep 3 seconds then let AI User go
        setAIMessage("Computer AI is thinking....");
        setTimeout(aiPicksRocks,2000);
    }


}

