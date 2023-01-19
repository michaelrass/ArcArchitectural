import { events } from "./events-array.js";

export default function upcomingEvents(){
	let eventListItems
	let sorted
	
	const eventsContainerDesktop = document.querySelector('.aside-container__events-list');
	const eventsContainerMobile = document.querySelector('.mobile-container__events-list');

	const sortEventsButtonsDesktop = document.querySelectorAll('.aside-container__events-button');
	const sortEventsButtonsMobile = document.querySelectorAll('.mobile-container__button');

	render();

	sortEventsButtonsDesktop.forEach(element => {
		element.addEventListener('click', handleSortEventsDesktopButtonClick)
	})

	sortEventsButtonsMobile.forEach(element => {
		element.addEventListener('click', handleSortEventsMobileButtonClick)
	})

	function handleSortEventsDesktopButtonClick(event) {
		getEventItemsDesktop()
		sortEventsDesktop(event);
	}

	function handleSortEventsMobileButtonClick(event) {
		getEventItemsMobile()
		sortEventsMobile(event)
	}

	function sortEventsDesktop(event) {
		let clickedTargetCategory = event.currentTarget.dataset.category
		if(clickedTargetCategory === sorted) {
			eventListItems.forEach(item => {
				item.classList.remove('aside-container__events--hidden');
			})
			sorted = ''
		}else {
			eventListItems.forEach(item => {
				item.classList.add('aside-container__events--hidden')
				if(clickedTargetCategory === item.dataset.category){
					item.classList.remove('aside-container__events--hidden');
					sorted = clickedTargetCategory;
				}
				
			})
		}
	}

	function sortEventsMobile(event) {
		let clickedTargetCategory = event.currentTarget.dataset.category
		if(clickedTargetCategory === sorted) {
			eventListItems.forEach(item => {
				item.classList.remove('mobile-container__events--hidden');
			})
			sorted = ''
		}else {
			eventListItems.forEach(item => {
				item.classList.add('mobile-container__events--hidden')
				if(clickedTargetCategory === item.dataset.category){
					item.classList.remove('mobile-container__events--hidden');
					sorted = clickedTargetCategory;
				}
				
			})
		}
	}

	function getEventItemsDesktop() {
		eventListItems = document.querySelectorAll('.aside-container__events-list-item')
	}

	function getEventItemsMobile() {
		eventListItems = document.querySelectorAll('.mobile-container__events-list-item')
	}

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
		listItem.setAttribute('data-category', item.category)

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
		listItem.setAttribute('data-category', item.category)

		itemTitle.innerText = item.title;
		itemDate.innerText = item.date;
		itemCategory.innerText = item.category;

		listItem.append(itemCategory, itemDate, itemTitle)

		return listItem;
	}
}