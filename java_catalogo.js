// Function to handle viewing the selected book
function viewBook(book) {
    // Redirect to the book viewer page with the selected book's filename
    window.location.href = `vista_libro.html?book=${book}`;
}

// Ensure the page reacts to the file upload process
function handleFileUpload() {
    const fileInput = document.getElementById('file');
    const submitButton = document.querySelector('form button');

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            submitButton.disabled = false;  // Enable the button if a file is selected
        } else {
            submitButton.disabled = true;   // Disable the button if no file is selected
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', handleFileUpload);
