export default function subscribeBanner() {
	// querySelectors
	const mainContainer = document.querySelector('.main-container');
	const subscribeBanner = document.querySelector('.main-container__subscribe-banner');
	const subscribeBannerClose = document.querySelector('.main-container__subscribe-banner-close');
	
	// Event Listeners
	subscribeBannerClose.addEventListener('click', handleBannerCloseClick);
	subscribeBanner.addEventListener("animationend", handleBannerAnimation);
	window.addEventListener('resize', setWidth);
	
	// Handlers
	function handleBannerCloseClick() {
		updateBannerOpacity();
	}
	
	function handleBannerAnimation() {
		hideBanner();
	}

	// Functions
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
	
	setWidth();
}