export default function Logo() {
	const logoBlack = document.querySelector('.header__logo-black');
	const logoWhite = document.querySelector('.header__logo-white');
	const logoPurple = document.querySelector('.header__logo-purple');

	logoBlack.addEventListener('mouseover', handleLogoBlackMouseover);
	logoWhite.addEventListener('mouseover', handleLogoWhiteMouseover);
	logoPurple.addEventListener('mouseout', handleLogoPurpleMouseout);

	function handleLogoBlackMouseover() {
		lightModeHoverOn();
	}

	function handleLogoWhiteMouseover() {
		darkModeHoverOn();
	}

	function handleLogoPurpleMouseout() {
		hoverOff();
	}

	function lightModeHoverOn() {
		logoBlack.classList.add('header__logo--hidden');
		logoPurple.classList.add('header__logo--visible');
	}

	function darkModeHoverOn() {
		logoWhite.classList.add('header__logo--hidden');
		logoPurple.classList.add('header__logo--visible');
	}
	
	function hoverOff() {
		logoBlack.classList.remove('header__logo--hidden');
		logoWhite.classList.remove('header__logo--hidden');
		logoPurple.classList.remove('header__logo--visible');
	}
}