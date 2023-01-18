export default function subscribeButton() {
	const subscribeBanner = document.querySelector('.main-container__subscribe-banner');
	const subscribeBannerClose = document.querySelector('.main-container__subscribe-banner-close');

	subscribeBannerClose.addEventListener('click', function() {
		subscribeBanner.style.opacity = 0;
		subscribeBanner.addEventListener("animationend", function(){
			subscribeBanner.style.display = "none";
		});
	});
}