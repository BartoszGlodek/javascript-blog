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


const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
