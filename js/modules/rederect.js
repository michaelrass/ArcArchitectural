
export default function Rederect() {
	const clickableImages = document.querySelectorAll('.main-container__image-link');
	const clickableImagesMobile = document.querySelectorAll('.mobile-container__images');

	clickableImages.forEach(element => {
		element.addEventListener('click', handleImageClick);
	})

	clickableImagesMobile.forEach(element => {
		element.addEventListener('click', handleImageClick)
	})
	
	function handleImageClick(){
		console.log('click')
		navigateToPage();
	}
	
	function navigateToPage() {
		window.location.href='./html/landingpages/article.html'
	}
}