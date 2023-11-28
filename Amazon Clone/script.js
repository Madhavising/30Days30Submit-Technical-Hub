//image slide
let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100; // 300

let intervalId; 

// Function to handle moving the slider to the left
function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    updateSlider();
}

// Function to handle moving the slider to the right
function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

// Function to automatically move the slider to the right every 5 seconds
function autoMoveSlider() {
    intervalId = setInterval(() => {
        handleRightBtn();
    }, 5000); 
}

autoMoveSlider();

// Stop the automatic slider movement when left or right buttons are clicked
slideBtnLeft.addEventListener("click", () => {
    clearInterval(intervalId); 
    handleLeftBtn(); 
});

slideBtnRight.addEventListener("click", () => {
    clearInterval(intervalId); 
    handleRightBtn();
});


//today_deals_product_item


let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item")

let startProduct = 0;


today_deal_btn_prevEl.addEventListener("click", () => {

   
    if(startProduct < 0){
        startProduct += 500
    }
    if(startProduct > -1000){
        today_deals_product_itemEl.forEach(el =>{
            el.style.transform = `translateX(${startProduct}%)`
        })
    }

})

today_deal_btn_nextEl.addEventListener("click", () => {
    // alert("next")
    
    if(startProduct > -1500){
        startProduct -= 500
    }

    today_deals_product_itemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
    
    
});



// Slide section 2 


const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

rightBtn.addEventListener("click", function(event){
    console.log('Done');
const conect = document.querySelector('.product-slide');
conect.scrollLeft+=1100;
event.preventDefault();
});

leftBtn.addEventListener("click", function(event){
    console.log('Done');
const conect = document.querySelector('.product-slide');
conect.scrollLeft-=1100;
event.preventDefault();
});




const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".panel-all");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})



const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})



