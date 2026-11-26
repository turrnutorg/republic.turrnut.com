function hope(){
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            // If active, play slide-up animation before hiding
            navLinks.style.animation = 'slideUp 0.5s ease forwards';
            setTimeout(() => {
                navLinks.classList.remove('active');
                navLinks.style.animation = ''; // Reset animation
            }, 500); // Match the animation duration
        } else {
            // Play slide-down animation when showing
            navLinks.classList.add('active');
            navLinks.style.animation = 'slideDown 0.5s ease forwards';
        }

        hamburger.classList.toggle('active'); // Fancy hamburger animation
    });
}
// async function init() {
//     await Promise.all([
//         fetch('../templates/navbar.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('navbar-placeholder').innerHTML = data;
//             }),

//         fetch('../templates/footer.html')
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('footer-placeholder').innerHTML = data;
//             })
//     ]);

//     document.addEventListener('DOMContentLoaded', () => {
//         const hamburger = document.getElementById('hamburger');
//         const navLinks = document.getElementById('nav-links');

//         alert (hamburger);

//         hamburger.addEventListener('click', () => {
//             if (navLinks.classList.contains('active')) {
//                 // If active, play slide-up animation before hiding
//                 navLinks.style.animation = 'slideUp 0.5s ease forwards';
//                 setTimeout(() => {
//                     navLinks.classList.remove('active');
//                     navLinks.style.animation = ''; // Reset animation
//                 }, 500); // Match the animation duration
//             } else {
//                 // Play slide-down animation when showing
//                 navLinks.classList.add('active');
//                 navLinks.style.animation = 'slideDown 0.5s ease forwards';
//             }
    
//             hamburger.classList.toggle('active'); // Fancy hamburger animation
//         });
//     });
// }

// init().catch(console.error);

