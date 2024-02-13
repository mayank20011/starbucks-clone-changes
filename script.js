const body = document.querySelector("body");
const html = document.querySelector("html");
var save = 0;
var lapsave = 0;

// subscription slides
const subscriptionslides = document.querySelectorAll(".subscriptionslide");
subscriptionslides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
const subscriptionslidenext = document.querySelector(".right");
const subscriptionslideprev = document.querySelector(".left");
console.log(subscriptionslidenext);
var count = 0;
subscriptionslidenext.addEventListener("click", () => {
    if (count < subscriptionslides.length - 1) {
        count++;
        for (let i = 0; i < subscriptionslides.length; i++) {
            subscriptionslides[i].style.transform = `translatex(${count * 100 * -1}%)`;
        }
        console.log(count);
    }
});
subscriptionslideprev.addEventListener("click", () => {
    if (count > 0) {
        count--;
        for (let i = 0; i < subscriptionslides.length; i++) {
            subscriptionslides[i].style.transform = `translatex(${count * 100 * -1}%)`;
        }
        console.log(count);
    }
});
setInterval(() => {
    if (count == 0) {
        subscriptionslideprev.style.opacity = "0.5";
    }
    else {
        subscriptionslideprev.style.opacity = "1";
    }
    if (count == subscriptionslides.length - 1) {
        subscriptionslidenext.style.opacity = "0.5";
    }
    else {
        subscriptionslidenext.style.opacity = "1";
    }
}, 1);



// baristarecomended
const baristacard = document.querySelectorAll(".baristabetwwenslider .card");
console.log(baristacard);
baristacard.forEach((card, index) => {
    card.style.left = `${index * 83}%`;
});
var baristacardcounter = 0;
const baristacardnext = document.querySelector(".baristabetwwenslider i.right");
const baristacardprev = document.querySelector(".baristabetwwenslider i.left");
baristacardnext.addEventListener("click", () => {
    if (baristacardcounter < baristacard.length - 1) {
        baristacardcounter++;
        for (let i = 0; i < baristacard.length; i++) {
            baristacard[i].style.transform = `translatex(${baristacardcounter * 83 * -1}%)`;
        }
    }
});
baristacardprev.addEventListener("click", () => {
    if (baristacardcounter > 0) {
        baristacardcounter--;
        for (let i = 0; i < baristacard.length; i++) {
            baristacard[i].style.transform = `translatex(${baristacardcounter * 83 * -1}%)`;
        }
    }
});
setInterval(() => {
    if (baristacardcounter == 0) {
        baristacardprev.style.opacity = "0.5";
    }
    else {
        baristacardprev.style.opacity = "1";
    }
    if (baristacardcounter == baristacard.length - 1) {
        baristacardnext.style.opacity = "0.5";
    }
    else {
        baristacardnext.style.opacity = "1";
    }
}, 1);




// hcsllider
const hcslidercard = document.querySelectorAll(".hcslidercard");
hcslidercard.forEach((card, index) => {
    card.style.transform = `translatex(${index * 100}%)`;
});






// navigation
const headerclick = document.querySelectorAll(".changenav h3");
function removecurrentclass() {
    headerclick.forEach((tag) => {
        tag.classList.remove("current");
    });
}
headerclick.forEach((h3, index) => {
    h3.addEventListener("click", () => {
        removecurrentclass();
        h3.classList.add("current");
        if (index != 3) {
            lapsave = index;
        }
    })
});

const eachnavi = document.querySelectorAll(".eachnav i");
function removeup() {
    eachnavi.forEach((i, index) => {
        i.classList.remove("up");
        eachnavi[index].style.color = "green";
    });
}
function addup(index) {
    return function () {
        removeup();
        eachnavi[index].classList.add("up");
        eachnavi[index].style.color = "white";
        if (index != 3) {
            save = index;
        }
        if (index < 4) {
            removecurrentclass();
            headerclick[index].classList.add("current");
        }
        else
        {
            removecurrentclass();
        }
    }
}
eachnavi.forEach((i, index) => {
    i.addEventListener("click", addup(index));
});





// displayonclick for mobile
const displayonclick = document.querySelectorAll(".displayonclick");
let mobilenav = [];
let j = 0;
displayonclick.forEach((tag, index) => {
    if (index != 4) {
        mobilenav[j] = tag;
        j++;
    }
});
function removealldisplay() {
    for (let i = 0; i < displayonclick.length; i++) {
        displayonclick[i].style.display = "none";
    }
}
eachnavi.forEach((i, index) => {
    i.addEventListener("click", () => {
        removealldisplay();
        mobilenav[index].style.display = "block";
    })
});
// console.log(eachnavi);

// // displayonclick for laptop
let lapnav = [];
let k = 0;
console.log(displayonclick);
displayonclick.forEach((tag, index) => {
    if (index != 5) {
        lapnav[k] = tag;
        k++;
    }
});
function removealldisplaylap() {
    for (let i = 0; i < displayonclick.length; i++) {
        displayonclick[i].style.display = "none";
    }
}
headerclick.forEach((i, index) => {

    i.addEventListener("click", () => {
        removealldisplaylap();
        lapnav[index].style.display = "block";
    })

});





const ordertopcontainerfirst = document.querySelector("#ordertop .containerfirst");
const gifttop = document.querySelector("#gifttop");
setInterval(() => {
    if (window.innerWidth <= 650 && mobilenav[1].style.display == "block") {
        gifttop.style.display = "flex";
    }
    else {
        gifttop.style.display = "none";
    }
    if (window.innerWidth <= 650 && mobilenav[2].style.display == "block") {
        ordertopcontainerfirst.style.display = "block";
    }
    else {
        ordertopcontainerfirst.style.display = "none";
    }
}, 0);
const giftlinkstripnav = document.querySelectorAll(".linkstrip .container2 div");
const giftstripcontainer = document.querySelectorAll("#gift .container .giftclasses");
console.log(giftlinkstripnav);
console.log(giftstripcontainer);
function removespecial() {
    giftlinkstripnav.forEach((tag) => {
        tag.classList.remove("linkstripspecial");
    });
}
function removedisplayfromgiftcontainers() {
    giftstripcontainer.forEach((tag) => {
        tag.style.display = "none";
    });
}
giftlinkstripnav.forEach((tag, index) => {
    tag.addEventListener("click", () => {
        removespecial();
        removedisplayfromgiftcontainers();
        tag.classList.add("linkstripspecial");
        console.log(giftstripcontainer[index]);
        giftstripcontainer[index].style.display = "block";
    })
});




// order
const order = document.querySelector("#order");
const orderbottomsection = document.querySelectorAll("#orderbottom section");
console.log(orderbottomsection);
const orderbottom = document.querySelector("#orderbottom");
const ordertopbutton = document.querySelectorAll(".ordertopright button");
ordertopbutton.forEach((button, i) => {
    button.addEventListener("click", () => {

        if (i == 0) {
            ordertopbutton[1].classList.remove("orderbuttonstylechange");
        }
        else {
            ordertopbutton[0].classList.remove("orderbuttonstylechange");
        }
        button.classList.add("orderbuttonstylechange");
        orderbottom.classList.add("refreshanimation");
    })
});
setInterval(() => {
    orderbottom.classList.remove("refreshanimation");
}, 700);
const ordermenunav = document.querySelectorAll("#ordermenu .container div");
function removedivspecial() {
    ordermenunav.forEach((div) => {
        div.classList.remove("ordermenuspecial");
    });
}
function removeothersectionsdisplay() {
    orderbottomsection.forEach((section) => {
        section.style.display = "none";
    });
}
ordermenunav.forEach((div, index) => {
    div.addEventListener("click", () => {
        removedivspecial();
        removeothersectionsdisplay();
        orderbottomsection[index].style.display = "block";
        div.classList.add("ordermenuspecial");
    });
});
const ordersearch = document.querySelector("#ordersearch");
document.querySelectorAll(".ordertop-top i")[1].addEventListener("click", () => {
    ordersearch.classList.add("popup");
    orderbottom.style.height = "400px";

});
document.querySelectorAll(".ordertop-top i")[0].addEventListener("click", () => {

    mobilenav[0].style.display = "block";
    order.style.display = "none";
    ordersearch.classList.remove("popup");
    removeup();
    eachnavi[0].classList.add("up");
    eachnavi[0].style.color = "white";
    orderbottom.style.height = "fit-content";
    save = 0;
});
document.querySelector(".containersearchtop h5").addEventListener("click", () => {
    ordersearch.classList.remove("popup");
    orderbottom.style.height = "fit-content";
});

const formclose = document.querySelector("h5.right");
formclose.addEventListener("click", () => {
    if (window.innerWidth > 650) {
        removecurrentclass();
        removealldisplaylap();
        lapnav[lapsave].style.display = "block";
        headerclick[lapsave].classList.add("current");

    }
    else {
        removealldisplay();
        mobilenav[save].style.display = "block";
        eachnavi[3].classList.remove("up");
        eachnavi[3].style.color = "green";
        eachnavi[save].classList.add("up");
        eachnavi[save].style.color = "white";
    }
});
const search = document.querySelector("header .container .search");
search.addEventListener("click", () => {
    removecurrentclass();
    removealldisplaylap();
    displayonclick[5].style.display = "block";
})