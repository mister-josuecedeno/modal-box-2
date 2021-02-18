// Define elements
const modal = document.getElementById('modal');
const btnSkip = document.getElementById('modal-skip');

// Window load
window.onload = (event) => {
  setTimeout(() => modal.classList.add('modal-visible'), 2000);
};

btnSkip.addEventListener('click', () =>
  modal.classList.remove('modal-visible')
);
