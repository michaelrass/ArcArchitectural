export default function Hover(){
	let entered = ''

	const logoImageBlack = document.querySelector('.aside-img_black');
	const logoImageWhite = document.querySelector('.aside-img_white');
	const standardImage = document.querySelectorAll('.image__standard-image');
	const hoverImage = document.querySelectorAll('.image__hover-image');
	
	if(window.innerWidth > 576){
		standardImage.forEach(element => {
			element.addEventListener('mouseover', handleMouseEnter);
		})
		hoverImage.forEach(element => {
			element.addEventListener('mouseout', handleMouseLeave);
		})

		if(logoImageBlack) {
			logoImageBlack.addEventListener('mouseover', handleLogoImageBlackEnter);
			logoImageBlack.addEventListener('mouseleave', handleLogoImageBlackLeave);
		}
	
		if(logoImageWhite) {
			logoImageWhite.addEventListener('mouseover', handleLogoImageWhiteEnter);
			logoImageWhite.addEventListener('mouseleave' , handleLogoImageWhiteLeave);
		}
	}



	function handleLogoImageBlackEnter () {
		toggleLogoColorBlackPurple('black');
	}
	function handleLogoImageBlackLeave (){
		toggleLogoColorBlackPurple('black');
	}

	function handleLogoImageWhiteEnter () {
		toggleLogoColorWhitePurple('white');
	}
	function handleLogoImageWhiteLeave (){
		toggleLogoColorWhitePurple('white');
	}
	
	function toggleLogoColorBlackPurple(currentEntered) {
		logoImageBlack.src = changeSource(currentEntered);
	}

	function toggleLogoColorWhitePurple(currentEntered) {
		logoImageWhite.src = changeSource(currentEntered);
	}

	function changeSource(currentEntered) {

		let sourcePurple = "/assets/images/logo/logoPurple.svg";
		let sourceBlack = "/assets/images/logo/logoBlack.svg";
		let sourceWhite = "/assets/images/logo/LogoWhite.svg";
		let changeSource;

		if(entered === 'white'){
			changeSource = sourceWhite;
			entered = '';
		}else if(entered === 'black'){
			changeSource = sourceBlack;
			entered='';
		}else {
			changeSource = sourcePurple;
			entered = currentEntered;
		}

		return changeSource;
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