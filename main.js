var h1 = document.querySelector('h1')
var button = document.querySelector('button')
var input = document.querySelector('input')

button.addEventListener('click', function() {
    h1.textContent = input.value
})

h1.addEventListener('mouseenter', function() {
    this.style.color = 'red'
})

h1.addEventListener('mouseleave', function() {
    this.style.color = 'black'
})