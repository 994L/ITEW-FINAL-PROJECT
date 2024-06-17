document.addEventListener('DOMContentLoaded', () => {
    const storyParagraph = document.getElementById('story');
    const toggleStoryBtn = document.getElementById('toggleStoryBtn');

    let isStoryVisible = true;

    toggleStoryBtn.addEventListener('click', () => {
        isStoryVisible = !isStoryVisible;
        storyParagraph.style.display = isStoryVisible ? 'block' : 'none';
        toggleStoryBtn.textContent = isStoryVisible ? 'Read Less' : 'Read More';
    });
});

// Smooth scroll for the "Explore" button
document.getElementById('exploreBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#more-info').scrollIntoView({
        behavior: 'smooth'
    });
});

// JavaScript to handle the "Read More" button toggle
document.getElementById('toggleStoryBtn').addEventListener('click', function() {
    const storyParagraph = document.getElementById('story');
    if (storyParagraph.style.display === 'none' || storyParagraph.style.display === '') {
        storyParagraph.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        storyParagraph.style.display = 'none';
        this.textContent = 'Read More';
    }
});
