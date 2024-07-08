import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
   </li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", markup);

ulEl.addEventListener("click", onModal);

function onModal(evt) {
  evt.preventDefault();

  var lightbox = new SimpleLightbox(".gallery a", {
    caption: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}

console.log(SimpleLightbox);
