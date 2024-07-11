const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


button.addEventListener("click",function(){
    const text = (input.value);
    console.log(text);
    const li = document.createElement('li');
    li.parentElement = ul;
    li.innerText = text.toUpperCase();
    ul.append(li)

    // for buttons -
    const dltbtn = document.createElement('button');
    dltbtn.innerText = "DELETE";
    li.appendChild(dltbtn);
    
});



// Event delegation - we use parent element

ul.addEventListener('click',function(event){
    if(event.target.nodeName== 'BUTTON'){
        let a = event.target.parentElement;
        a.remove();
    }
});