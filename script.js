let flag=true ;
var clicked = false;
var twclick = false;
var thclick =false;
var foclick =false;
var ficlick =false;
var siclick = false;
var seclick= false;
var eiclick =false;
var niclick =false;
var a1 ;
var a2
var a3
var a4
var a5 
var a6 
var a7 
var a8 
var a9
function func1(){
    if(!clicked){
        clicked =true
    if(flag){
        document.getElementById('one').innerHTML = "X" 
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn";
        a1=1;
    } 
    else 
    {
        document.getElementById('one').innerHTML = "O"
        flag =true;
        document.getElementById('turn').innerHTML = "player X turn"
        a1=2;
    }
    if(a1+a2+a3 ==3 || a1+a4+a7 ==3 || a1+a5+a9 ==3 ) {
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if(a1+a2+a3 ==6 ||a1+a4+a7 ==6 || a1+a5+a9 ==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
    }
}
function func2(){
    if(!twclick){
    twclick =true
    if(flag) {
        document.getElementById('two').innerHTML = "X"
        flag = false;
        document.getElementById('turn').innerHTML = "player O turn"
        a2=1;
    }
    else
     {
        document.getElementById('two').innerHTML = "O"
        flag= true;
        document.getElementById('turn').innerHTML = "player X turn"
        a2=2;
    }
    if(a1+a2+a3 ==3 || a2+a5+a8==3){
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if(a1+a2+a3 ==6 || a2+a5+a8==6){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        console.log(a1+a2+a3+a4+a5+a6+a7+a8+a9);
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
   }
}

function func3(){
    if(!thclick){
    thclick =true
    if(flag) {
        document.getElementById('three').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a3=1;
    }
    else{
        document.getElementById('three').innerHTML = "O";
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a3=2;
    }
    if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
    if(a1+a2+a3 ==3 ||  a3+a6+a9 ==3 || a3+a5+a7==3 ){
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    } 
    else if(a1+a2+a3 ==6 ||  a3+a6+a9 ==6 || a3+a5+a7==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
} 
    
}

function func4(){
    if(!foclick){
    foclick =true
    if(flag) {
        document.getElementById('four').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a4=1;
    }
    else{
        document.getElementById('four').innerHTML = "O";
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a4=2;
    }
    if(a4+a5+a6==3 || a1+a4+a7 ==3){
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if( a4+a5+a6==6 || a1+a4+a7 ==6){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
 }
}

function func5(){
    if(!ficlick){
    ficlick =true
    if(flag){
        document.getElementById('five').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a5=1;
    }
    else{
        document.getElementById('five').innerHTML = "O"
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a5=2;
    }
  if(a2+a5+a8 ==3|| a4+a5+a6==3 || a5+a3+a7==3 || a5+a1+a9==3) {
    document.getElementById('won').innerHTML = "Player X won"
    restart()
  }
  else if(a2+a5+a8 ==6 || a4+a5+a6==6 || a5+a3+a7==6 || a5+a1+a9==6 ){
    document.getElementById('won').innerHTML = "Player O won"
    restart()
  }
  else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
    document.getElementById('won').innerHTML = "Match Tied"
    restart()
  }
}
}

function func6(){
    if(!siclick){
    siclick =true
    if(flag){
        document.getElementById('six').innerHTML = "X"
        document.getElementById('turn').innerHTML = "player O turn"
        flag=false;
       a6=1;
    } 
    else{
        document.getElementById('six').innerHTML = "O"
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
       a6=2;
    }
    if(a3+a6+a9==3 || a4+a5+a6==3 ) {
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if(a3+a6+a9==6 || a4+a5+a6==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
 }
}

function func7(){
    if(!seclick){
    seclick =true
    if(flag) {
        document.getElementById('seven').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a7=1;
    }
    else{
        document.getElementById('seven').innerHTML = "O"
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a7=2;
    }
    if(a7+a4+a1==3 || a7+a8+a9 ==3 || a7+a5+a3==3 ){
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    } 
    else if(a7+a4+a1==6 || a7+a8+a9 ==6 || a7+a5+a3==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
}
}

function func8(){
    if(!eiclick){
    eiclick =true
    if(flag) {
        document.getElementById('eight').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a8=1;
    }
    else{
        document.getElementById('eight').innerHTML = "O"
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a8=2;
    }
    if(a2+a5+a8==3 || a7+a5+a9 ==3) {
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if(a2+a5+a8==6 || a7+a5+a9 ==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if( (a1+a2+a3+a4+a5+a6+a7+a8+a9)==13 || (a1+a2+a3+a4+a5+a6+a7+a8+a9)==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
}
}

function func9(){
    if(!niclick){
    niclick =true
    if(flag) {
        document.getElementById('nine').innerHTML = "X"
        flag=false;
        document.getElementById('turn').innerHTML = "player O turn"
        a9=1;
    }
    else{
        document.getElementById('nine').innerHTML = "O"
        flag=true;
        document.getElementById('turn').innerHTML = "player X turn"
        a9=2;
    }
    if(a7+a8+a9==3 ||a3+a6+a9==3  || a1+a5+a9==3 ) {
        document.getElementById('won').innerHTML = "Player X won"
        restart()
    }
    else if( a7+a8+a9==6 || a1+a5+a9==6 ||a3+a6+a9==6 ){
        document.getElementById('won').innerHTML = "Player O won"
        restart()
    }
    else if(a1+a2+a3+a4+a5+a6+a7+a8+a9 ==13 || a1+a2+a3+a4+a5+a6+a7+a8+a9==12){
        document.getElementById('won').innerHTML = "Match Tied"
        restart()
    }
}

}

function restart(){
    setInterval(()=> location.reload(),1000);
    document.getElementById('one').innerHTML = ""
    document.getElementById('two').innerHTML = ""
    document.getElementById('two').innerHTML = ""
    document.getElementById('three').innerHTML = ""
    document.getElementById('four').innerHTML = ""
    document.getElementById('five').innerHTML = ""
    document.getElementById('six').innerHTML = ""
    document.getElementById('seven').innerHTML = ""
    document.getElementById('eight').innerHTML = ""
    document.getElementById('nine').innerHTML = ""
}
