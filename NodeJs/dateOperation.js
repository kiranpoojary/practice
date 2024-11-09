//date formating
console.log("*********date formats*********");
var yourDate = new Date();
yourDate.toISOString().split("T")[0];
console.log(yourDate);
var offset = yourDate.getTimezoneOffset();
yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
console.log(yourDate.toISOString().split("T")[0]);
//start of date milis
var start = new Date();
start.setHours(0, 0, 0, 0);
var end = new Date();
end.setHours(23, 59, 59, 999);
console.log(new Date(new Date().toISOString().split("T")[0]).getTime());
// 2020-05-06
const formatYd = (date) => date.toISOString().slice(0, 10);
console.log(formatYd(new Date()));
var d = new Date(1634649841381);
console.log(d.toLocaleString()); // expected output: "7/25/2016, 1:35:07 PM"
console.log(d.toLocaleDateString()); // expected output: "7/25/2016"
console.log(d.toDateString()); // expected output: "Mon Jul 25 2016"
console.log(d.toDateString().substr(4, d.toDateString().length)); // expected output: "Jan 1 1998"
console.log(d.toTimeString()); // expected output: "13:35:07 GMT+0530 (India Standard Time)"
console.log(d.toLocaleTimeString()); // expected output: "1:35:07 PM"
const options = {
  month: "short", // Short month name (e.g., Aug)/ long
  day: "2-digit", // Two-digit day of the month (e.g., 10)
  year: "numeric", // Numeric year (e.g., 2021)
  hour: "2-digit", // Two-digit hour (e.g., 17)
  minute: "2-digit", // Two-digit minute (e.g., 40)
  hour12: false, // Use 24-hour format (e.g., 17:40)
};

// Format the date using toLocaleString() method with options
const formattedDate = new Date().toLocaleString("en-US", options);

console.log(formattedDate); // Output: Aug 10, 2021 17:40
var result =
  Math.floor(1629253800000 / (1000 * 60 * 60)) +
  ":" +
  (Math.floor(1629253800000 / (1000 * 60)) % 60) +
  ":" +
  (Math.floor(1629253800000 / 1000) % 60);
console.log(result);
console.log(new Date().toLocaleString("en-GB")); //18/02/2022, 14:19:37

//start of today in milis
console.log("********start of today in milis**********");
console.log(new Date(new Date().toISOString().split("T")[0]).getTime());

//end of today in milis
console.log("********End of today in milis**********");
console.log(
  new Date(new Date().toISOString().split("T")[0]).getTime() + 86400000 - 1
);

// start of specific day
console.log("********start of specific day(mili)**********");
console.log(
  new Date(new Date(1628500051108).toISOString().split("T")[0]).getTime()
);

console.log("************ week start-end ***************** ");
var weekstart = new Date(
  new Date().setDate(new Date().getDate() - new Date().getDay())
);
from = new Date(new Date(weekstart).toISOString().split("T")[0]).getTime();
to = from + 7 * 86400000 - 1;
console.log(from, to);
console.log(new Date(from), new Date(to));

//month start and end
console.log("**********Month Start End*********");
var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getUTCMonth(), 1);
var lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0);
// console.log(firstDay);
console.log(new Date(firstDay).getTime() + 5 * 60 * 60 * 1000 + 30 * 60 * 1000);
console.log(
  new Date(lastDay).getTime() +
    24 * 60 * 60 * 1000 +
    5 * 60 * 60 * 1000 +
    30 * 60 * 1000
);

console.log("*******************Previous year, month, day*****************");
// plus 1 year
console.log(
  "Previous Year :- ",
  new Date().setFullYear(new Date().getFullYear() - 1)
);
// plus 1 month
console.log(
  "Previous Month :- ",
  new Date().setMonth(new Date().getMonth() - 1)
);
// plus 1 day
console.log("Previous Day :- ", new Date().setDate(new Date().getDate() - 1));
