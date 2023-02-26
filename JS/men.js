let grid = document.getElementById("grid3")
let grid4 = document.getElementById("grid4")
let maincontaner = document.getElementById('contaner')
let baseserverurl = `https://63c9170d320a0c4c9540575f.mockapi.io/products?_limit=10&page=1`
let uptolow = document.getElementById("LowtoHigh")
let lowttohig = document.getElementById("HightoLow")
let newarrival = document.getElementById("Arrivals")
let BestSellers = document.getElementById("BestSellers")
let itemnm = document.getElementById("itemnm")

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



//   contaner

window.addEventListener('load',()=>{
    //console.log('sooraj')
    fetching()
})
async function fetching(){
    try {
        let res = await fetch(baseserverurl)
        let data = await res.json()
        womendata(data)
        
    } catch (error) {
        console.log(error);
    }
}
// women fiter
function womendata(data){
  let menata =  data.filter((item)=>item.category=="men")
  let nmcount = (menata.length);
  itemnm.innerText  = nmcount+" Items"

  maping(menata)
  
  grid.addEventListener("click",()=>{
    maping3(menata)
    
  })
  grid4.addEventListener("click",()=>{
    maping(menata)
  })

  localStorage.setItem("mensdatas",JSON.stringify(menata))
}

// function fatching(){
//   fetch(baseserverurl)
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data);
//     maping(data)
//   })
// }
function maping3(data){
  let maincard = `<div class="grid5">
  ${data.map((item)=>creatingcard(item.id,item.src,item.name,item.price,item["Comp.value"])).join("")}
  </div>`
  maincontaner.innerHTML = maincard

  let divelement = document.querySelectorAll(".makec")
  for(let divs of divelement){
    divs.addEventListener('click',(e)=>{
      console.log(divs.id);
      window.location.pathname = "day-2fp07_069\innercart.html"

      localStorage.setItem("onediv",JSON.stringify(divs.id))
    })
  }
  //console.log(divelement);
 // console.log(maincard)
}
function maping(data){
  let maincard = `<div id="divgr">
  ${data.map((item)=>creatingcard(item.id,item.src,item.name,item.price,item["Comp.value"])).join("")}
  </div>`
  maincontaner.innerHTML = maincard
let pic = document.querySelectorAll(".picture")
for(let s of pic){
 s.addEventListener("click",()=>{
  window.location = "./innercart.html"
 })
}


let divelement = document.querySelectorAll(".makec")
 for(let divs of divelement){
  
    divs.addEventListener('click',(e)=>{
      console.log(divs.id);
      localStorage.setItem("onediv",JSON.stringify(divs.id))
      window.open("C:\Users\sooraj\Desktop\somber-sugar-2510\day-2fp07_069\innercart.html")
    })
  }
  //console.log(divelement);
 // console.log(maincard)
}
//(Comp.value,color,name,price,product_badge,ratings,src)
function creatingcard(id,src,name,price,Compvalue){
    let card = ` <div id='${id}' class="makec">
    <img ${id} src="${src}" class="picture" alt="error">
    <p ${id}>${name}
      </p>
      <p${id}><span>${price}</span><span>Comp. Value: ${Compvalue}</span></p>
      <p${id}>***</p>
  </div>`
  return card
}

// filter function 


let datos = JSON.parse(localStorage.getItem("mensdatas"))
uptolow.addEventListener('click',()=>{
  let updownd = datos.sort(function(a,b){
    let bprice = Number(b.price.slice(1))
    let aprice = Number(a.price.slice(1))
     //console.log(bprice);
     return aprice-bprice
    })
  console.log(updownd);
  maping(updownd) 

})
// low to high
lowttohig.addEventListener('click',()=>{
  let updownd = datos.sort(function(a,b){
    let bprice = Number(b.price.slice(1))
    let aprice = Number(a.price.slice(1))
     //console.log(bprice);
     return bprice-aprice
    })
  console.log(updownd);
  maping(updownd) 

})

// filter of new 
newarrival.addEventListener('click',()=>{
  let fiterednew = datos.filter((item)=>item.badge=="New!")
  console.log(fiterednew);
  maping(fiterednew) 
})

BestSellers.addEventListener('click',()=>{
  let highrating = datos.filter((item)=>item.ratings>0)
  console.log(highrating);
  maping(highrating) 
})

// grid change




//let grid = document.getElementById("grid3")
// $('#grid3').click(function(e){
//   e.preventDefault()
//   $('#contaner' ).toggleClass("grid5");
//   console.log(e);
// });
// });