document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded and DOM fully parsed'); // Debug: Confirm script runs

    // Force video autoplay for all pages
    const videos = [
        document.getElementById('header-video'),
        document.getElementById('login-video'),
        document.getElementById('signup-video')
    ];
    videos.forEach(video => {
        if (video) {
            video.play().catch(err => console.log('Autoplay failed:', err));
        }
    });

    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log('Login form found'); // Debug: Confirm form is detected
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login form submitted'); // Debug: Confirm submit event
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (email && password) {
                console.log('Email and password provided, redirecting to dashboard.html'); // Debug: Confirm redirect logic
                window.location.href = 'dashboard.html'; // Primary redirect method
                // Fallback redirect method
                setTimeout(() => {
                    if (window.location.href !== window.location.origin + '/dashboard.html') {
                        console.log('Fallback redirect triggered');
                        window.location.replace('dashboard.html');
                    }
                }, 500);
            } else {
                alert('Please fill in all fields.');
                console.log('Email or password missing'); // Debug: Confirm validation failure
            }
        });
    } else {
        console.log('Login form not found'); // Debug: If form is not detected
    }

    // Signup form submission (demo)
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            if (username && email && password) {
                alert('Registration successful! (This is a demo)');
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Close button functionality
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to landing page
        });
    });
});