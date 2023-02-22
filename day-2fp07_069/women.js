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
let maincontaner = document.getElementById('contaner')

window.addEventListener('load',()=>{
    console.log('sooraj')
    fetching()
})

async function fetching(){
    try {
        let res = await fetch('https://63c9170d320a0c4c9540575f.mockapi.io/products')
        let data = await res.json()
        console.log(data[0].women);
    } catch (error) {
        console.log(error);
    }
}

function creatingcard(){
    
}