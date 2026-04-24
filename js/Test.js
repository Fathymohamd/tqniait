console.log("fff")
let base = document.querySelector(".base")
let headerleft  = document.querySelector(".header-left")

base.onclick = ()=>{
  headerleft.classList.toggle("base1")
}

let gmail = document.querySelector(".gmail")
gmail.onclick = ()=>{
window.location.assign("https://www.google.com");
}

let comment = document.querySelector(".comment");
comment.onclick = () => {
  comment.classList.toggle("active");
};


// let damin = document.querySelector(".damin")
// setTimeout(()=>{
// damin.classList.add("add")
// } , 4000)


const container = document.getElementById("section-img-container");

fetch("./indexs/data.json")
.then(res => res.json())
.then(apiData => {

apiData.forEach(item => {

let sectionLeft = document.createElement("div");
sectionLeft.className = "section-img-left";

let fathy = document.createElement("div");
fathy.className = "fathy";

let img = document.createElement("img");
img.src = "imgs2/" + item.imgs2;

let h3 = document.createElement("h3");
h3.textContent = item.title;

let p = document.createElement("p");
p.textContent = item.h3;

let btn = document.createElement('a')
// btn.href = "https://www.tqniait.com/about.php"
btn.textContent = "المزيد"
btn.className = "mune-bootem"
fathy.appendChild(img);
fathy.appendChild(h3);
fathy.appendChild(p);
fathy.appendChild(btn)
sectionLeft.appendChild(fathy);

let sectionRight = document.createElement("div");
sectionRight.className = "section-img-rigth";

let rightImg = document.createElement("img");
rightImg.src = "imgs3/" + item.imgs3;

sectionRight.appendChild(rightImg);

let wrapper = document.createElement("div");
wrapper.className = "section-wrapper";

  if(wrapper.dataset.id = item.id){
    wrapper.style.display = "none";   
  }
    if(wrapper.dataset.h1 = item.h1){
    wrapper.style.display = "block";   
  }
wrapper.appendChild(sectionLeft);
wrapper.appendChild(sectionRight);
container.appendChild(wrapper);

});

});


let buttons = document.querySelectorAll(".tab-btn");

buttons.forEach(btn => {
btn.onclick = () => {

buttons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");
let id = btn.dataset.id;
document.querySelectorAll(".section-wrapper")
.forEach(sec => sec.style.display = "none");
document.querySelector(`.section-wrapper[data-id="${id}"]`).style.display = "block";
};
});



let video = document.querySelector(".vodeo");
function openVideo() {
  video.classList.add("active");
}
function closeVideo() {
  video.classList.remove("active");
}

let path = document.querySelectorAll(".path a");
let groups = document.querySelectorAll(".group");

groups.forEach(gr => gr.style.display = "none"); 
if (groups[2]) {
  groups[2].style.display = "block"; 
}

path.forEach(ele => {
  ele.onclick = (e) => {
    e.preventDefault(); 

    path.forEach(link => {
      link.classList.remove("activepath");
    });

    groups.forEach(gr => {
      gr.style.display = "none";
    });

    let target = ele.dataset.target;
    document.getElementById(target).style.display = "block";

    ele.classList.add("activepath");
  };
});


let res = "رشاد الحاتم"
let res1 = "فوزى المشاري"
let res2 =  "عمر القحطانى"
let res3 = "Privilege Compaly"
let res4 = "Talal Ali"
let joneimf = document.querySelector(".jone-imf  p")
let joneimf1 = document.querySelector(".jone-imf1 p")
let joneimf2 = document.querySelector(".jone-imf2 p")
let joneimf3 = document.querySelector(".jone-imf3 p")
let joneimf4 = document.querySelector(".jone-imf4 p")
joneimf.textContent = res
joneimf1.textContent = res1
joneimf2.textContent = res2
joneimf3.textContent = res3
joneimf4.textContent = res4



let containerlift = document.querySelector(".test-lift");

let testlift = document.querySelectorAll(".test-lift p");

let test = Array.from(testlift).map(p => p.textContent);

let reslift = test.join(" | ");
containerlift.innerHTML = `<p>${reslift}</p>`;



