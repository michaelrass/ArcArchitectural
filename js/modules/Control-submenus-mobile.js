export default function controlSubMenuMobile() {
	
	const closeEventsMobile = document.querySelector('.close-event-button');
	const upcommingEventsContainer = document.querySelector('.main-container__events-mobile')

	closeEventsMobile.addEventListener('click', handleCloseButtonClick);

	function handleCloseButtonClick(){
		closeEventsWindow()
	}

	function closeEventsWindow() {
		upcommingEventsContainer.style.display = 'none'
	}
}