//Selecting Sidenavbar, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//product search

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")

var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enterValue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enterValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})