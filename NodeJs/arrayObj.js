let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },
    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },
    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    },
    {
        firstName: 'Kiran',
        lastName: 'Albert',
        age: 25,
        joinedDate: 'February 15, 2011'
    }
];

employees.sort((a, b) => {
    return a.age - b.age;
});

console.log(employees);
// employees.forEach((e) => {
//     console.log(e);
// });