// Variable to store the interval ID for scrolling
let scrollInterval = null;

// Function to start auto-scrolling
function startScrolling() {
    if (!scrollInterval) {
        scrollInterval = setInterval(function() {
            window.scrollBy(0, 1); // Scroll by 1px vertically
        }, 10);
    }
}

// Add event listener to start scrolling when the page is clicked
window.addEventListener('click', startScrolling);
