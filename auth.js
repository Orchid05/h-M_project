// Authentication Check - Shared across all pages
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // If not logged in and not on login page, redirect to login
    if (isLoggedIn !== 'true' && currentPage !== 'login.html') {
        window.location.href = 'login.html';
        return false;
    }
    
    // If logged in and on login page, redirect to home
    if (isLoggedIn === 'true' && currentPage === 'login.html') {
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Check authentication when page loads
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});

