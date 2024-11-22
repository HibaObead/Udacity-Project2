/**
 * Manipulating the DOM exercise.
 * Updated with 'Hiba' prefixes for class and ID names.
 */

/**
 * Define Global Variables
 */
// Start Global Variables
const Hiba_navBar = document.querySelector('.Hiba__menu');
const Hiba_navList = document.querySelector('#Hiba_navbarList');
const Hiba_sections = document.querySelectorAll('Hiba_section');
const Hiba_footer = document.querySelector('.Hiba__footer');
const Hiba_header = document.querySelector('.Hiba__header');
// End Global Variables

// Start build the nav
function buildNav() {
    Hiba_sections.forEach((Hiba_section) => {
        // Create the li elements that are contained inside the ul
        const Hiba_navButton = document.createElement('li');

        // Insert the HTML text to the li
        const Hiba_link = document.createElement('a');
        Hiba_link.href = `#${Hiba_section.id}`;
        Hiba_link.className = 'Hiba_menuLink';
        Hiba_link.textContent = Hiba_section.dataset.nav;

        Hiba_navButton.appendChild(Hiba_link);

        // Append the li to the ul
        Hiba_navList.appendChild(Hiba_navButton);

        // scrollBehavior Function Invoke
        scrollBehavior(Hiba_navButton, Hiba_section);
    });
    // Append the ul to the nav
    Hiba_navBar.appendChild(Hiba_navList);
}

// Build Nav Function Invoke
buildNav();
// End build the nav

// Start of Scroll to anchor ID using scrollTo event
function scrollBehavior(Hiba_navButton, Hiba_section) {
    Hiba_navButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scroll({
            top: Hiba_section.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    });
}
// End of Scroll to anchor ID using scrollTo event

// Start of Set the Section class 'active' when it is near to the top of viewport
function activeSection() {
    // Select all anchor using "Hiba_menuLink" class
    const Hiba_navActive = document.querySelectorAll('.Hiba_menuLink');
    Hiba_sections.forEach((Hiba_section, i) => {
        // Get the bounding rect for each section
        const Hiba_sectionBond = Hiba_section.getBoundingClientRect();
        // Check if the section is in viewport or not
        if (Hiba_sectionBond.top <= 380 && Hiba_sectionBond.bottom >= 350) {
            // Section in viewport according to top and bottom boundings
            // Add 'Hiba_activeSection' class to the specific section
            Hiba_section.classList.add('Hiba_activeSection');
            // Add 'Hiba_activeButton' class to the specific nav button according to section ID
            Hiba_navActive[i].classList.add('Hiba_activeButton');
        } else {
            // Remove both section and navButton active classes when section is off sight
            Hiba_section.classList.remove('Hiba_activeSection');
            Hiba_navActive[i].classList.remove('Hiba_activeButton');
        }
    });
}
// End of Set the Section class 'active' when it is near to the top of viewport

// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar() {
    let userScroll;
    // Default settings for NavBar while scrolling
    Hiba_header.style.opacity = '1';
    Hiba_header.style.transition = 'ease 0.3s';

    // Clear timeout throughout the scrolling
    window.clearTimeout(userScroll);

    // The timeout to run after scrolling ends
    userScroll = setTimeout(function () {
        // The settings executed on NavBar after timeout finished
        Hiba_header.style.opacity = '0';
        Hiba_header.style.transition = 'ease 0.3s';
    }, 6000);
}

// Listen for scroll events to trigger toggleNavBar
window.addEventListener('scroll', toggleNavBar);
// End of Toggle the NavBar According to User Scroll Activity

// Start of the Scroll Event to execute the functions of activeSection and toggleNavBar
window.addEventListener('scroll', (event) => {
    activeSection();
    toggleNavBar();
});
// End of the Scroll Event to execute the functions of activeSection and toggleNavBar

// Start of GO UP Button
// Create the div element for the button
Hiba_footer.insertAdjacentHTML('beforebegin', `<div Id="Hiba_returnTop"></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById('Hiba_returnTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
// End of GO UP Button
