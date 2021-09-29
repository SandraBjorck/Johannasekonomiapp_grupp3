// Variables
let isSigningUp = true;

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
form.addEventListener('submit', handleFormSubmit);

// Open and populate popup form
function openModal(e) {
	if (e.target.id === 'signup-modal') {
		modal.style.display = 'block';
		document.body.classList.add('noscroll');
		isSigningUp = true;
	} else if (e.target.id === 'login-modal') {
		modal.style.display = 'block';
		fullNameGroup.remove();
		emailGroup.remove();
		document.body.classList.add('noscroll');
		isSigningUp = false;
	}
}

// Function to close modal
function closeModal() {
	document.body.classList.remove('noscroll');
	form.prepend(emailGroup);
	form.prepend(fullNameGroup);


	modal.style.display = 'none';
}

// Function to handle form submit
function handleFormSubmit(e) {
	e.preventDefault();

	if (isSigningUp) {
		// SignUp Logic
		showConfirmation();
		setTimeout(() => {
			location.href = '/membersLanding.html';
		}, 2000);
	} else {
		// Login logic
		location.href = '/membersLanding.html';
	}
}

// Function to show confirmation message
function showConfirmation() {
	document.querySelector('.registrerings-container').remove();
	document.querySelector('.message').classList.add('showMessage');
	document.querySelector('.check').classList.add('scaledown');
	document
		.querySelector('.loader-progress')
		.classList.add('start-loading');
}

