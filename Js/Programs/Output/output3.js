function setName(name) {
  return function greet(wish) {
    console.log(wish + " " + name);
  };
}

setName("Kiran")("Hi");
let jhon = setName("Jhon");
jhon("Hello");
