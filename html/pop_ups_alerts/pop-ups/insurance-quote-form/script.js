function showToast(message) {
    const toastContainer = document.getElementById("toast-container");
    const toastMessage = document.getElementById("toast-message");

    toastMessage.textContent = message;
    toastContainer.classList.add("show");

    setTimeout(() => {
        toastContainer.classList.remove("show");
    }, 3000); // Hide after 3 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    const quoteForm = document.getElementById("quote-form");
    const confirmationModal = document.getElementById("confirmation-modal");
    const confirmSubmitButton = document.getElementById("confirm-submit");
    const cancelSubmitButton = document.getElementById("cancel-submit");

    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Display the confirmation modal
        confirmationModal.style.display = "block";
    });

    // Handle confirm button click
    confirmSubmitButton.addEventListener("click", () => {
        // Process the form submission here (e.g., send data to a server)
        console.log("Form submitted!"); // Replace with actual submission logic
        confirmationModal.style.display = "none"; // Hide the modal after submission
        showToast("Form submitted successfully!"); // Show toast message
    });

    // Handle cancel button click
    cancelSubmitButton.addEventListener("click", () => {
        confirmationModal.style.display = "none"; // Hide the modal without submitting
    });
});