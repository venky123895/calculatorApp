const display=document.getElementById('display');
const clear=document.getElementById('clear');
const but=document.querySelectorAll('.but');
const answer1 = document.getElementById('answer');

init()



function init(){
    let answer="";

    clear.addEventListener('click',function(){
        display.innerText="";
        answer="";

    })
   

    but.forEach((item)=>{
        item.addEventListener('click',function(){
            
            display.innerText += item.value;
            answer += item.value;
        })
    })
    
    answer1.addEventListener('click',function(){
    
        display.innerText=eval(answer)

    })
  
}

