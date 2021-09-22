// Variables
const modal = document.getElementById('reggaModal');
const signupBtn = document.getElementById('signup-modal')

//Eventlisteners
signupBtn.addEventListener('click', openModal);
window.addEventListener('click', clickOutside);


//Function to open modal
function openModal() {
    modal.style.display = 'block';
}

//Function to close modal
function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}