import data from '../data/alllocat.json' assert{type:'json'};
import topdata from '../data/toplocat.json' assert{type:'json'};
const buttonw = document.getElementById("buttonshow");



function allcreate(icon,hindi,english,map){
  const creat  = document.getElementById("maincon");
  creat.innerHTML +=  `<section   class="mainsection">
  <div class="iconname">${icon}</div>
  <div class="hindi">${hindi}</div>
  <div class="english">${english}</div>
  <div class="map"><a href="${map}">Google Map <span class="material-symbols-outlined">
    location_on 
    </span></a></div>
  
</section>`;
};

function loader() {
  data.forEach((e) =>{
    allcreate(e.icon,e.hindi,e.english,e.maplocation)
  })
}

buttonw.addEventListener("click",()=>{
  document.getElementById("maincon").innerHTML = ``;
  loader();
  config();
  configg();
});


function config(){
  if(buttonw.innerText === 'Show Less'){
    document.getElementById("maincon").innerHTML = ``;
  topdata.forEach((e)=>{
    allcreate(e.icon,e.hindi,e.english,e.maplocation)
  })
  }
  else {
    document.getElementById("maincon").innerHTML = ``;
  loader();
  }
};

function configg(){
  if(buttonw.innerText === 'Show More'){
    buttonw.innerText = `Show Less`;
  }
  else{
    buttonw.innerText = `Show More`;
  }
};

