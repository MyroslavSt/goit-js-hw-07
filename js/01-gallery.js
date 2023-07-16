import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
	  <li class="gallery__item">
	  <a class="gallery__link" href="${original}">
	  <img class="gallery__image"
	  src="${preview}"
	  data-source="${original}"
	  alt="${description}" width="330" heigth="330"/>
	  </a>
	  </li>`
    )
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", createGalMarkup(galleryItems));

galleryContainer.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === galleryContainer) {
    return;
  }
  const imgAlt = evt.target.alt;
  const target = evt.target;
  const imgSource = target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imgSource}"
	alt="${imgAlt}"
	 width="1400" height="900">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );
  instance.show();
  function onEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryContainer);
