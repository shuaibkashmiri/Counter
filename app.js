let count =0;
let result =document.querySelector('#value')
let btn =document.querySelectorAll('.btn');

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let styles=e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
            
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
            
        }

        if(count>0){
            result.textContent=count;
            result.style.color='green'
        }else if(count<0){
            result.textContent=count;
            result.style.color='red'
        }else{
             result.textContent=0;
            result.style.color='black'
        }
    })
})