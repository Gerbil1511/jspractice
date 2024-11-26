
// Function to add a close button to each note in the list
function addCloseButton(note) {
    let span = document.createElement("span");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7"));
    note.appendChild(span);
    // Add event listener to the close button to remove a note in the list
    span.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

// Function to create a new note to add to the list
function newNote() {
    // Get the input field value and create an alert if add note is pressed without any text value
    let myText = document.getElementById("myNote").value;
    if (myText === '') {
        alert("You must type something!");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");
    let txt = document.createTextNode(myText);
    li.appendChild(txt);

    // Run the function to add a close button to each note in the list
    addCloseButton(li);

    // Append the new note item to the list
    document.getElementById("noteList").appendChild(li);

    // Clear the input field
    document.getElementById("myNote").value = "";
}

// Add event listener for Enter key press
document.getElementById("myNote").addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        newNote();
    }
});

// Add event listener for button click
document.getElementById("addBtn").addEventListener('click', newNote);

// Add event listeners to existing close buttons
const existingNotes = document.querySelectorAll('#noteList li');
existingNotes.forEach(note => {
    addCloseButton(note);
});