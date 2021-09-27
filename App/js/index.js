// Variables
const modal = document.getElementById('reggaModal');
const signupBtn = document.getElementById('signup-modal');
const loginBtn = document.getElementById('login-modal');
const closeWindow = document.querySelector('.close-window');

// Populate form
const fullNameGroup = document.querySelector('#fullname').parentElement;
const emailGroup = document.querySelector('#email').parentElement;
const form = document.querySelector('.form');

//Eventlisteners
signupBtn.addEventListener('click', openModal);
loginBtn.addEventListener('click', openModal);
closeWindow.addEventListener('click', closeModal);

// Open and populate popup form
function openModal(e) {
    if (e.target.id === 'signup-modal') {
        modal.style.display = 'block';
        document.body.classList.add('noscroll');
    } else if (e.target.id === 'login-modal') {
        modal.style.display = 'block';
        fullNameGroup.remove();
        emailGroup.remove();
        document.body.classList.add('noscroll');
    }
}

//Function to close modal
function closeModal() {
    document.body.classList.remove('noscroll')
    form.prepend(fullNameGroup);
    form.prepend(emailGroup);

    modal.style.display = 'none';
}


