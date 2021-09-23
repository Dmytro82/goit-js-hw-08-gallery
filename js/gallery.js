import galleryItems from './app.js';
console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
};
// добавление в HTML
const renderGallery = function (galleryItems) {
  galleryItems.forEach(el => {
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
          />
  </a>
  </li>`,
    );
  });
};

renderGallery(galleryItems);
//
// отрытие модалки и подмена
refs.gallery.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.modal.classList.add('is-open');

  if (refs.modal.classList.contains('is-open')) {
    refs.modalImg.src = event.target.dataset.source;
    refs.modalImg.alt = event.target.alt;
  }
}
// закрытие модалки по х
refs.closeBtn.addEventListener('click', closeModal);

function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
}
