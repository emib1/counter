// set initial count
let count =0;
// Select val;lue and button
const value = document.querySelector('#value');
let buttons = document.querySelectorAll('.btn');


 buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count ++;
        }
        else{
            count =0;
        }

        if(count>0){
            value.style.color = '#bc72f0'
        }
        else if ( count <0){
            value.style.color = '#b5698f'
        }
        else {value.style.color = '#222'}

        value.textContent = count;
    })
 });