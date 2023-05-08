'use strict';

function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this

    console.log('Link was clicked!');
    console.log(event);

    //-----------------------------------------------------Remove class 'active' from all article links-----

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }


    //-----------------------------------------------------------Add class 'active' to the clicked link-----

    this.classList.add('active');
    console.log('clickedElement:', clickedElement);


    //----------------------------------------------------------Remove class 'active' from all articles-----

    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }


    //-------------------------------------------------------Get 'href' attribute from the clicked link-----

    const articleSelector = this.getAttribute('href');


    //--------------------------Find the correct article using the selector (value of 'href' attribute)-----

    const targetArticle = document.querySelector(articleSelector);


    //--------------------------------------------------------Add class 'active' to the correct article-----

    targetArticle.classList.add('active');
}


//___LIST GENERATION FUNCTION_______________________________________________________________________________


const
    optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* find all the articles and save them to variable: articles */

    let articles = document.querySelectorAll(optArticleSelector);


    let html = '';

    for (let article of articles) {

        /* get the article id */

        const articleId = article.getAttribute('id');

        /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector);

        /* get the title from the title element */

        const titleText = articleTitle.innerHTML;

        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + titleText + '</span></a></li>';

        titleList.insertAdjacentHTML('beforeend', linkHTML);

        /* insert link into html variable */

        html = html + linkHTML;
    }


    titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log(links);

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}