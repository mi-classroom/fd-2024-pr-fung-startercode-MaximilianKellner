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

function addImageClickEvent() {
    const images = document.querySelectorAll('.image-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    console.log(modal);

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        console.log('close');
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        console.log('modal click');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

loadImagesFromJson();