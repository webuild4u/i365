//Validate whether user is logged in or not
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}

// LOGOUT
export const logout = () => {
    localStorage.removeItem('auth');
}