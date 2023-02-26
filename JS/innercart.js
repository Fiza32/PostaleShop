let id = JSON.parse(localStorage.getItem("onediv"))
let data = JSON.parse(localStorage.getItem("datas"))
let imgaedata = document.getElementById('image')
let container = document.getElementById("mainconatiner")
let dform = document.getElementById("road")


fdata()
let atttocartarray = JSON.parse(localStorage.getItem('cartarray'))
if(atttocartarray==null){
    atttocartarray=[]
}
let itemcheck = JSON.parse(localStorage.getItem('itemarray'))
if(itemcheck==null){
    itemcheck=[]
}
function fdata(){
    let datacart = data.filter((item)=>item.id==id)
    //console.log(datacart);
    let imgsrc = datacart[0].src
    let gender = datacart[0].category
    let Name = datacart[0].name
    let price = datacart[0].name
    let ides = datacart[0].id
    //datacreate(imgsrc,gender,Name,price)
    console.log(datacart);
   
    let mainingdata =  datacreate(imgsrc,gender,Name,price)
    container.innerHTML = mainingdata

    
    let addtocart = document.getElementById("addtocart")

    addtocart.addEventListener('click',(e)=>{
       console.log(ides);
       
       let flag = 'yes' 
       for(let i=0;i<itemcheck.length;i++){
        
        if(itemcheck[i]==ides){
            flag = "No"
            break
        }
       }console.log(flag);
       if(flag=="yes"){
        itemcheck.push(ides)
       localStorage.setItem('itemarray',JSON.stringify(itemcheck))
       atttocartarray.push(datacart[0])
       localStorage.setItem('cartarray',JSON.stringify(atttocartarray))
       console.log(itemcheck);
       alert("Added To Cart!")
       }else {
        alert("Item Is Already Added")
       }
       



    })


    
}


function datacreate(imgsrc,genger,Name,price){
    let datas = ` 
    <div id="themain">
    <div id="image">
        <img src="${imgsrc}" alt="error">
    </div>


    <div class="details">
        <p>${genger}</p>
        <p id="new">New</p>
        <h3>${Name}</h3>
        <span><p>${price}</p><p>comp.value</p></span>
        <h4>Clour:black box</h4>
        <div class="colors">
            <div id="bcolir"></div>
        <div id="wcolir"></div>
        </div>
        
        <h4>Size:Select Size</h4>
        <div id="sizebtn">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button id="addtocart">ADD TO CART</button>

    </div>
    </div>
    
    `
    return datas
    //dform.innerHTML = data
   
    
    //return data
//console.log(data)
   
}




