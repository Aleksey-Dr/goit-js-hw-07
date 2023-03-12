import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
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
        link.classList.add('gallery__link');
        item.append(link);

        const image = document.createElement('img');
        link.append(image);
        image.src = galleryItems[i].preview;
        image.alt = galleryItems[i].description;
        image.classList.add('gallery__image');

        items.push(item);
    }

    gallery.append(...items);
    console.log(items);
}