import catdata from '../data/alllocat.json' assert{type:'json'};

const admin = document.getElementById("my-dropdown-id");
const adminblock = document.getElementById("admindown");
const depart = document.getElementById("blog");
const departblock = document.getElementById("departdown");
/* const other = document.getElementById("otherblog");
const otherblock = document.getElementById("otherdown"); */
var capWord;
function adminloader(english) {
  
  admin.innerHTML += `<li><a href="">${english}</a></li>
  <li class="separator"></li>`
};
function departloader(english) {
  depart.innerHTML += `<li><a href="">${english}</a></li>
  <li class="separator"></li>`
};
function otherloader(english) {
  other.innerHTML += `<li><a href="">${english}</a></li>
  <li class="separator"></li>`
};
function capitalizeFirst(str) {
  let word = str.toUpperCase();
  console.log(word);
  return capWord = word.charAt(0).toUpperCase() + word.slice(1);
}


adminblock.addEventListener("click",() =>{
  admin.innerHTML =``;
  catdata.forEach((e) =>{
    if(e.type === "Administrative"){
      capitalizeFirst(e.english)
      adminloader(capWord);
    }
  });
});

departblock.addEventListener("click",() =>{
  depart.innerHTML =``;
  catdata.forEach((e) =>{
    if(e.type === "Department"){
      capitalizeFirst(e.english)
      departloader(capWord);
    }
  });
});
/* otherblock.addEventListener("click",() =>{
  other.innerHTML =``;
  catdata.forEach((e) =>{
    if(e.type === "Other"){
      capitalizeFirst(e.english)
      otherloader(capWord);
    }
  });
});
 */
/* departblock.onclick(catdata.forEach((e) =>{
  if(e.type === "Department"){
    capitalizeFirst(e.english)
    departloader(capWord);
  }
})); */

/* otherblock.onclick(catdata.forEach((e) =>{
  if(e.type === "Other"){
    capitalizeFirst(e.english)
    otherloader(capWord);
  }
})); */