var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')
    

array.splice(1, 0, '22')

var newArray = array.concat(['1','2','3'])

// console.log(array)
// console.log(newArray)

var objArr = [
    {
        name: 'Ibragim', age: 24
    },
    {
        name: 'Volodya', age: 30
    },
    {
        name: 'Nadya', age: 18
    }
]

var foundPerson = objArr.find(function(person){
    return person.age === 24
})

// console.log(foundPerson)

// var num = [1,2,3,4,5,6,7,8,9,10].filter(function(i){
//     return i % 2 === 0
// })

// console.log(num)

var numArr = array.map(function(i){
    return i * 2
})

console.log(numArr)