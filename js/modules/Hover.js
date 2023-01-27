export default function Hover(){
	let entered = ''

	const hoverLogoDesktop = document.querySelector('.aside-container__logo-button');
	const logoImageBlack = document.querySelector('.aside-img_black');
	const logoImageWhite = document.querySelector('.aside-img_white');
	const logoImagePurple = document.querySelector('.aside-img_purple');
	const standardImage = document.querySelectorAll('.image__standard-image');
	const hoverImage = document.querySelectorAll('.image__hover-image');
	
	if(window.innerWidth > 576){
		standardImage.forEach(element => {
			element.addEventListener('mouseover', handleMouseEnter);
		})
		hoverImage.forEach(element => {
			element.addEventListener('mouseout', handleMouseLeave);
		})

			logoImageBlack.addEventListener('mouseover', handleLogoImageEnter);
			logoImageWhite.addEventListener('mouseover', handleLogoImageEnter);
			logoImagePurple.addEventListener('mouseout', handleLogoImageLeave)
		

		console.log(logoImageBlack, logoImagePurple, logoImageWhite)

	}



	function handleLogoImageEnter () {
		addImagePurpleHideBlackWhite();
	}

	function handleLogoImageLeave () {
		removeImagePurpleShowBlackWhite();
	}
	
	function addImagePurpleHideBlackWhite() {
		logoImagePurple.classList.add('aside-img--show');
		logoImageBlack.classList.add('aside-img--hidden');
		logoImageWhite.classList.add('aside-img--hidden');


	}

	function removeImagePurpleShowBlackWhite() {
		console.log('leave')
		logoImageBlack.classList.remove('aside-img--hidden');
		logoImageWhite.classList.remove('aside-img--hidden');

		logoImagePurple.classList.remove('aside-img--show');
	}

	function handleMouseEnter(event){
		imageHoverOn(event);
	}
	
	function handleMouseLeave(event){
		imageHoverOff(event);
	}

	function imageHoverOn(event) {
		let currentTarget = event.currentTarget.dataset.index;
		let imageStyle = getComputedStyle(event.currentTarget);
		hoverImage[currentTarget].style.height = imageStyle.height;
		hoverImage[currentTarget].style.width = imageStyle.width;
		standardImage[currentTarget].classList.add('image__standard-image--inactive');
		hoverImage[currentTarget].classList.add('image__hover-image--active');

	}

	function imageHoverOff(event) {
		let currentTarget = event.currentTarget.dataset.index;
		standardImage[currentTarget].classList.remove('image__standard-image--inactive');
		hoverImage[currentTarget].classList.remove('image__hover-image--active');

	}

	function imageHoverOff(event) {
		let currentTarget = event.currentTarget.dataset.index;
		standardImage[currentTarget].classList.remove('image__standard-image--inactive');
		hoverImage[currentTarget].classList.remove('image__hover-image--active');
	}
}