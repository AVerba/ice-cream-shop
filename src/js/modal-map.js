(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open-map]'),
    closeModalBtn: document.querySelector('[data-modal-close-map]'),
    modal: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtn.forEach(e => {
    e.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden'), document.body.classList.toggle('overflow-y');
  }
})();
