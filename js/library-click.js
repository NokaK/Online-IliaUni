'use strict'

let libClick = document.getElementById("lib-click");
let menuItemTag = document.getElementById("menu-item-tag");
let tags = document.getElementById("menu-content").getElementsByClassName("tag-space")
let menuContent = document.getElementById("library-content");

menuItemTag.addEventListener("click", handleMenuItemTagClick);
libClick.addEventListener("click", libFunc);


function libFunc(addContent) {
    //prevents page for refresh
    addContent.preventDefault();

    //get library div element
    let libListener = document.getElementById("library-content");

    //get library-left-elem div element
    let libLeftElem = document.getElementById("library-left-elem");

    //get filter-items
    let filterElem = document.querySelectorAll('.filter-items');


    //get col classes
    let colChilds = document.getElementsByClassName("box-visibility");


    //get offset width of library element for library content
    let libGetWidth = document.getElementById("lib-click").offsetWidth;





    let gridSystem = document.getElementById("grid-system-id");



    if (libListener.style.display == "block") {
        libListener.style.display = "none";

        libClick.style.borderLeft = "1px solid #707070";
        for (let i = 1; i < filterElem.length; i++) {


            filterElem[i].style.color = "#fff";
        }
        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "block";
        }

        gridSystem.style.marginLeft = libListener.offsetWidth - 15 + "px";
        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-4");
            colChilds[b].classList.add("col-3");
        }

    } else {
        libListener.style.display = "block";
        libClick.style.borderLeft = "none";
        for (let i = 1; i < filterElem.length; i++) {
            filterElem[i].style.color = "#333333";
        }

        for (let a = 0; a < colChilds.length; a += 4) {
            colChilds[a].style.display = "none";
        }



        //Library content gets width parameter of the library element current width
        libListener.style.maxWidth = libGetWidth + 37 + "px";


        gridSystem.style.marginLeft = libListener.offsetWidth + 15 + "px";

        for (let b = 0; b <= colChilds.length; b++) {
            colChilds[b].classList.remove("col-3");
            colChilds[b].classList.add("col-4");
        }

    }
}

// set default values
for (var i = 0; i < tags.length; i++) {
    tags[i].style.display = "none";
}

function handleMenuItemTagClick() {
    openMenuContainer()
    activeMenuItem(1);

    for (var i = 0; i < tags.length; i++) {
        tags[i].style.display = "block";
    }
}

function openMenuContainer() {
    // show menu container
    let menuContent = document.getElementById("library-content");
    if (menuContent.style.display == "block") {
        menuContent.style.display = "none";
    } else {
        menuContent.style.display = "block";
    }

    // hide labels - library menu items
    let labels = document.getElementById("menu-content").getElementsByClassName("checkbox");
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.display = "none";
    }

    // hide tags
    let tags = document.getElementById("menu-content").getElementsByClassName("tag-space");
    for (var i = 0; i < tags.length; i++) {
        tags[i].style.display = "none";
    }
}

function activeMenuItem(index) {
    let menuItems = document.getElementsByClassName("filter-items");
    for (i = 0; i < menuItems.length; i++) {
        if (i == index) {
            menuItems[i].style.color = "#fff";
        } else {
            menuItems[i].style.color = "#333333";
        }
    }
}

























