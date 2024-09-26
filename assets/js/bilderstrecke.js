async function loadImagesFromJson() {
    console.log('loadImagesFromJson');
    const response = await fetch('./works/n-pola/04-results/images/metadata.json');
    const metadata = await response.json();
    console.log(metadata);
    const imageCarousel = document.querySelector('[data-js-bildstrecke]');
    createImageItems(metadata, imageCarousel);
}

function createImageItems(images, container) {
    const imagePath = './works/n-pola/04-results/';
    container.innerHTML = images.map(image => `
        <li class="image-item">
            <img src="${imagePath}${image.src}" alt="${image.metadata.Description || 'Bild'}" title="${image.metadata.Title}">
        </li>
    `).join('');
}

loadImagesFromJson();