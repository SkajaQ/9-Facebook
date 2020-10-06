function renderContentGallery(photoArray) {
    // validacijos
    // jei nera duotas nuotrauku sarasas
    if (!photoArray) {
        return '';
    }

    // logika
    const maxGallerySize = 4;
    const printablePhotosCount = photoArray.length > maxGallerySize ? maxGallerySize : photoArray.length;

    // generuojame tik reikiama kieki nuotrauku
    let extraHTML = '';
    if (photoArray.length > maxGallerySize) {
        extraHTML = `data-extra="${photoArray.length - maxGallerySize}"`;
        // extraHTML = `<div class="black-hover">${photoArray.length - maxGallerySize}</div>`;
    }

    let photosHTML = '';
    for (let i = 0; i < printablePhotosCount; i++) {
        if (i < printablePhotosCount - 1) {
            photosHTML += `<div class="img">
            <img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture">
                            </div>`;
        } else {
            photosHTML += `<div class="img" ${extraHTML}>
                                <img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture">
                            </div>`;
        }
    }

    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
            </div>`;
}

export default renderContentGallery;
