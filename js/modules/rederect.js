
export default function Rederect() {
	const clickableImages = document.querySelectorAll('.main-container__image-link');
	const clickableImagesMobile = document.querySelectorAll('.mobile-container__images');

	const clickableLogoDesktop = document.querySelector('.aside-container__logo-button');
	const clickableLogoMobile = document.querySelector('.mobile-container__logo-container');

	clickableLogoDesktop.addEventListener('click', handleLogoButtonClick);
	clickableLogoMobile.addEventListener('click', handleLogoButtonClick);

	clickableImages.forEach(element => {
		element.addEventListener('click', handleImageClick);
	})

	clickableImagesMobile.forEach(element => {
		element.addEventListener('click', handleImageClick)
	})
	
	function handleImageClick(event){
		setLocalStorageClickedImage(event);
		navigateToPage();
	}
	
	function handleLogoButtonClick() {
		navigateToHome();
	}

	function navigateToHome() {
		window.location.href='/';
	}

	function setLocalStorageClickedImage(event) {
		let clickedImage = event.currentTarget.dataset.index;
		localStorage.setItem('clickedIndex', clickedImage);
	}

	function navigateToPage() {
		window.location.href='/html/landingpages/article.html';
	}
}