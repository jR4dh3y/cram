// Get all the item title links and their descriptions
const itemTitles = document.querySelectorAll('.item-title');
const itemDescriptions = document.querySelectorAll('.item-description');

// Get the filter and sort select elements
const filterSelect = document.getElementById('filter-select');
const sortSelect = document.getElementById('sort-select');

// Add event listeners to filter and sort the items
filterSelect.addEventListener('change', filterItems);
sortSelect.addEventListener('change', sortItems);

// Function to filter items by category
function filterItems() {
    const selectedCategory = filterSelect.value;

    itemTitles.forEach((title, index) => {
        const category = title.closest('.category').querySelector('h2').textContent;
        const item = title.closest('.item');

        if (selectedCategory === 'All' || selectedCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to sort items by price
function sortItems() {
    const selectedSort = sortSelect.value;

    const itemsArray = Array.from(document.querySelectorAll('.item'));
    const sortedItems = itemsArray.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p:last-child').textContent.replace('Price: $', ''));
        const priceB = parseFloat(b.querySelector('p:last-child').textContent.replace('Price: $', ''));

        if (selectedSort === 'LowToHigh') {
            return priceA - priceB;
        } else if (selectedSort === 'HighToLow') {
            return priceB - priceA;
        }
    });

    const menu = document.querySelector('.menu');
    menu.innerHTML = '';

    sortedItems.forEach((item) => {
        menu.appendChild(item);
    });
}

// Initially, filter items by 'All' categories and sort by 'LowToHigh' price
filterItems();
sortItems();
