/**
 * Define Global Variables
 */

// Select the navigation menu and sections
const navBar = document.querySelector('.hiba__navbar__menu');
const navList = document.querySelector('#hiba__navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.hiba__page__header');

/**
 * Build the Navigation Bar
 */

function buildNav() {
    sections.forEach(section => {
        // Create navigation item (li)
        const navButton = document.createElement('li');

        // Create link (a) inside navigation item
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.className = 'hiba__menu__link';
        link.textContent = section.dataset.nav;

        navButton.appendChild(link);
        navList.appendChild(navButton);

        // Add smooth scrolling behavior
        scrollBehavior(navButton, section);
    });

    navBar.appendChild(navList);
}

// Invoke the buildNav function
buildNav();

/**
 * Smooth Scrolling Behavior
 */

function scrollBehavior(navButton, section) {
    navButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scroll({
            top: section.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Highlight Active Section in Viewport
 */

function activeSection() {
    const navLinks = document.querySelectorAll(".hiba__menu__link");
    sections.forEach((section, index) => {
        const sectionBounds = section.getBoundingClientRect();

        // Check if section is in viewport
        if (sectionBounds.top <= 380 && sectionBounds.bottom >= 350) {
            section.classList.add("hiba__your-active-class");
            navLinks[index].classList.add("hiba__active__link");
        } else {
            section.classList.remove("hiba__your-active-class");
            navLinks[index].classList.remove("hiba__active__link");
        }
    });
}

/**
 * Toggle Navigation Bar Visibility on Scroll
 */

function toggleNavBar() {
    let userScroll;

    header.style.opacity = '1';
    header.style.transition = 'ease 0.3s';

    clearTimeout(userScroll);

    userScroll = setTimeout(() => {
        header.style.opacity = '0';
        header.style.transition = 'ease 0.3s';
    }, 6000);
}

/**
 * Scroll to Top Button
 */

// Add the "Go Up" button
const goUpButtonHTML = `<div id="hiba__return__top" class="hiba__go__up"></div>`;
footer.insertAdjacentHTML("beforebegin", goUpButtonHTML);

// Scroll to top behavior
document.getElementById("hiba__return__top").addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/**
 * Add Event Listeners
 */

// Active section highlighting and navbar toggle on scroll
window.addEventListener('scroll', () => {
    activeSection();
    toggleNavBar();
});
