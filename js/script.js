'use strict';

function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;

    console.log('Kliknięto link!');
    console.log(event);

    //-----------------------------------------------------Usuń klasę 'active' ze wszystkich linków do artykułów-----

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    //-----------------------------------------------------------Dodaj klasę 'active' do klikniętego linka-----

    this.classList.add('active');
    console.log('clickedElement:', clickedElement);

    //----------------------------------------------------------Usuń klasę 'active' ze wszystkich artykułów-----

    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    //-------------------------------------------------------Pobierz atrybut 'href' z klikniętego linka-----

    const articleSelector = this.getAttribute('href');

    //--------------------------Znajdź właściwy artykuł, używając selektora (wartość atrybutu 'href')-----

    const targetArticle = document.querySelector(articleSelector);

    //--------------------------------------------------------Dodaj klasę 'active' do właściwego artykułu-----

    targetArticle.classList.add('active');
}


//___FUNKCJA GENERUJĄCA LISTĘ_______________________________________________________________________________

const 
  optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTags = '.post-tags',
  optArticleAuthor= '.post-author';

function generateTitleLinks(){
  
    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* ... */



    /* find all the articles and save them to variable: articles */
    
    let articles = document.querySelectorAll(optArticleSelector);


    /* ... */

    let html = '';

    for(let article of articles){
    
        /* get the article id */
    
        let articleId = article.getAttribute('id');

        /* zmienne tag i author należy dodać? */

        let tag = document.querySelectorAll(optArticleTags);         
        let author = document.querySelectorAll(optArticleAuthor);
    
        /* find the title element */
    
        const articleTitle = article.querySelector(optTitleSelector);
        
        /* ... */

    
        
        /* get the title from the title element */
    
        const titleText = articleTitle.innerHTML;
        
        /* ... */

    
        
        /* create HTML of the link */
    
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + titleText + '</span></a></li>';
        
        /* ... */

        titleList.insertAdjacentHTML('beforeend', linkHTML);
        
        /* insert link into html variable */
    
        html = html + linkHTML;
  }

  titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}