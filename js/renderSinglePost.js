import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';

function renderSinglePost(data) {
    console.log(data);

    return `${renderHeader(data.author, data.postTimestamp).js}
            ${renderContent(data.content).js}
            ${renderFooter.js}`;
        
}

export default renderSinglePost;