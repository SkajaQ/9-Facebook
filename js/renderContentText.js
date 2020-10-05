

function renderContentText(text) {
    const shortTextLength = 60;
    const normalTextLength = 300;
    const largeTextLength = 10000;
    const textLength = text.length; 


    if (textLength <= shortTextLength) {
        return `<p class="big-font">${text}</p>`;
    } else if (textLength <= normalTextLength) {
        return `<p>${text}</p>`;
    } else if (textLength <= largeTextLength) {
        let shorterText = '';
        for (let i=0; i<normalTextLength; i++) {
            shorterText += text[i];
        }
        return `<p>${shorterText}... <span class="see-more">See more</span></p>`;
    } else {
        console.warn(`ERROR: Virsyta maksimali ${largeTextLength} leistina teksto riba`)
        return '';
    }
}


export default renderContentText;