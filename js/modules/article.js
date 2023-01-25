import { images } from "./images.js";

export default function article() {
	let clickedArticle = getClickedArticleLocalStorage();

	const articleCreatorDesktop = document.querySelector('.main-container__small-head-text');
	const articleTitleDesktop = document.querySelector('.main-container__large-head-text');
	const articleImageDesktop = document.querySelector('.main-container__image-1');

	const articleCreatorMobile = document.querySelector('.mobile-container__small-head-text');
	const articleTitleMobile = document.querySelector('.mobile-container__large-head-text');
	const articleImageMobile = document.querySelector('.mobile-container__image-1');

	if(articleCreatorDesktop && articleTitleDesktop && articleImageDesktop &&
		articleCreatorMobile && articleTitleMobile && articleImageMobile){
		renderHTML();
	}


	function renderHTML() {
		if(window.innerWidth > 576){
			renderDesktop();
		}else {
			renderMobile();
		}
	}

	function getClickedArticleLocalStorage() {
		return localStorage.getItem('clickedIndex');
	}

	function renderDesktop() {
		articleCreatorDesktop.innerText = images[clickedArticle].creator;
		articleTitleDesktop.innerText = images[clickedArticle].title;
		articleImageDesktop.src = images[clickedArticle].primaryImage;
	}

	function renderMobile() {
		articleCreatorMobile.innerText = images[clickedArticle].creator;
		articleTitleMobile.innerText = images[clickedArticle].title;
		articleImageMobile.src = images[clickedArticle].primaryImage;
	}
}