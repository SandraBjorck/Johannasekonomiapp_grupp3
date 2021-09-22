// Variables
const modal = document.getElementById('reggaModal');
const signupBtn = document.getElementById('signup-modal')
const modalContent = document.querySelector('.reggaModal-content')

//Eventlisteners
signupBtn.addEventListener('click', openModal);
window.addEventListener('click', closeModal);


//Function to open modal
function openModal() {
    modal.style.display = 'block';
    document.body.classList.add('noscroll');
}

//Function to close modal
function closeModal(e) {
    if (e.target === modalContent) {
        document.body.classList.remove('noscroll')
        modal.style.display = 'none';
    }
}

