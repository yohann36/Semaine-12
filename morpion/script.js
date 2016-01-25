var cases     =document.querySelectorAll('.case');
var user_sign =document.querySelectorAll('.x')
var pc_sign   =document.querySelectorAll('.o');

var lcase=cases.length;

for(var i=0;i<lcase;i++){
    cases[i].addEventListener('click',function(e){
        e.preventDefault();
        if(e.target.id)
        user_sign[i].style.display='block';
    },false)
}