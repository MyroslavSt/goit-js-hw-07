import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
	  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"
	  width="1400" height="900"> />
   </a>
</li>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", createGalMarkup(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
