let cartdata = JSON.parse(localStorage.getItem('itemarray'))
let atttocartarray = JSON.parse(localStorage.getItem('cartarray'))
let data = JSON.parse(localStorage.getItem("datas"))
let comtaners = document.getElementById("mid")
let items = document.getElementById("items")
let totalamt = document.getElementById("totalamt")
let Shipping = document.getElementById("Shipping")
let Estimated = document.getElementById("Estimated")
let CHECKOUT = document.getElementById("CHECKOUT")




// console.log(cartdata);
// console.log(atttocartarray);


//filtering()
let lengthcard = cartdata.length
items.innerText = lengthcard+"  Items"
window.addEventListener("load",()=>{

})
//console.log(items);

maping(atttocartarray)
function maping(data){

  let maincard = `<div id="divgr">
  ${data.map((item)=>creatingcard(item.id,item.src,item.name,item.price,item["Comp.value"],item.color)).join("")}
  </div>`
  //console.log(data);
  comtaners.innerHTML = maincard
  
let inputid = document.querySelectorAll(".removes")
//console.log(data);
let sum = 0
for(let i=0;i<data.length;i++){
   
   sum+=(Number(data[i].price.slice(1)))
   
}// console.log(sum/20);
let es  = "$"+sum+3
let jkm = "$"+sum/30
jkm = jkm.substring(0,4)
let jkm2 = "$"+sum
jkm2 = jkm2.substring(0,4)
es = es.substring(0,4)

console.log(jkm); 
totalamt.innerText =jkm2+".00"
Shipping.innerText = jkm
Estimated.innerText = es+".00"


for(let rembtn of inputid){
    rembtn.addEventListener("click",(e)=>{
        //console.log(e.target.id)
        let removeid = e.target.id
        let datacart = data.filter((item)=>item.id!=removeid)

        localStorage.setItem('cartarray',JSON.stringify(datacart))
        maping(datacart)
        console.log(datacart);

        
    })
}
//console.log(inputid);
// inputid.addEventListener("change",(e)=>{
//     console.log(e.target);
//     // if(e.target.value<0){
//     //     e.target.value=0
//     // }else{

//     // }
    
   
// })

 



}


function creatingcard(id,src,name,price,Compvalue,color){
    let card = `
    <div id="flexi">
    <div id="comtaners">
    <div id='${id}' class="makec">
    <img ${id} src="${src}" class="picture" alt="error">
    <a href="#">Edit Details</a>
     </div>
     <br>
    </div>
    <div class="detals">
    <h3>${name}</h3>
    <table>
     <tbody>
        <tr>
            <td>Color</td>
            <td>${color}</td>
        </tr>
        <tr>
            <td>Size</td>
            <td>Small</td>
        </tr>
       
     </tbody>
     </table>
     <br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1">Ship To Me</label><br>
            <br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1">In-Store Pickup</label><br>


    </div>

    <div class="quatity">
            <div class="itemscount">
                <h3>QUANTITY</h3>
                <input class="inputid" id="${id}" type="number">
                <button class="removes" id="${id}">Remove</button>
                <br>
                <h4 id="instock">In Stock</h4>
            </div>
            <div class="price">
                <h3>PRICE</h3>
                <p>${price}</p>
                <p>Comp.value:</p>
                <p>${Compvalue}</p>
            </div>
        </div> 
    </div>
    
    
 `
  return card

  
}

