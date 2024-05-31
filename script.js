document.addEventListener('DOMContentLoaded', () => {
    // Button: Add Definition
    const addDefinitionButton = document.querySelector('.add');
    addDefinitionButton.addEventListener('click', () => {
        addDefinitionButton.style.display = 'none';
    });

    // Button: Login
    const loginButton = document.querySelector('.Log');
    loginButton.addEventListener('click', () => {
        if (loginButton.textContent === 'Login') {
            loginButton.textContent = 'Logout';
        } else {
            loginButton.textContent = 'Login';
        }
    });

    // Buttons: Likes
    const likeButtons = document.querySelectorAll('.likes');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Ninja was liked');
        });
    });
});
