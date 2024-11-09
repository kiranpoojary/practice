
// Requiring lodash library
const lodash = require('lodash');

// Using _.debounce() method
// with its parameters
var debounce_fun = lodash.debounce(function () {
    console.log('Function debounced after 1000ms!');
}, 2000);

debounce_fun();