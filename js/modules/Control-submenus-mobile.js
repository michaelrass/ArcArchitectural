export default function controlSubMenuMobile() {
	
	const closeEventsMobile = document.querySelector('.close-event-button');
	const upcommingEventsContainer = document.querySelector('.main-container__events-mobile')

	console.log(upcommingEventsContainer)
	closeEventsMobile.addEventListener('click', handleCloseButtonClick);

	function handleCloseButtonClick(){
		closeEventsWindow()
	}

	function closeEventsWindow() {
		upcommingEventsContainer.classList.add('main-container__events-mobile--inactive')
	}
}