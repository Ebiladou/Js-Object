let bandInfo =
  "SpitFire is a Russian pop culture band established 1990 by 3 friends which later became 5. The band has released...";

// Add your code here
const band = {
  name: "SpitFire",
  nationality: "Russian",
  genre: "pop",
  members: 5,
  formed: "1990",
  split: false,
  albums: [
    ["life", 2007],
    ["peace", 1990],
    ["kill me", 2018],
  ],
};


// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
