// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 50 },
        { name: "Bruschetta", price: 40 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 150 },
        { name: "Spaghetti Carbonara", price: 180 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 50 },
        { name: "Cheesecake", price: 60 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu")
    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryHead = document.createElement("h3")
        // Set the text content of the category element to the category name
        categoryHead.textContent = category
        // Append the category element to the menu container
        menuContainer.appendChild(categoryHead)
        // Create an element to represent a list of items
        const itemList = document.createElement("ul")
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList)
        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement("li")
            // Set the text content of the list item element to the item name
            listItem.textContent = `${item.name}`;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(item));
            // Append the list item to the list of items
            itemList.appendChild(listItem)
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    // Create a list item for the order
    const orderItem = document.createElement("li");
    // Set the text content of the list item to the item name
    orderItem.textContent = item.name;
    // Append the list item to the order items list
    orderList.appendChild(orderItem)
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotal.textContent);
    const totalPrice = currentTotal + item.price;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);
