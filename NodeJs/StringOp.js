// var skills="java, c++, html, javascript, css, boostrap"
// console.log(skills.lastIndexOf(','));
// console.log(skills.substring(0,skills.lastIndexOf(',')));

var skills = null
let jobSiteInfo = { skills: "jshusfshuhsfsfhsdfgfshgsfgysfhsfgsuggyuuug fdhufddfu dsgsy" }
if (jobSiteInfo.skills) {
  if (jobSiteInfo.skills.length > 25) {
    skills = jobSiteInfo.skills.substring(0, 25)
    skills = skills.substring(0, jobSiteInfo.skills.lastIndexOf(',')) || skills
  } else {
    skills = jobSiteInfo.skills
  }
}
console.log(skills);

let arrayStr = ["kiran", "rigin", "sharath", "punith"]
if (!arrayStr.includes("kiran")) {
  console.log("add")
} else {
  console.log("already there");
}
