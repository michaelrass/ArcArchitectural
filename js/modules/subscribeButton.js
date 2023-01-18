export default function subscribeButton() {
	const subscribeBanner = document.querySelector('.main-container__subscribe-banner');
	const subscribeBannerClose = document.querySelector('.main-container__subscribe-banner-close');
 
	subscribeBannerClose.addEventListener('click', handleBannerCloseClick);
 
	function handleBannerCloseClick() {
	  updateBannerOpacity();
	  subscribeBanner.addEventListener("animationend", handleBannerAnimation);
	}
 
	function updateBannerOpacity() {
	  subscribeBanner.style.opacity = 0;
	}
 
	function handleBannerAnimation() {
	  hideBanner();
	}
 
	function hideBanner() {
	  subscribeBanner.style.display = "none";
	}
 }
 