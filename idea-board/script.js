// Get references to HTML elements
const userNameSelect = document.getElementById("user-name");
const ideaInputField = document.getElementById("idea-input");
const addIdeaBtn = document.getElementById("add-idea-btn");
const clearInputBtn = document.getElementById("clear-input-btn");
const ideaList = document.getElementById("idea-list");
const ideaCountDisplay = document.getElementById("idea-count");

// Track the current number of ideas
let currentIdeaCount = 0;

// Initial ideas to display when the page loads
const initialIdeas = [
    { text: "Build a study planner", user: "Nimal" },
    { text: "Start a podcast", user: "Sara" },
    { text: "Organize a coding workshop", user: "Alex" }
];

/**
 * Function to update the idea counter display with a small animation.
 */
function updateCounter() {
    ideaCountDisplay.textContent = currentIdeaCount;
    
    // Add a quick "pop" animation by temporarily changing the scale
    ideaCountDisplay.style.transform = "scale(1.3)";
    setTimeout(() => {
        ideaCountDisplay.style.transform = "scale(1)";
    }, 200);
}

/**
 * Function to add an idea to the list.
 * The animation itself is handled by CSS (slideInFade).
 */
function addIdeaToList(text, user) {
    const li = document.createElement("li");
    li.textContent = `${text} – suggested by ${user}`;
    ideaList.appendChild(li);

    // Increment the counter and update the UI
    currentIdeaCount++;
    updateCounter();
}

// Display initial ideas on page load
initialIdeas.forEach(idea => {
    addIdeaToList(idea.text, idea.user);
});

// Event listener for the "Add Idea" button
addIdeaBtn.addEventListener("click", () => {
    const ideaText = ideaInputField.value.trim();
    const userName = userNameSelect.value;

    if (ideaText !== "") {
        addIdeaToList(ideaText, userName);
        ideaInputField.value = "";
    } else {
        alert("Please enter an idea!");
    }
});

// Event listener for the "Clear" button
clearInputBtn.addEventListener("click", () => {
    ideaInputField.value = "";
    ideaInputField.focus();
});
