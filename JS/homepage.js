
// Navbar JS Starts here
$('.menuburger').click(function(e){
    e.preventDefault()
    $(this).toggleClass("click");
    $('.menuburger .list').toggleClass("show");
});
$('.women-btn').click(function(e){
    e.preventDefault()
    $('.menuburger .list ul .women-show').toggleClass("show");
    $('.menuburger .list ul .first').toggleClass("rotate");
});
$('.men-btn').click(function(e){
    e.preventDefault()
    $('.menuburger .list ul .men-show').toggleClass("show1");
    $('.menuburger .list ul .second').toggleClass("rotate");
});
$('.jeans-btn').click(function(e){
    e.preventDefault()
    $('.menuburger .list ul .jeans-show').toggleClass("show2");
    $('.menuburger .list ul .second').toggleClass("rotate");
});
$('.clearance-btn').click(function(e){
    e.preventDefault()
    $('.menuburger .list ul .clearance-show').toggleClass("show3");
    $('.menuburger .list ul .second').toggleClass("rotate");
});
$('.menuburger .list li').click(function(e){
    $(this).addClass("active").siblings().removeClass("active");
});
// Navbar JS ends here


let text1 = document.querySelector(".multicolor .logotype span")
let text2 = document.querySelector(".redone >.text .span1")
let text3 = document.querySelector(".redone >.text .span2")
let arr1 = ["우편","poçt","Post","邮政","Posti"]
let arr2 = ["What makes this community so magical is the sheer resilience againtshate","If it wasn't for two brave and ruthless transgender women of color starting a riot,",]
let arr3 = ["and the unfaltering emission of love, acceptance and inclusivity.","we wouldn't have the ability to openly love and be loved."]
let currentindex1 = 0
let currentindex2 = 0
let currentindex3 = 0

setInterval(() => {
    currentindex1++
    if(currentindex1===arr1.length){
        currentindex1 = 0
    }
    display()
}, 2000);
display()
function display(){
text1.innerHTML = arr1[currentindex1]
}
display()


setInterval(() => {
    currentindex2++
    if(currentindex2===arr2.length){
        currentindex2 = 0
    }
    display1()
}, 2000);
display1()
function display1(){
text2.innerHTML = arr2[currentindex2]
}
display1()


setInterval(() => {
    currentindex3++
    if(currentindex3===arr3.length){
        currentindex3 = 0
    }
    display2()
}, 2000);
display2()
function display2(){
text3.innerHTML = arr3[currentindex3]
}
display2()