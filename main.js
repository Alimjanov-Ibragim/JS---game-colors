document.querySelector('button').addEventListener('click', function(event){

    var value = document.querySelector('input').value

    var obj = {
        text: value
    }

    localStorage.setItem('headerText', JSON.stringify(obj))

})

document.addEventListener('DOMContentLoaded', function() {

    var obj = {}

    try {
        obj = JSON.parse(localStorage.getItem('headerText'))
    } catch(e) {}
    
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }

})