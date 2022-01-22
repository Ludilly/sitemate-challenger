import creatingModalButton from '../Button/index.js';


const btn = document.getElementById('modal_opener');
const modal = document.querySelector('.modal');


function attachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
  modalElm.querySelector('.confirm').addEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').addEventListener('click', toggleModal);

}

function detachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
  modalElm.querySelector('.confirm').removeEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {

  const currentState = modal.style.display;
  
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    detachModalListeners(modal);  
  }
}

btn.addEventListener('click', toggleModal);

window.onload = function onload() {
  creatingModalButton('You clicked "Cancel"', 'You clicked "Confirm"');
}
