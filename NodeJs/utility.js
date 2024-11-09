try {
    var k = new Map();
    console.log("ES6 supported!!")
} catch (err) {
    console.log("ES6 not supported :(")
}



let totalMarks = 200
let m1 = 73
let m2 = 91
let m1P = ((m1) * 100) / (m1 + m2)
let m2P = ((m2) * 100) / (m1 + m2)
console.log("\n**************secured marks percentage of each subject*******");
console.log("m1% ", (parseFloat(m1P)).toFixed(2) + "%");
console.log("m2% ", (parseFloat(m2P)).toFixed(2) + "%");


console.log("\n*********array of object sort(number sort)**********")
let users = [{ name: "Kiran", age: 27, }, { name: "appieee", age: 23 }, { name: "raam", age: 24 }]
users.sort((user1, user2) => {
    return user1.age - user2.age
})
console.log(users);
users.sort((user1, user2) => {
    return user2.age - user1.age
})
console.log(users);

console.log("\n*********array of object sort(string sort)**********")
let recuiters = [
    {
        "label": "All Recruiters",
        "value": "*"
    },
    {
        "label": "bix@gmail.com",
        "value": 36612
    },
    {
        "label": "calvin@gmail.com",
        "value": 27005
    },
    {
        "label": "shiva@gmail.com",
        "value": 27060
    },
    {
        "label": "admin@gmail.com",
        "value": 12469
    },
    {
        "label": "punith@gmail.com",
        "value": 20882
    },
    {
        "label": "john@gmail.com",
        "value": 27004
    },
    {
        "label": "kiran@gmail.com",
        "value": 34336
    },
    {
        "label": "abhi@gmail.om",
        "value": 36054
    },
    {
        "label": "puneeth@gmail.com",
        "value": 31769
    },
    {
        "label": "rajtest@gmail.com",
        "value": 20426
    },
    {
        "label": "nagesh@neovegam.com",
        "value": 20358
    },
    {
        "label": "sharath@gmail.com",
        "value": 17508
    },
    {
        "label": "puni@gmail.com",
        "value": 20792
    },
    {
        "label": "punithraj@gmail.com",
        "value": 30104
    },
    {
        "label": "sunil@gmail.com",
        "value": 42409
    },
    {
        "label": "rig_test@gmail.com",
        "value": 42411
    }
]
recuiters.sort((user1, user2) => {
    return user2.label > user1.label
})

console.log(recuiters.sort((a, b) => (a.label > b.label ? 1 : -1)));
console.log(recuiters.sort((a, b) => (a.label < b.label ? 1 : -1)));

console.log("Random 3 digit Number ", Math.floor(Math.random() * (999 - 100 + 1) + 100))