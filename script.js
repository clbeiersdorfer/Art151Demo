// Auto-scroll the page infinitely
window.onload = function() {
    // Set an interval to scroll down the page every 10 milliseconds
    setInterval(function() {
        window.scrollBy(0, 1); // Scroll by 1px vertically
    }, 10);
};
