import renderSinglePost from "./renderSinglePost.js";

function renderPosts(data) {
//  validacija

// logika
    let HTML = '';
    
    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        HTML += renderSinglePost(post);

    }    
    const feedDOM = document.querySelector('main');

    console.log(feedDOM);

    feedDOM.innerHTML = HTML;
}


export default renderPosts;