
export default function Rederect() {
	const clickableImages = document.querySelectorAll('.main-container__image-link');

	clickableImages.forEach(element => {
		element.addEventListener('click', handleImageClick);
	})
	
	function handleImageClick(){
		console.log('click')
		navigateToPage();
	}
	
	function navigateToPage() {
		window.location.href='./html/landingpages/article.html'
	}
}