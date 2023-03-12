import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Point 1
// crutches
const gallery = document.querySelector('.gallery');
gallery.remove();
const paragraph = document.querySelector('p');
const galleryNew = document.createElement('div');
paragraph.after(galleryNew);
galleryNew.classList.add('gallery');

createGalleryItems();

function createGalleryItems() {
    const items = [];

    for (let i = 0; i < galleryItems.length; i++) {

        const item = document.createElement('a');
        item.href = galleryItems[i].original;
        item.classList.add('gallery__item');

        const image = document.createElement('img');
        item.append(image);
        image.src = galleryItems[i].preview;
        image.alt = galleryItems[i].description;
        image.classList.add('gallery__image');

        items.push(item);
    }

    galleryNew.append(...items);
}