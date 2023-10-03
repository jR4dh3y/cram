// Get all the item title links and their descriptions
const itemTitles = document.querySelectorAll('.item-title');
const itemDescriptions = document.querySelectorAll('.item-description');

// Add a click event listener to each item title
itemTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from navigating
        
        // Toggle the visibility of the corresponding item description with animation
        if (itemDescriptions[index].style.display === 'block') {
            itemDescriptions[index].style.display = 'none';
        } else {
            itemDescriptions[index].style.display = 'block';
        }
    });
});
