import renderContentText from './renderContentText.js';
import renderContentImages from './renderContentImages.js';


function renderContent(data) {
    return `<div>
                ${renderContentText(data.text)} 
                ${renderContentImages(data.photos)}
            </div>`;
}


export default renderContent;