document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (Replace with server-side validation for production)
    if (username === 'admin' && password === 'password123') {
        // Redirect or show success message
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        // Optionally redirect to another page
        // window.location.href = 'dashboard.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
