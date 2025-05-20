// List of customers waiting in line
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the queue with numbers
function showQueue() {
    for (let i = 0; i < customers.length; i++) {
        alert(customers[i] + " is customer number " + (i + 1));
    }
}

// Continue as long as there are people in the queue
while (customers.length > 0) {
    showQueue(); // Display the current queue

    console.log("Current queue: " + customers.join(", ")); // Log queue in the console

    let input = prompt("Enter the number of the customer to assist:");
    let chosenIndex = parseInt(input) - 1; // Convert input to correct index

    // Check if the number entered is valid
    if (chosenIndex >= 0 && chosenIndex < customers.length) {
        alert("Now assisting: " + customers[chosenIndex]);
        customers.splice(chosenIndex, 1); // Remove the customer from the list
    } else {
        alert("Invalid number. Please try again.");
    }
}

alert("All customers have been assisted. Good job!");
