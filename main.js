var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

console.log(a.attributes);

a.setAttribute('href','https://yandex.com')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.add('blue')