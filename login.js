// Login page script - wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const loginName = document.getElementById('loginName');
    
    if (!loginName) {
        console.error('Login name element not found');
        return;
    }

    // Add click handler to redirect to dashboard
    loginName.addEventListener('click', () => {
        // Add a smooth fade-out effect before redirecting
        loginName.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        loginName.style.transform = 'scale(1.2)';
        loginName.style.opacity = '0';
        
        // Redirect after animation
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });

    // Add hover effect
    loginName.addEventListener('mouseenter', () => {
        loginName.style.cursor = 'pointer';
    });

    // Add keyboard support (Enter key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            loginName.click();
        }
    });
});
