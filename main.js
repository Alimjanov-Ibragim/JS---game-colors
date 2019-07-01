var person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    friends: ['Elena','Igor']
}

var str = JSON.stringify(person)

console.log(JSON.parse(str))