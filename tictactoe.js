const firstBox=document.getElementById("1");
const secondBox=document.getElementById("2");
const thirdBox=document.getElementById("3");
const fourthBox=document.getElementById("4");
const fifthBox=document.getElementById("5");
const sixthBox=document.getElementById("6");
const seventhBox=document.getElementById("7");
const eightBox=document.getElementById("8");
const ninthBox=document.getElementById("9");


const turn=document.getElementById("turn");
let playerXTurn=true;
let playerTurn=0;
const boxes=document.querySelectorAll(".cell");
// const won=document.getElementById.innerHTML("won");

for(i=0;i<boxes.length;i++){
    boxes[i].onclick=function(event){
        if(event.target.innerHTML != "") {
            return // exit
        }
        // if(event.target.innerHTML != ""){
        // return
        // }
        if(getWinner() == false) {  
                      
            if(playerXTurn){
                event.target.innerHTML=" X ";
                turn.innerHTML="Player 2 turn now(O)";
                
                playerXTurn = !playerXTurn;
                if(getWinner() == true){
                    displayWinner();                  
                }
                else if (playerTurn==8 && getWinner()==false){
                    document.getElementById("won").innerHTML=("It's a Tie!!");
                }
                playerTurn++;
            }
            else{ 
                event.target.innerHTML=" O ";
                turn.innerHTML = "Player 1 turn now(X)";

                playerXTurn = !playerXTurn;
                if(getWinner() == true) {
                    displayWinner()
                }
                else if (playerTurn==8 && getWinner()==false){
                    document.getElementById("won").innerHTML=("Tie");
                }
                playerTurn++;
            }
        }
    } 
}



 function getWinner(){
    //vertical wins
    if(firstBox.innerHTML == fourthBox.innerHTML && firstBox.innerHTML == seventhBox.innerHTML && seventhBox.innerHTML !==""){
        return true;
    }
    else if(secondBox.innerHTML == fifthBox.innerHTML && secondBox.innerHTML == eightBox.innerHTML && eightBox.innerHTML !==""){
        return true;
    }
    else if(thirdBox.innerHTML == sixthBox.innerHTML && thirdBox.innerHTML == ninthBox.innerHTML && ninthBox.innerHTML !==""){  
        return true;
    }
    //
    //horizontal wins
    else if(seventhBox.innerHTML == eightBox.innerHTML && seventhBox.innerHTML == ninthBox.innerHTML && ninthBox.innerHTML !==""){  
        return true;
    } 
    else if(fourthBox.innerHTML == fifthBox.innerHTML && fourthBox.innerHTML == sixthBox.innerHTML && sixthBox.innerHTML !==""){  
        return true;
    }
    else if(firstBox.innerHTML == secondBox.innerHTML && firstBox.innerHTML == thirdBox.innerHTML && thirdBox.innerHTML !==""){
        return true;
    }
    //
    //diagonal wins
    else if(firstBox.innerHTML == fifthBox.innerHTML && firstBox.innerHTML == ninthBox.innerHTML && ninthBox.innerHTML !==""){
        return true;
    }
    else if(thirdBox.innerHTML == fifthBox.innerHTML && thirdBox.innerHTML == seventhBox.innerHTML && seventhBox.innerHTML !==""){  
        return true;
    }

    else{ return false; }
    
}

function displayWinner() {
   if (playerTurn % 2 == 0 && getWinner()==true) {
    document.getElementById("won").innerHTML=("Player X won!");
   } 
   else if (playerTurn %2 !=0 && getWinner()==true) {
    document.getElementById("won").innerHTML=("Player O won!"); 
    }
}
// function tie(){
//     if (playerTurn==9 &&getWinner==(false)){
//         document.getElementById("won").innerHTML =("Tie");
//     }

// }
