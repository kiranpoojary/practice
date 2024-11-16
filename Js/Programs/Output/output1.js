var person = {
  name: "Kiran",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

person.greet();
let g = person.greet;
g();
