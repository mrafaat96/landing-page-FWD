/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// get all the sections 
var sections=document.querySelectorAll("section");
var navBar = document.getElementById("navbar__list");

// function to create navbar 
function createNav(){
    for (let i=0;i<sections.length;i++){
        //create li in the odrerlist
        let item = document.createElement("li");
        // create anchor 
        let link = document.createElement("a");
        // set the link 
        link.setAttribute("href",`#${sections[i].id}`);
        link.textContent=sections[i].dataset.nav;
        link.classList.add("menu__link");

        link.addEventListener("click",function(event){
            event.preventDefault();
            sections[i].scrollIntoView({behavior:"smooth"});
        })
        item.appendChild(link);
        navBar.appendChild(item);
    }
}

createNav();
// function to hilight sections in the viewport 
function hilightSection() {
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        //check the section in the viewport 
      if (
        sections[i].getBoundingClientRect().top >= -400 &&
        sections[i].getBoundingClientRect().top < 130
      ) {
        sections[i].classList.add("your-active-class");
      } else {
        sections[i].classList.remove("your-active-class");
      }
    }
  }
 
  
  window.addEventListener("scroll", (event) => {
    hilightSection();
  });
  

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
