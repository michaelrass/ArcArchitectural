import { events } from "./events-array.js";

export default function upcomingEvents(){
	const eventsContainerDesktop = document.querySelector('.aside-container__events-list');
	const eventsContainerMobile = document.querySelector('.mobile-container__events-list');

	const sortEventsButtonsDesktop = document.querySelectorAll('.aside-container__events-button');
	const sortEventsButtonsMobile = document.querySelectorAll('.mobile-container__button');

	render();

	function render() {
		events.forEach(item => {
			if(window.innerWidth < 576){
				let eventListItem = generateEventsListMobileDOM(item);
				eventsContainerMobile.append(eventListItem);
			}else{
				let eventListItem = generateEventsListDesktopDOM(item);
				eventsContainerDesktop.append(eventListItem);
			}
		})
		

	}

	function generateEventsListDesktopDOM(item) {
		
		let listItem = document.createElement('li')
		let itemTitle = document.createElement('p')
		let itemDate = document.createElement('p')
		let itemCategory = document.createElement('p')

		listItem.setAttribute('class', 'aside-container__events-list-item')
		itemTitle.setAttribute('class', 'aside-container__events-title');
		itemDate.setAttribute('class', 'aside-container__events-time');
		itemCategory.setAttribute('class', 'aside-container__events-category')

		itemTitle.innerText = item.title;
		itemDate.innerText = item.date;
		itemCategory.innerText = item.category;

		listItem.append(itemCategory, itemDate, itemTitle)

		return listItem;
	}

	function generateEventsListMobileDOM(item) {
		let listItem = document.createElement('li')
		let itemTitle = document.createElement('p')
		let itemDate = document.createElement('p')
		let itemCategory = document.createElement('p')

		listItem.setAttribute('class', 'mobile-container__events-list-item')
		itemTitle.setAttribute('class', 'mobile-container__events-title');
		itemDate.setAttribute('class', 'mobile-container__events-time');
		itemCategory.setAttribute('class', 'mobile-container__events-category')

		itemTitle.innerText = item.title;
		itemDate.innerText = item.date;
		itemCategory.innerText = item.category;

		listItem.append(itemCategory, itemDate, itemTitle)

		return listItem;
	}
}