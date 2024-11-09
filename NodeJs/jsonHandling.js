let _ = require("lodash")

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.cloneDeep(objects)  //_.clone(objects);
shallow[0].a = 99;
shallow[1].b = 22
console.log(shallow[0] === objects[0]);
console.log(objects, shallow);
// → true