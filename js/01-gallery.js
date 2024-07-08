import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", markup);

ulEl.addEventListener("click", onModal);

function onModal(evt) {
  evt.preventDefault();

  const img = evt.target.currentSrc;

  const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", keydownEscape);

  function keydownEscape(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", keydownEscape);
    }
  }
}
