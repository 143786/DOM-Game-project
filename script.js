'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  /* if (e.key === 'Escape')
    if (!modal.classList.contains('hidden')) { 
      // ! this means not.
      closeModal();
    }
    */

  // we can write it also like this : it will be  a litte short :
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // ! this means not.
    closeModal();
  }
});
