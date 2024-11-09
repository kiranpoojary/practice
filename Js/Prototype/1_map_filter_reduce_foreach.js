//-----------  https://www.youtube.com/watch?v=Th3rZjfKKhI -------
// creating/replicating your own map/filter/reduce/foreach using array prototyping
// IMP Interview Question
// cb: callback
// this: entire array

const arr = [1, 2, 5, 6, 8, 9];

const emp = [
  { name: "Archana", salary: 35000 },
  { name: "Lakshmi", salary: 25000 },
];
// *******
// ***********************************************************************************************
// *******
console.log(
  "\n\n------create map equalent array prototype with name myMap------"
);
Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

//double array element usinge your own JS map prototype
console.log(arr.myMap((ele, i, arr) => 2 * ele));

// square each element usinge your own JS map prototype
const sq = arr.myMap((e) => e * e);
console.log({ sq });

// add pf 3600 and salary+5000 your own JS map prototype
const empResult = emp.myMap((emp) => {
  const { name, salary } = emp;
  return { name, salary: salary + 5000, pf: 3600 };
});
console.log({ empResult });
// *******
// ***********************************************************************************************
// *******
console.log(
  "\n\n------create filter equalent array prototype with name myFilter------"
);
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// get even element usinge your own JS filter prototype
const odd = arr.myFilter((e) => e % 2 == 0);
console.log({ odd });

// get emp with salary>30000 usinge your own JS filter prototype
const empResult2 = emp.myFilter((emp) => emp.salary > 30000);
console.log({ empResult2 });

// *******
// ***********************************************************************************************
// *******
console.log(
  "\n\n------create reduce equalent array prototype with name myReduce------"
);

Array.prototype.myReduce = function (cb, initialValue) {
  const result = initialValue;
  for (let i = 0; i < this.length; i++) {
    cb(result, this[i], i);
  }
  return result;
};

// group even/odd element usinge your own JS reduce prototype
const groupOddEven = arr.myReduce(
  (accumulator, curr) => {
    if (curr % 2 == 0) {
      accumulator.even.push(curr);
    } else {
      accumulator.odd.push(curr);
    }
    return accumulator;
  },
  { odd: [], even: [] }
);
console.log({ groupOddEven });

// get emp with salary>30000 usinge your own JS reduce prototype
const empResult3 = emp.myReduce((result, curr, i) => {
  if (curr.salary > 30000) result.push(curr);
  return result;
}, []);
console.log(empResult3);

// *******
// ***********************************************************************************************
// *******

console.log(
  "\n\n------create forEach equalent array prototype with name myForEach------"
);
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// get all even elemenet usinge your own JS forEach prototype
const myRes = [];
arr.myForEach((ele, index, wholeArray) => {
  if (ele % 2 == 0) myRes.push(ele);
});
console.log({ myRes });
