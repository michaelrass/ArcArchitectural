import upcomingEvents from "./upcoming-events.js";

export default function controlSubMenuMobile() {

	const mainContainer = document.querySelector('.main-container');
	
	const openNavigationButton = document.querySelector('.mobile-container__header-menu-button');
	const openEventsButton = document.querySelector('.go-to-events-button');
	const closeEventsButton = document.querySelector('.close-event-button');
	
	const navigationWindow = document.querySelector('.mobile-container__navigation')
	const upcommingEventsContainer = document.querySelector('.mobile-container__events-mobile');

	const mobileHeader = document.querySelector('.mobile-container__header');
	const mobileLogo = document.querySelector('.mobile-container__logo-container');

	openNavigationButton.addEventListener('click', handleOpenNavigationButtonClick);
	openEventsButton.addEventListener('click', handleOpenEventsButtonClick);
	closeEventsButton.addEventListener('click', handleCloseButtonClick);

	function handleCloseButtonClick(){
		toggleEventsWindow();
	}

	function handleOpenNavigationButtonClick() {
		toggleNavigationWindow();
		closeEvents();
		positionNavigationMobile();
	}

	function handleOpenEventsButtonClick() {
		toggleEventsWindow();
		positionEventsMobile();
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
		toggleEventsWindow();
	}

	function closeEvents() {
		let eventsDisplayStatus = getComputedStyle(upcommingEventsContainer);
		if(eventsDisplayStatus.display === 'block'){
			upcommingEventsContainer.style.display = 'none';
		}
	}

	function positionNavigationMobile() {
		let headerMobile = getComputedStyle(mobileHeader);
		let logoMobile = getComputedStyle(mobileLogo);
		let heightLogoHeader = parseFloat(headerMobile.height) + parseFloat(logoMobile.height);
		if(mainContainer.scrollTop > heightLogoHeader){
			navigationWindow.style.top = headerMobile.height;
		}
	}

	function positionEventsMobile() {
		let headerMobile = getComputedStyle(mobileHeader);
		let logoMobile = getComputedStyle(mobileLogo);
		let heightLogoHeader = parseFloat(headerMobile.height) + parseFloat(logoMobile.height);
		if(mainContainer.scrollTop > heightLogoHeader){
			upcommingEventsContainer.style.top = headerMobile.height;
		}
	}

}