const input = document.getElementById('input')
const items = document.getElementById('list')
document.getElementById('basic-addon2').addEventListener('click', function(e){
//    alert('am clicked') to confirm that it is working

if(input.value === "" ){
    alert('your list is empty')
}
else{
   const list = document.createElement('li')
   list.textContent = input.value
   list.classList.add('list-group-item', 'categoryTag')
   items.appendChild(list)
   items.addEventListener('click', function(e){
    e.target.style.textDecoration ="line-through";
  
  
   })
   save()
  
   
    
}


})


input.addEventListener('keydown',function(e){
    if(e.key ==='Enter' && input.value !==''){

        const list = document.createElement('li')
   list.textContent = input.value
   list.classList.add('list-group-item', 'categoryTag')
   items.appendChild(list)
   

   input.value = "" 
  
    }
    save()
    
})

function save(){
    localStorage.setItem('data', items.innerHTML)
}
function read(){
     items.innerHTML =                             localStorage.getItem('data')
}
read()