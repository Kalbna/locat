import data from "../data/toplocat.json" assert { type: "json" };

const qrlocat = document.getElementById("qrcode");
const qrbtn = document.getElementById("modal-toggle");

/* const element = document.getElementById("maincon");
const fragment = document.createDocumentFragment();

function create(icon, hindi){
  const section = document.createElement("section");
  section.classList.add("mainsection");
  const div = document.createElement("div");
  div.classList.add("english");
  div.textContent = icon;
  fragment.appendChild(section);
  div.classList.replace("english","hindi");
  div.textContent = hindi;
  fragment.appendChild(div);
  fragment.appendChild(section);
}
data.forEach(e =>{
  create(e.english,e.hindi)
})

element.appendChild(fragment); */
function topcreat(icon, hindi, english, map,id) {
  const creat = document.getElementById("maincon");
  creat.innerHTML += `<section   class="mainsection">
  <div class="iconname itext gm">${icon}</div>
  <div class="hindi hindiname">${hindi}</div>
  <div class="english engname ">${english}</div>
  <a href="${map}" class="map glow-on-hover gm" target="_blank" rel="noopener noreferrer"><img src="icons8-google-maps-old.svg" alt="google-maps"><div class="gmtext">
  Google Map
  </div></a>

</section>`;

}
/* <button type="button"><div id="qrcode"></div></button> */
/* 
<div class="qr">
  <div class="modal-container">
  <input class="qrboxmod" id="modal-toggle" type="checkbox">
  <label class="modal-btn" for="modal-toggle"> <img src="svg/qr_code.svg" alt="qr_code"></label> 
  <label class="modal-backdrop" for="modal-toggle"></label>
  <div class="modal-content">
    <label class="modal-close" for="modal-toggle">&#x2715;</label>
    <h2>QR Code</h2><hr />
    <div class="qrcode"></div>
    <label class="modal-content-btn" for="modal-toggle">OK</label>   
  </div>          
</div>          
</div>  
*/
/* 
<div class="modal-container">
  <input class="qrboxmod" id="modal-toggle" type="checkbox">
  <label class="modal-btn" for="modal-toggle"> <img src="svg/qr_code.svg" alt="qr_code"></label> 
  <label class="modal-backdrop" for="modal-toggle"></label>
  <div class="modal-content">
    <label class="modal-close" for="modal-toggle">&#x2715;</label>
    <h2>QR Code</h2><hr />
    
    <label class="modal-content-btn" for="modal-toggle">OK</label>   
  </div>          
</div>  
*/
{/* <button type="button" id=""></button> */}
/* const qrbtnbox = document.getElementsByClassName("qrboxmod"); */


data.forEach((e) => {
  let lowerStr = e.english.toLowerCase();
  topcreat(e.icon, e.hindi, lowerStr, e.map,e.id);
  
  
});

