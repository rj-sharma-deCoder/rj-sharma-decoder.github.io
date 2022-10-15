
let count = 0
btn = document.getElementById('skillButton')
function afterClick(){
    
    let skills = ["abc", "def", "pqr", "xyz"]
    let ul = document.getElementById("skill-items")    
    // Create an Element
    let li = document.createElement("li");
    //li.setAttribute('data-counter', skills[count])
    //li.appendChild(document.createTextNode(skills[count]))
    // Append the Element
    li.innerHTML = '<b>'+skills[count]+'</b>'
    //li.setAttribute('class', 'red')
    li.style.backgroundColor = 'red'
    ul.appendChild(li)

    count++

    if (count>4){
        return 1
    }
}

//document.querySelector('button').onclick = afterClick
btn.addEventListener('click', afterClick)


