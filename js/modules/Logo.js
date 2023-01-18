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
		
	}
}