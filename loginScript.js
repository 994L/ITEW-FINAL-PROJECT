document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', function() {
        const email = document.getElementById('Email_1').value;
        const password = document.getElementById('Password_1').value;
        
        // Example: Simulate successful login
        if (email === 'shemredserrano@gmail.com' && password === '12345') {
            alert('Successfully logged in');
            window.location.href = '../Home/homePage.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});
