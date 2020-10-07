function renderContentText(data) {
    const { id, text, background } = data;

    const shortTextLength = 60;
    const normalTextLength = 300;
    const largeTextLength = 10000;
    const textLength = text.length;

    if (textLength <= shortTextLength) {
        return `<p class="big-font ${background ? 'background ' + background : ''}">${text}</p>`;

    } else if (textLength <= normalTextLength) {
        return `<p>${text}</p>`;

    } else if (textLength <= largeTextLength) {
        let shorterText = '';
        for (let i = 0; i < normalTextLength; i++) {
            shorterText += text[i];
        }
        return `<p>${shorterText}... <span class="see-more">See more</span></p>
                <p class="hidden">${text} <a href="#post_${id}" class="see-less">See less</a></p> `;
    } else {

        console.warn(`ERROR: virsyta maksimali (${largeTextLength}) leistina teksto riba.`);
        return '';
    }
}

export default renderContentText;

