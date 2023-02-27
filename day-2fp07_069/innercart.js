let id = JSON.parse(localStorage.getItem("onediv"))
let data = JSON.parse(localStorage.getItem("datas"))
let imgaedata = document.getElementById('image')
let container = document.getElementById("mainconatiner")
let dform = document.getElementById("road")


fdata()
function fdata(){
    let datacart = data.filter((item)=>item.id==id)
    //console.log(datacart);
    let imgsrc = datacart[0].src
    let gender = datacart[0].gender
    let Name = datacart[0].name
    let price = datacart[0].name
    //datacreate(imgsrc,gender,Name,price)
   
    let mainingdata =  datacreate(imgsrc,gender,Name,price)
    console.log(mainingdata);
    
}

function datacreate(imgsrc,genger,Name,price){
    let data = ` 
    <div id="image">
        <img src="${imgsrc}" alt="error">
    </div>
    <div class="details">
        <p>${genger}</p>
        <p>New</p>
        <h3>${Name}</h3>
        <span><p>${price}</p><p>comp.value$24.39</p></span>
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
    `
    //dform.innerHTML = data
    container.innerHTML = data
    
    //return data
console.log(data)

}

