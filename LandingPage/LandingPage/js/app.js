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
// Start Global Variables
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End Global Variables


// Start build the nav
function buildNav(){
    sections.forEach(section => {
        // Create the li elements that are contained inside the ul
        const navButton = document.createElement('li');
        
        // Insert the HTML text to the li
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.className = 'menu__link';
        link.textContent = section.dataset.nav;
        
        navButton.appendChild(link);
        
        // Append the li to the ul
        navList.appendChild(navButton);

        // scrollBehavior Function Invoke
        scrollBehavior(navButton, section);
    });
    // Append the ul to the nav
    navBar.appendChild(navList);
}

// Build Nav Function Invoke
buildNav();

// End build the nav


// Start of Scroll to anchor ID using scrollTo event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scroll({
            top: section.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    });
}
// End of Scroll to anchor ID using scrollTo event


// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
    // Select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport accourding to top and bottom boundings
            //add 'your-active-class' class to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport


// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar() {
    let userScroll;
    // Default settings for NavBar while scrolling
    header.style.opacity = '1';
    header.style.transition = 'ease 0.3s';
    
    // Clear timeout throughout the scrolling
    window.clearTimeout(userScroll);
    
    // The timeout to run after scrolling ends
    userScroll = setTimeout(function() {
        // The settings executed on NavBar after timeout finished
        header.style.opacity = '0';
        header.style.transition = 'ease 0.3s';
    }, 6000);
}

// Listen for scroll events to trigger toggleNavBar
window.addEventListener('scroll', toggleNavBar);
// End of Toggle the NavBar According to User Scroll Activity


//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 


// Start of GO UP Button
//Create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button