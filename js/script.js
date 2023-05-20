'use strict'

function titleClickHandler (event) {
  event.preventDefault()
  const clickedElement = this

  console.log('Link was clicked!')
  console.log(event)

  // -----------------------------------------------------Remove class 'active' from all article links-----

  const activeLinks = document.querySelectorAll('.titles a.active')

  for (const activeLink of activeLinks) {
    activeLink.classList.remove('active')
  }

  // -----------------------------------------------------------Add class 'active' to the clicked link-----

  this.classList.add('active')
  console.log('clickedElement:', clickedElement)

  // ----------------------------------------------------------Remove class 'active' from all articles-----

  const activeArticles = document.querySelectorAll('.posts .active')

  for (const activeArticle of activeArticles) {
    activeArticle.classList.remove('active')
  }

  // -------------------------------------------------------Get 'href' attribute from the clicked link-----

  const articleSelector = this.getAttribute('href')

  // --------------------------Find the correct article using the selector (value of 'href' attribute)-----

  const targetArticle = document.querySelector(articleSelector)

  // --------------------------------------------------------Add class 'active' to the correct article-----

  targetArticle.classList.add('active')
}


//  >>> LIST GENERATION FUNCTION <<<

const optArticleSelector = '.post'
const optTitleSelector = '.post-title'
const optTitleListSelector = '.titles'

function generateTitleLinks(customSelector = '') {

  /* Remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector)
  titleList.innerHTML = ''

  /* Find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = ''

  for (const article of articles) {
    
    /* get the article id */
    const articleId = article.getAttribute('id')

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector)

    /* get the title from the title element */
    const titleText = articleTitle.innerHTML

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + titleText + '</span></a></li>'

    titleList.insertAdjacentHTML('beforeend', linkHTML)

    /* insert link into html variable */

    html = html + linkHTML
  }

  titleList.innerHTML = html

  const links = document.querySelectorAll('.titles a')
  console.log(links)

  for (const link of links) {
    link.addEventListener('click', titleClickHandler)
  }
}

generateTitleLinks()


//  >>> TAG GENERATION FUNCTION <<<

const optArticleTagsSelector = '.post-tags .list'

function generateTags(){

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
  
    /* START LOOP: for every article: */
    for (const article of articles) {
  
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
  
      /* make html variable with empty string */
      let html = '';
  
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
  
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
  
        /* add generated code to html variable */
        html = html + linkHTML;
        
      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

    /* END LOOP: for every article: */
    }
}
  
  generateTags();


  //  >>> TAG CLICK HANDLER <<<

  function tagClickHandler(event){

    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('.tags a.active');
  
    /* START LOOP: for each active tag link */
    for (const activeTagLink of activeTagLinks) {
  
      /* remove class active */
      activeTagLink.classList.remove('active');
  
    /* END LOOP: for each active tag link */
    }
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll(`a[href="${href}"]`);
  
    /* START LOOP: for each found tag link */
    for (const tagLink of tagLinks) {

      /* add class active */
      tagLink.classList.add('active');
  
    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

   
  function addClickListenersToTags() {
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('.tags a');
  
    /* START LOOP: for each link */
    for (const tagLink of tagLinks) {

      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
    }
    /* END LOOP: for each link */
  }
  
  addClickListenersToTags();
