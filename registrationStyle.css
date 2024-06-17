document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const registerBtn = document.getElementById('registerBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform form validation if needed
        let isValid = validateForm(); // Assume validateForm is a function that returns true if validation passes

        if (isValid) {
            // Show alert
            alert('Successfully registered');

            // Redirect to login page
            window.location.href = '../Login/login.html';
        } else {
            // Handle validation errors or other logic
            alert('Please fill out all required fields and agree to terms');
        }
    });

    function validateForm() {
        // Example validation logic (you can expand this as needed)
        const fullname = document.getElementById('Fullname').value.trim();
        const birthday = document.getElementById('Birthday').value.trim();
        const address = document.getElementById('Address').value.trim();
        const email = document.getElementById('Email').value.trim();
        const password = document.getElementById('Password').value.trim();
        const termsAgreed = document.getElementById('termsCheckbox').checked;

        if (fullname === '' || birthday === '' || address === '' || email === '' || password === '' || !termsAgreed) {
            return false; // Form is not valid
        }

        return true; // Form is valid
    }
});
