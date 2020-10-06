import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacija

    // logika
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    // reikiamo elemento paieska realiam HTML'e
    const feedDOM = document.querySelector('main');

    // perrasome reikiamo HTML elemento turini
    feedDOM.innerHTML = HTML;

    const allSeeMoreDOM = document.querySelectorAll('.see-more');
    console.log(allSeeMoreDOM);


    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];
        seeMore.addEventListener('click', function(){
            // nukeliaujame ir usirandame artimiausia tevini .content,
            const contentDOM = seeMore.closest('.content');
            // tam elementui uzdeti klase show
            contentDOM.classList.add('show');
        });
    }
    
}

export default renderPosts;