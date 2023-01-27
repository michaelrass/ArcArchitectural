export default function subscribeBanner() {
	// querySelectors
	const mainContainer = document.querySelector('.main-container');
	const subscribeBanner = document.querySelector('.main-container__subscribe-banner');
	const subscribeBannerClose = document.querySelector('.main-container__subscribe-banner-close');
	const subscribeAsideItem = document.querySelector('.aside-container__subscribe');

	// Session Storage
	const bannerIsClosed = sessionStorage.getItem('subscribeBannerIsClosed');

	if (bannerIsClosed && subscribeBanner && subscribeBannerClose) {
		hideBanner();
		subscribeAsideToggle();
	}
	
	// Event Listeners
	if(subscribeBanner && subscribeBannerClose) {
		subscribeBannerClose.addEventListener('click', handleBannerCloseClick);
		subscribeBanner.addEventListener("animationend", handleBannerAnimation);
	}

	window.addEventListener('resize', setWidth);
	
	// Handlers
	function handleBannerCloseClick() {
		updateBannerOpacity();
		subscribeAsideToggle();
		sessionStorage.setItem('subscribeBannerIsClosed', true);
	}
	
	function handleBannerAnimation() {
		hideBanner();
	}

	// Functions
	function subscribeAsideToggle() {
		subscribeAsideItem.classList.toggle('aside-container__subscribe--active');
	}

	function updateBannerOpacity() {
		subscribeBanner.style.opacity = 0;
	}
	
	function hideBanner() {
		subscribeBanner.style.display = "none";
	}
	
	function setWidth() {
		let currentImageWidth = getComputedStyle(mainContainer)
		subscribeBanner.style.width = currentImageWidth.width;
	}

	if (subscribeBanner) {
		setWidth();
	}

}
