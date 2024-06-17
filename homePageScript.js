// script.js

document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.explore-button');
    const aboutUsSection = document.querySelector('.about-us');

    exploreButton.addEventListener('click', function() {
        aboutUsSection.classList.toggle('active');
    });
});
