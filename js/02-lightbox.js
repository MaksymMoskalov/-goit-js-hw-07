import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
const renderedGalleryItems = createGalleryItem(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", renderedGalleryItems);
galleryListEl.addEventListener("click", onGalleryItemClick);

function createGalleryItem(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const currentClick = evt.target;
  if (!currentClick.classList.contains("gallery__image")) {
    return;
  }
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
