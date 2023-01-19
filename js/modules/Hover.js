export default function Hover(){
	
		const handleImgBlackHover = document.querySelector('.aside-img_black');
		
		handleImgBlackHover.addEventListener("mouseover", BlackHover);
		handleImgBlackHover.addEventListener("mouseleave", PurpleHover);
	
		function BlackHover () {
			//alert('test1');
			handleImgBlackHover.src = "/assets/images/logo/logoPurple.svg"
		}
		function PurpleHover (){
			//alert('test');
			handleImgBlackHover.src = "/assets/images/logo/logoBlack.svg"
		}
	

	const standardImage = document.querySelectorAll('.image__standard-image');
	const hoverImage = document.querySelectorAll('.image__hover-image');
	
	if(window.innerWidth > 576){
		standardImage.forEach(element => {
			element.addEventListener('mouseover', handleMouseEnter)
		})
		hoverImage.forEach(element => {
			element.addEventListener('mouseout', handleMouseLeave)
		})
	}
	

	
	function handleMouseEnter(event){
		imageHoverOn(event);
	}
	
	function handleMouseLeave(event){
		imageHoverOff(event);
	}

	function imageHoverOn(event) {
		let currentTarget = event.currentTarget.dataset.index;
		let imageHeigth = getComputedStyle(event.currentTarget);
		hoverImage[currentTarget].style.height = imageHeigth.height
		standardImage[currentTarget].classList.add('image__standard-image--inactive');
		hoverImage[currentTarget].classList.add('image__hover-image--active');
	}

	function imageHoverOff(event) {
		let currentTarget = event.currentTarget.dataset.index;
		standardImage[currentTarget].classList.remove('image__standard-image--inactive');
		hoverImage[currentTarget].classList.remove('image__hover-image--active');

	}
}