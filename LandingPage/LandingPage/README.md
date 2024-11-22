- In CSS Style there is a lot of change done on the project to be the style you see on screen interface right now, also a lot of modifications to be responsive on all screen types.

  

- There's not a lot of modification done in the HTML File it was just adding 2 more sections (4 and 5) to the Page.

  

- The majority of the work was done on app.js, there is a lot of things done there:

  

        1. Building NavBar Using buildNav() function that executed by foreach loop and other helping methods to create elements and insert text to it and also appending.

        2. Working on scroll Behavior of page by using EventListener method to make the scroll smooth between sections.

        3. Adding Function using if statement and getBoundingClientRect Method to identify which section is on the viewport to give it a special class to be clearly viewed to the user that this is the actual section he wants, also it gives an active class to the Section button in the NavBar to be more clear what's the actual section the user selected.

        4. Adding Function to Toggle the Navbar Visibility according to user interaction with a webpage by using the setTimeOut Method.

        5. Both The activeSection Function and toggleNavBar Function are invoked in the Scroll event listener to be executed.

        6. Building a goUpButton appended to the page footer to be easy for the user to click on it to go to the home page again without scrolling,this button was made by using JS and CSS only without the intervention of HTML.

---
