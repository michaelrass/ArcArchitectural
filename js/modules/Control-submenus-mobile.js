import upcomingEvents from "./upcoming-events.js";

export default function controlSubMenuMobile() {
	
	const openNavigationButton = document.querySelector('.mobile-container__header-menu-button');
	const openEventsButton = document.querySelector('.go-to-events-button');
	const closeEventsButton = document.querySelector('.close-event-button');
	
	const navigationWindow = document.querySelector('.mobile-container__navigation')
	const upcommingEventsContainer = document.querySelector('.mobile-container__events-mobile');

	openNavigationButton.addEventListener('click', handleOpenNavigationButtonClick);
	openEventsButton.addEventListener('click', handleOpenEventsButtonClick)
	closeEventsButton.addEventListener('click', handleCloseButtonClick);

	function handleCloseButtonClick(){
		toggleEventsWindow();
	}

	function handleOpenNavigationButtonClick() {
		toggleNavigationWindow();
		closeEvents();
	}

	function handleOpenEventsButtonClick() {
		toggleEventsWindow();
	}

	function toggleEventsWindow() {
		let eventsDisplayStatus = getComputedStyle(upcommingEventsContainer);
		if(eventsDisplayStatus.display === 'block'){
			upcommingEventsContainer.style.display = 'none';
		}else {
			upcommingEventsContainer.style.display = 'block';
		}
		upcomingEvents();

	}

	function toggleNavigationWindow() {
		let navigationDisplayStatus = getComputedStyle(navigationWindow);
		if(navigationDisplayStatus.display === 'block'){
			navigationWindow.style.display = 'none';
		}else{
			navigationWindow.style.display = 'block';
		}
	}

	function closeEvents() {
		let eventsDisplayStatus = getComputedStyle(upcommingEventsContainer);
		if(eventsDisplayStatus.display === 'block'){
			upcommingEventsContainer.style.display = 'none';
		}
	}

}