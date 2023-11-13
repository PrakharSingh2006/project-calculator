let values = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (compute)=>{
    if(compute.target.innerHTML == 'enter'){
      values = eval(values);
      document.querySelector('#screen').value = values;
    }
    else if(compute.target.innerHTML == 'del'){
     values = "";
      document.querySelector('#screen').value = values;
    }
    else{ 
    console.log(compute.target)
    values = values + compute.target.innerHTML;
    document.querySelector('#screen').value = values;
      }
  })
})