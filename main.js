let byId = (id) => document.getElementById(id)

let dispalyStyle = (element) => {
    if (element.style.display === 'none') {
        element.style.display = 'block'
    } 
    else{
        element.style.display = 'none'
    }
}

let changeClass = (btnElement)=>{
    if (btnElement.firstElementChild.className === 'fa fa-chevron-down') {
        btnElement.firstElementChild.className = 'fa fa-chevron-right'
    }
    else{
        btnElement.firstElementChild.className = 'fa fa-chevron-down'
    }
}

function call(id,buttonElement){
    let element = byId(id)
    dispalyStyle(element)
    changeClass(buttonElement)

}