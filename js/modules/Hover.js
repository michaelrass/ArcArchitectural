export default function Hover(){
	const standardImage = document.querySelectorAll('.image__standard-image');
	const hoverImage = document.querySelectorAll('.image__hover-image');
	
	standardImage.forEach(element => {
		element.addEventListener('mouseenter', handleMouseEnter)
	})
	hoverImage.forEach(element => {
		element.addEventListener('mouseleave', handleMouseLeave)
	})
	
	function handleMouseEnter(event){
		hideCurrentImage(event);
		displayHoverImage(event);
	}
	
	function handleMouseLeave(event){
		hideHoverImage(event);
		displayStandardImage(event);
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
}

