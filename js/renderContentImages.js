function renderContentImages(photoArray) {
    if (!photoArray) {
        return '';
    }

    const maxGallerySize = 4;
    
    let photosHTML = '';
    for (let i=0; i < photoArray.length; i++) {
        if (i >= maxGallerySize){
            break;
        }
        photosHTML += `<img src="./img/posts/${photoArray[i]}" alt="User post gallery picture"`
    }

    let moreHTML = '';
    if (photoArray.length > maxGallerySize) {
        moreHTML = `<div class="more-photos">+${photoArray.length - maxGallerySize}</div>`;
    }

    return `<div class="gallery gallery-${photoArray.length > maxGallerySize ? maxGallerySize : photoArray.length}">
                ${photosHTML}
                ${moreHTML}
            </div>`;
}


export default renderContentImages; 
