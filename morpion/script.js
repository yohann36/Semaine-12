var cases =document.querySelectorAll('.case');
var ux    =document.querySelectorAll('.x');
var event =document.getElementById('event');
var reset =document.getElementById('reset');
var rond =document.getElementById('rond');
var croix =document.getElementById('croix');

var v0,v1,v2,v3,v4,v5,v6,v7,v8;


/*____computer's click___________________________________________*/

function test(){
    v0=ux[0].textContent;
    v1=ux[1].textContent;
    v2=ux[2].textContent;
    v3=ux[3].textContent;
    v4=ux[4].textContent;
    v5=ux[5].textContent;
    v6=ux[6].textContent;
    v7=ux[7].textContent;
    v8=ux[8].textContent;
}

function choice_computer(){
    
    
    test();
    if(v4==""){
        ux[4].innerHTML="O";
    }else if (v0=="" && ((v4=="X" && v8=="X")||(v1=="X" && v2=="X")||(v3=="X" && v6=="X")) ){
           ux[0].innerHTML="O";
           
    } else if (v8=="" && ((v4=="X" && v0=="X")||(v5=="X" && v2=="X")||(v7=="X" && v6=="X")) ){
           ux[8].innerHTML="O";
           
    } else if (v2=="" && ((v4=="X" && v6=="X") || (v1=="X" && v0=="X") || (v5=="X" && v8=="X")) ){
            ux[2].innerHTML="O";
            
    } else if (v6=="" && ((v4=="X" && v2=="X")||(v7=="X" && v8=="X")||(v3=="X" && v0=="X"))){
            ux[6].innerHTML="O";
            
    } else if (v1==""&& ((v0=="X" && v2=="X")||(v4=="X"&&v7=="X"))){
            ux[1].innerHTML="O";
            
    } else if (v3==""&&((v0=="X" &&v6=="X")||(v4=="X" && v5=="X"))){
            ux[3].innerHTML="O";
            
    } else if (v5==""&&((v2=="X" && v8=="X")||(v3=="X" && v4=="X"))){
            ux[5].innerHTML="O";
            
    } else if (v7==""&&((v4=="X" && v1=="X")||(v6=="X" && v8=="X"))){
            ux[7].innerHTML="O";
            
    }else if(v1=="" && v2=="" && v3=="" && v5=="" && v6=="" && v7=="" && v8=="" ){
        ux[6].innerHTML="O";
        
    }else if (v0=="" && ((v4=="O" && v8=="O")||(v1=="O" && v2=="O")||(v3=="O" && v6=="O")) ){
           ux[0].innerHTML="O";
           
    } else if (v8=="" && ((v4=="O" && v0=="O")||(v5=="O" && v2=="O")||(v7=="O" && v6=="O")) ){
           ux[8].innerHTML="O";
           
    } else if (v2=="" && ((v4=="O" && v6=="O") || (v1=="O" && v0=="O") || (v5=="O" && v8=="O")) ){
            ux[2].innerHTML="O";
            
    } else if (v6=="" && ((v4=="O" && v2=="O")||(v7=="O" && v8=="O")||(v3=="O" && v0=="O"))){
            ux[6].innerHTML="O";
            
    } else if (v1==""&& ((v0=="O" && v2=="O")||(v4=="O"&&v7=="O"))){
            ux[1].innerHTML="O";
            
    } else if (v3==""&&((v0=="O" &&v6=="O")||(v4=="O" && v5=="O"))){
            ux[3].innerHTML="O";
            
    } else if (v5==""&&((v2=="O" && v8=="O")||(v3=="O" && v4=="O"))){
            ux[5].innerHTML="O";
            
    } else if (v7==""&&((v4=="O" && v1=="O")||(v6=="O" && v8=="O"))){
            ux[7].innerHTML="O";
        
    }else{
        
        for(var i=0;i<9;i++){
            var aléatoire=Math.random();
            if(ux[i].textContent==""){
                if(aléatoire<0.3){
                   ux[i].innerHTML="O"; 
                   break;
                } else if(ux[i].textContent==""){
                if(aléatoire>0.7||i>=7){
                   ux[i].innerHTML="O"; 
                   break;
                }
            }
        }
    }
    }
}

/*____end game___________________________________________*/

function end_game(){
    test()
    if((v0=="X" && v1=="X" && v2=="X")||(v3=="X" && v4=="X" && v5=="X")||(v6=="X" && v7=="X" && v8=="X")||(v0=="X" && v3=="X" && v6=="X")||(v1=="X" && v4=="X" && v7=="X")||(v2=="X" && v5=="X" && v8=="X")||(v0=="X" && v4=="X" && v8=="X")||(v2=="X" && v4=="X" && v6=="X")){
        event.innerHTML="BRAVO<br>You win!!";
        
    }else  if((v0=="O" && v1=="O" && v2=="O")||(v3=="O" && v4=="O" && v5=="O")||(v6=="O" && v7=="O" && v8=="O")||(v0=="O" && v3=="O" && v6=="O")||(v1=="O" && v4=="O" && v7=="O")||(v2=="O" && v5=="O" && v8=="O")||(v0=="O" && v4=="O" && v8=="O")||(v2=="O" && v4=="O" && v6=="O")){
        event.innerHTML="You lose<br>L.I.A est plus forte que toi!!";
        
    }else if(v0!="" && v1!="" && v2!="" && v3!="" && v4!="" && v5!="" && v6!="" && v7!="" && v8!=""){
        event.innerHTML="Egalité<br>L.I.A et toi êtes aussi fort!!";
    } else{
        event.innerHTML="";
    }
} 


/*____user's click___________________________________________*/

rond.classList.add("unfocus");
croix.classList.add("focus");
var lcase=cases.length;

for(var i=0;i<lcase;i++){
    
    cases[i].addEventListener('click',function(e){
        event.innerHTML="";
        if(e.target.firstElementChild !=null){
            
            e.target.firstElementChild.innerHTML="X";
            end_game();
            
            rond.classList.remove('unfocus');
            croix.classList.remove('focus');
            rond.classList.add('focus');
            croix.classList.add('unfocus');
            
            setTimeout(function(){
                choice_computer();
                
                croix.classList.remove('unfocus');
                croix.classList.add('focus');
                rond.classList.remove('focus');
                rond.classList.add('unfocus');
                
                end_game();
            },1000);
            
            
           
            
        }else{
            event.innerHTML=this.textContent+" est déja joué ici. Merci d'essayer une case non jouée";
        }
       
    },false);
    
}

/*____reset's click___________________________________________*/

reset.addEventListener('click',function(e){
    e.preventDefault();
    event.innerHTML="";
    for(var i=0;i<9;i++){
    ux[i].innerHTML="";
    }
},false);

