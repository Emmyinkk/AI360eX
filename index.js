


// const dropdowns = document.querySelectorAll('.dropdown');

// // Function to toggle the dropdown
// function toggleDropdown(event) {
//     event.stopPropagation(); // Prevent event from bubbling to document

//     // Close all other dropdowns
//     dropdowns.forEach(otherDropdown => {
//         if (otherDropdown !== this && otherDropdown.classList.contains('active')) {
//             otherDropdown.classList.remove('active');
//         }
//     });

//     // Toggle the clicked dropdown
//     this.classList.toggle('active');
// }

// // Attach event listener to each dropdown
// dropdowns.forEach(dropdown => {
//     dropdown.addEventListener('click', toggleDropdown);
// });

// // Close dropdown when clicking outside
// document.addEventListener('click', () => {
//     dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
// });


 // OBSERVER FOR THE FADE UP ANIMATION
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showw')
        }
    });
});

const hiddenElements = document.querySelectorAll('.faded');
hiddenElements.forEach((el) => observer.observe(el));



// OBSERVER FOR THE FADE DOWN ANIMATION
const observerdown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showw')
        }
    });
});

const hiddenElementsDown = document.querySelectorAll('.fade-down');
hiddenElementsDown.forEach((el) => observer.observe(el));



// OBSERVER FOR THE FADE LEFT ANIMATION
const observedElements1 = document.querySelectorAll('.fade-left');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const targetElement = entry.target;

        if (entry.isIntersecting) {
            // Add or remove classes based on the intersection
            targetElement.classList.add('reveal');
        }
    });
});

observedElements1.forEach(element => {
    observer1.observe(element);
});



// OBSERVER FOR THE FADE RIGHT ANIMATION
const observedElements2 = document.querySelectorAll('.fade-right');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const targetElement = entry.target;

        if (entry.isIntersecting) {
            // Add or remove classes based on the intersection
            targetElement.classList.add('reveal');
        }
    });
});

observedElements2.forEach(element => {
    observer2.observe(element);
});
