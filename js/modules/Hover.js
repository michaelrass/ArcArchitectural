export default function Hover(){
	const standardImage = document.querySelectorAll('.image__standard-image');
	const hoverImage = document.querySelectorAll('.image__hover-image');
	const logoBlack = document.querySelector('.header__logo-black');
	const logoWhite = document.querySelector('.header__logo-white');
	const logoPurple = document.querySelector('.header__logo-purple');
	
	if(window.innerWidth > 576){
		standardImage.forEach(element => {
			element.addEventListener('mouseenter', handleMouseEnter)
		})
		hoverImage.forEach(element => {
			element.addEventListener('mouseleave', handleMouseLeave)
		})
	}
	
	logoBlack.addEventListener('mouseover', handleLogoBlackMouseover);
	logoWhite.addEventListener('mouseover', handleLogoWhiteMouseover);
	logoPurple.addEventListener('mouseout', handleLogoPurpleMouseout);
	
	function handleMouseEnter(event){
		hideCurrentImage(event);
		displayHoverImage(event);
	}
	
	function handleMouseLeave(event){
		hideHoverImage(event);
		displayStandardImage(event);
	}
	
	function handleLogoBlackMouseover() {
		lightModeLogoHoverOn();
	}
	
	function handleLogoWhiteMouseover() {
		darkModeLogoHoverOn();
	}
	
	function handleLogoPurpleMouseout() {
		logoHoverOff();
	}

	function hideCurrentImage(event){
		let currentTarget = event.currentTarget.dataset.index
		standardImage[currentTarget].classList.add('image__standard-image--inactive')
	}
	
	function displayHoverImage(event){
		let currentTarget = event.currentTarget.dataset.index
		hoverImage[currentTarget].classList.add('image__hover-image--active')
	}
	
	function hideHoverImage(event) {
		let currentTarget = event.currentTarget.dataset.index
		hoverImage[currentTarget].classList.remove('image__hover-image--active')
	}
	
	function displayStandardImage(event) {
		let currentTarget = event.currentTarget.dataset.index
		standardImage[currentTarget].classList.remove('image__standard-image--inactive')
	}
	
	function lightModeLogoHoverOn() {
		logoBlack.classList.add('header__logo--hidden');
		logoPurple.classList.add('header__logo--visible');
	}

	function darkModeLogoHoverOn() {
		logoWhite.classList.add('header__logo--hidden');
		logoPurple.classList.add('header__logo--visible');
	}
	
	function logoHoverOff() {
		logoBlack.classList.remove('header__logo--hidden');
		logoWhite.classList.remove('header__logo--hidden');
		logoPurple.classList.remove('header__logo--visible');
	}
}