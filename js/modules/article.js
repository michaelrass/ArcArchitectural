import { images } from "./images.js";

export default function article() {
	let clickedArticle = getClickedArticleLocalStorage();

	const articleCreator = document.querySelector('.main-container__small-head-text');
	const articleTitle = document.querySelector('.main-container__large-head-text');
	const articleImage = document.querySelector('.main-container__image-1');

	console.log(clickedArticle)

	function getClickedArticleLocalStorage() {
		return localStorage.getItem('clickedIndex');
	}
}