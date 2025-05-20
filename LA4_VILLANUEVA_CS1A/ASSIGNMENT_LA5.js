// List of customer names
let peopleInLine = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
const SIZE = 5; // Number of available table slots

// Create a hash table with 5 empty spots
let table = new Array(SIZE).fill(null);

// A basic hash function to decide where to place a name
function getPosition(name) {
    let total = 0;
    for (let letter of name) {
        total += letter.charCodeAt(0); // Get numeric value of each letter
    }
    return total % SIZE; // Return a number from 0 to 4
}

// Place each person into the hash table
for (let person of peopleInLine) {
    let spot = getPosition(person);

    // If the spot is taken, move to the next one (linear probing)
    while (table[spot] !== null) {
        spot = (spot + 1) % SIZE;
    }

    table[spot] = person;
}

// Show the current table to the user
function displayTable() {
    let text = "";
    for (let i = 0; i < SIZE; i++) {
        let content = table[i] !== null ? table[i] : "[empty]";
        text += "Slot " + (i + 1) + ": " + content + "\n";
    }
    alert(text);
}

// Keep running until all customers are served
while (table.some(item => item !== null)) {
    displayTable();

    console.log("Table status: " + table.map(item => item || "[empty]").join(", "));

    let input = prompt("Enter the slot number to assist (1 to 5):");
    let chosen = parseInt(input) - 1;

    // Check if the input is within range and the slot isn't already empty
    if (chosen >= 0 && chosen < SIZE && table[chosen] !== null) {
        alert("Serving: " + table[chosen]);
        table[chosen] = null; // Mark slot as empty
    } else {
        alert("That slot is either empty or doesn't exist.");
    }
}

alert("Great job! Everyone has been helped.");
