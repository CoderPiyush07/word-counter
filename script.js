// Get DOM elements
const textInput = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const charCountElement = document.getElementById('charCount');

// Function to count words
function countWords(text) {
    if (!text.trim()) {
        return 0;
    }
    
    // Split by whitespace and filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Function to count characters
function countCharacters(text) {
    return text.length;
}

// Function to update counts
function updateCounts() {
    const text = textInput.value;
    const wordCount = countWords(text);
    const charCount = countCharacters(text);
    
    // Update the display with animation
    wordCountElement.textContent = wordCount;
    charCountElement.textContent = charCount;
    
    // Add a subtle animation effect
    wordCountElement.style.transform = 'scale(1.1)';
    charCountElement.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        wordCountElement.style.transform = 'scale(1)';
        charCountElement.style.transform = 'scale(1)';
    }, 100);
}

// Event listener for real-time updates
textInput.addEventListener('input', updateCounts);

// Event listener for paste events
textInput.addEventListener('paste', () => {
    // Use setTimeout to ensure the pasted content is processed
    setTimeout(updateCounts, 10);
});

// Initialize counts on page load
document.addEventListener('DOMContentLoaded', updateCounts);

// Add smooth transition for the scale animation
wordCountElement.style.transition = 'transform 0.1s ease';
charCountElement.style.transition = 'transform 0.1s ease';