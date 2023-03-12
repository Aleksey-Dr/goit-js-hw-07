import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Point 1. Creating and render the markup on base the array values "galleryItems"
const gallery = document.querySelector('.gallery');

// console.log(gallery);
createGalleryItems();

function createGalleryItems() {
    const items = [];

    for (let i = 0; i < galleryItems.length; i++) {
        const item = document.createElement('div');
        item.classList.add('gallery__item');

        const link = document.createElement('a');
        link.href = galleryItems[i].original;
        // link.rel = "noreferrer noopener";
        link.classList.add('gallery__link');
        item.append(link);

        const image = document.createElement('img');
        link.append(image);
        image.src = galleryItems[i].preview;
        image.alt = galleryItems[i].description;
        image.setAttribute('data-source', galleryItems[i].original);
        // console.log(image.dataset.source);
        image.classList.add('gallery__image');

        items.push(item);
    }

    gallery.append(...items);
    // console.log(items);
}

// Point 2.Event delegation to div.gallery and get url a big image

gallery.addEventListener('click', getBigImage);

function getBigImage(event) {
    const selectedImage = event.target.dataset.source;
    // console.log(selectedImage);
    // console.log(event.currentTarget);
}