const hiddenBtn = document.querySelector(".hide-bar"); 
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close-btn"); 

hiddenBtn.onclick = function (){
    navBar.style.width = "100%";
}

closeBtn.onclick = function (){
    navBar.style.width = "0%"
}



/* =========== image service card =========== */

const card = [
    {
        url: "./img/istockphoto-1333915280-612x612.jpg", 
        desc: "Standard junk removal"
    }, 
    {
        url: "./img/istockphoto-975981006-612x612.jpg", 
        desc: "TV disposal"
    }, 
    {
        url: "./img/istockphoto-469514814-612x612.jpg", 
        desc: "Refrigeration removal"
    }, 
    {
        url: "./img/istockphoto-1085618448-612x612.jpg", 
        desc: "Job site cleanup"
    }, 
    {
        url: "./img/istockphoto-1306822710-612x612.jpg", 
        desc: "Yard waste removal"
    }, 
]

const getCard = document.querySelector(".responsive");
card.map(({url, desc}) =>{
    getCard.innerHTML += `
    <div class="card" data-aos="fade-up">
            <div class="card-img">
                <img src="${url}" alt="">
            </div>
            <div class="desc">${desc}</div>
        </div>
    
    `
});





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}