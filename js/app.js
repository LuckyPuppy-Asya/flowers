function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }
//========================================================================================================================================================
if (document.querySelector('.banner-slider')) {
	new Swiper('.banner-slider', {

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.banner-pag',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}



//========================================================================================================================================================
if (document.querySelector('.hero-catalog__slider')) {
	new Swiper('.hero-catalog__slider', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.hero-pag',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.hero-btn--next',
			prevEl: '.hero-btn--prev',
		},
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}

//========================================================================================================================================================
if (document.querySelector('.card-related__slider')) {
	new Swiper('.card-related__slider', {
		/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
		observer: true,
		observeParents: true,
		// slidesPerView: 4,
		// spaceBetween: 30,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.related-pag',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.hero-next-btn',
		// 	prevEl: '.hero-prev-btn',
		// },

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			479.98: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			767.98: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			991.98: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".menu__body");
if (iconMenu != null) {
	let delay = 500;
	// let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".menu__icon");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================================================================================================================================
//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
// Поиск на хеддере (иконка-лупа)
let searchSelects = document.querySelectorAll('.search-form__btn');
let menuForm = document.querySelector('.header__search');
let searchFormInput = document.querySelector('.search-form__input');
if (searchSelects.length > 0) {

	searchSelects.forEach(searchSelect => {
		searchSelect.addEventListener("click", function (e) {
			searchSelect.classList.toggle('_active');
			menuForm.classList.toggle('_active');
			searchFormInput.value = '';
		});
	});
}

//========================================================================================================================================================

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//========================================================================================================================================================
// Анимация
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

//========================================================================================================================================================
// Выезжалки на слайдере на главной странице
let marketing = document.querySelector('.marketing');


if (marketing) {
	let counter = 0;
	let delay = 7000;

	const data = [{
		title: 'Pink Rose Day Spa',
		where: 'Moscow, Russia',
		image: 'r1-min.jpg'
	},
	{
		title: 'Rose Gold Strike',
		where: 'London, Great Britain',
		image: 'r2-min.jpg'
	},
	{
		title: 'Peace Rose',
		where: 'Rome, Italy',
		image: 'r3-min.jpg'
	},
	];

	const closeMarketing = () => {
		marketing.classList.remove('marketing--visible');
	}

	const changeMarketingData = () => {
		marketing.classList.remove('marketing--visible');

		setTimeout(() => {
			marketing.classList.add('marketing--visible');
		}, delay - 4000);

		const stringTitle = `${data[counter].title}`;
		const stringWhere = `1 day ago ${data[counter].where}`;
		const stringImage = `img/${data[counter].image}`;

		marketing.querySelector('.marketing__title').textContent = stringTitle;
		marketing.querySelector('.marketing__when-from').textContent = stringWhere;
		marketing.querySelector('.marketing__image>img').src = stringImage;//
		counter++;

		if (counter === data.length) {
			counter = 0;
		}
	}

	changeMarketingData();

	setInterval(changeMarketingData, delay);

	marketing.addEventListener('click', (e) => {
		if (e.target.classList.contains('marketing__close')) {
			closeMarketing();
		}
	});
}



//========================================================================================================================================================
// На странице shop фильтры

let catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');
let hideFilters = document.querySelector('.hide-filters');
let catalogFilterItems = document.querySelectorAll('.catalog-filter__item');
let catalogChoice = document.querySelector('.catalog-choice');


if (document.querySelector('.catalog')) {
	catalogFiltersTop.forEach(el => {
		el.addEventListener('click', (e) => {
			e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
		});
	});

	hideFilters.addEventListener('click', (e) => {
		catalogFiltersTop.forEach(el => {
			el.closest('.catalog-filter').classList.remove('catalog-filter--open');
		});
	});

	const createChoiceItem = (text) => {
		return (
			`
      <button class="catalog-choice__item" data-choice-text="${text}">
        ${text}
		  <img src="img/close.svg" alt="icon-close">
      </button>
    `
		);
	};

	catalogFilterItems.forEach(el => {
		el.querySelector('input').addEventListener('change', (e) => {
			// console.log(el.querySelector('input'))
			let checked = el.querySelector('input').checked;

			if (checked) {

				el.querySelector('.checkbox').classList.add('checkbox--active');
				let text = el.querySelector('.checkbox__text').textContent;

				catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));

			} else {
				el.querySelector('.checkbox').classList.remove('checkbox--active');

				let text = el.querySelector('.checkbox').dataset.text;

				document.querySelector(`[data-choice-text="${text}"]`).remove();
			}

			el.closest('.catalog-filter').querySelector('.catalog-filter__quantity').textContent = el.closest('.catalog-filter__items').querySelectorAll('.checkbox--active').length;

			let activeCheckboxes = document.querySelectorAll('.checkbox--active');

			if (activeCheckboxes.length > 0) {
				catalogChoice.style.display = 'block';
			} else {
				catalogChoice.style.display = 'none';
			}

		});
	});

	catalogChoice.addEventListener('click', (e) => {
		if (e.target.classList.contains('catalog-choice__item')) {
			e.target.remove();

			let text = e.target.textContent.trimLeft().trimRight();

			document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
			document.querySelector(`[data-text="${text}"]`).classList.remove('checkbox--active');
		}

		if (e.target.classList.contains('catalog-choice__clear')) {
			Array.from(e.currentTarget.children).forEach(el => {
				if (!el.classList.contains('catalog-choice__clear')) {
					el.remove();
				}

				document.querySelectorAll('.catalog-filter__quantity').forEach(el => el.textContent = 0);

				catalogFilterItems.forEach(el => {
					el.querySelector('input').checked = false;
					el.querySelector('.checkbox').classList.remove('checkbox--active');
				})
			});

			e.currentTarget.style.display = 'none';
		}

		if (e.currentTarget.children.length === 1) {
			e.currentTarget.style.display = 'none';
		}

	});
}
//========================================================================================================================================================
// Выбор языка и валюты в хедере и на shop-странице в sort by
let customSelect = document.querySelectorAll('.custom-select');
let catalogColumns = document.querySelector('.catalog-columns__list');
let catalogGridContent = document.querySelector('.catalog-grid__content');


if (document.querySelector('.catalog')) {

	catalogColumns.addEventListener('click', (e) => {
		if (e.target.classList.contains('.catalog-columns__btn') || e.target.closest('.catalog-columns__item')) {
			let columns = e.target.dataset.columns;
			let $columnsBtn = document.querySelectorAll('.catalog-columns__btn');

			$columnsBtn.forEach(el => {
				el.classList.remove('catalog-columns__btn--current');
			});

			e.target.classList.add('catalog-columns__btn--current');

			catalogGridContent.dataset.gridColumns = columns;
		}
	});
}

if (customSelect) {
	customSelect.forEach(el => {
		el.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('custom-select--open');

			if (e.target.classList.contains('custom-select__item')) {
				let text = e.target.textContent;
				e.currentTarget.querySelector('.custom-select__top').textContent = text;
			}
		});
	});
}
//==================================================================================================
// Выбор цвета по нажатию кнопок

let colorSelect = document.querySelector('.color-select');
let sizeSelect = document.querySelector('.size-select');


if (colorSelect) {
	colorSelect.addEventListener('click', (e) => {
		if (e.target.classList.contains('color-select__btn')) {

			document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('color-select__btn--active'));

			let color = e.target.dataset.color;

			e.currentTarget.querySelector('.color-select__selected span').textContent = color;

			e.target.classList.add('color-select__btn--active');
		}
	});

}

if (sizeSelect) {
	let size = '';

	sizeSelect.addEventListener('click', (e) => {
		if (e.target.classList.contains('size-select__btn')) {

			e.currentTarget.querySelector('.size-select__clear').style.display = 'inline-flex';

			let color = e.target.dataset.color;

			e.currentTarget.querySelector('.size-select__selected span').textContent = color;

			e.target.classList.toggle('size-select__btn--active');

			if (e.target.classList.contains('size-select__btn--active')) {
				let currentSize = e.target.textContent;

				size += currentSize + ', ';
			} else {
				let currentSize = e.target.textContent + ', ';

				size = size.replace(currentSize, '');
			}

			e.currentTarget.querySelector('.size-select__selected span').textContent = size;

			if (!size) {
				e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
			}
		}

		if (e.target.classList.contains('size-select__clear')) {
			e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
			document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
			e.target.style.display = 'none';
			size = '';
		}
	});

}
//========================================================================================================================================================
// Увеличение/уменьшение товара для корзины в card
let stepper = document.querySelector('.stepper');

if (stepper) {

	const stepperInput = stepper.querySelector('.stepper__input'),
		stepperMinus = stepper.querySelector('.stepper__btn--minus'),
		stepperPlus = stepper.querySelector('.stepper__btn--plus');

	stepperInput.addEventListener('keydown', (e) => {
		// console.log(e.currentTarget.value)
		if (e.currentTarget.value <= 1) {
			stepperMinus.classList.add('stepper__btn--disabled');
			stepperPlus.classList.remove('stepper__btn--disabled');
		} else {
			stepperMinus.classList.remove('stepper__btn--disabled');
		}

		if (e.currentTarget.value > 99998) {
			stepperMinus.classList.remove('stepper__btn--disabled');
			stepperPlus.classList.add('stepper__btn--disabled');
		} else {
			stepperPlus.classList.remove('stepper__btn--disabled');
		}
	});

	stepperPlus.addEventListener('click', (e) => {
		let currentValue = parseInt(stepperInput.value);
		currentValue++;
		stepperInput.value = currentValue;

		stepperMinus.classList.remove('stepper__btn--disabled');

		if (stepperInput.value > 99998) {
			stepperInput.value = 99999;
			stepperPlus.classList.add('stepper__btn--disabled');
		} else {
			stepperPlus.classList.remove('stepper__btn--disabled');
		}
	});

	stepperMinus.addEventListener('click', (e) => {
		let currentValue = parseInt(stepperInput.value);
		currentValue--;
		stepperInput.value = currentValue;

		stepperPlus.classList.remove('stepper__btn--disabled');

		if (stepperInput.value <= 1) {
			stepperInput.value = 1;
			stepperMinus.classList.add('stepper__btn--disabled');
		} else {
			stepperMinus.classList.remove('stepper__btn--disabled');
		}
	});

}
//========================================================================================================================================================
// Смена карточек при клике в card
let cardSliderThumbs = document.querySelector('.card-slider__thumbs'),
	sliderImg = document.querySelector('.card-slider__main img');


if (cardSliderThumbs) {
	cardSliderThumbs.addEventListener('click', (e) => {
		if (e.target.classList.contains('card-slider__thumb')) {
			let src = e.target.querySelector('img').getAttribute('src');
			sliderImg.setAttribute('src', src);
		}
	});

}

//========================================================================================================================================================
// На card табы: открытие статьи по клику на названии
let cardDescrLink = document.querySelectorAll('.card-description__link');
cardDescrLink.forEach(el => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		let target = e.currentTarget.getAttribute('href');
		// console.log(target);

		cardDescrLink.forEach(el => el.classList.remove('card-description__link--active'));
		document.querySelectorAll('.card-description__content').forEach(el => el.classList.remove('card-description__content--active', 'fade'));

		e.currentTarget.classList.add('card-description__link--active');
		document.querySelector(`[data-target="${target}"]`).classList.add('card-description__content--active', 'fade');
	});
});

//========================================================================================================================================================
// на главной фильтр товаров
let navig = document.querySelector('.products-grid');
const mainProductsBtns = document.querySelectorAll('.main-products__btn');
if (navig && mainProductsBtns.length > 0) {
	document.querySelector('[data-filter="best-sellers"]').onclick = function (e) { mySort(e, 'best'); }
	document.querySelector('[data-filter="new-products"]').onclick = function (e) { mySort(e, 'new'); }
	document.querySelector('[data-filter="sale-products"]').onclick = function (e) { mySort(e, 'sale'); }

	function mySort(e, sortType) {
		if (mainProductsBtns.length > 0) {
			mainProductsBtns.forEach(mainProductsBtn => {
				mainProductsBtn.classList.remove('main-products__btn--current');
			});

			e.target.classList.add('main-products__btn--current');
		}

		for (let i = 0; i < navig.children.length; i++) {
			for (let j = i; j < navig.children.length; j++) {
				if (navig.children[i].getAttribute("data-sort") != sortType) {

					replacedNode = navig.replaceChild(navig.children[j], navig.children[i]);
					insertAfter(replacedNode, navig.children[i]);
				}
			}
		}
	}

	function insertAfter(elem, refElem) {
		return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
	}
}

//========================================================================================================================================================
// добавление товара на главной странице по клику на Load More
const productsGrid = document.querySelector('.products-grid');
const loadMore = document.querySelector('.main-products__more');
let quantityProducts = 10;
let dataLength = '';
// Цена с пробелом 7500
const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
if (productsGrid) {
	const fetchProducts = (quantity = 5) => {
		fetch('../products.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				dataLength = data.length;
				productsGrid.innerHTML = '';
				for (let i = 0; i < data.length; i++) {
					if (i < quantity) {
						let item = data[i];
						switch (item.label) {
							case "data-sort='sale'":
								productsGrid.innerHTML += `
								<li class="products-grid__item"  ${item.label}>
								<article class="product">
									<div class="product__image _ibg">
										<div class="product__ribbon">Sale</div>
										<img src="${item.mainImage}" alt="${item.title}"></img>
									</div>
									<h3 class="product__title">
										<a href="#">
										${item.title}
										</a>
									</h3>
									<div class="product-custom">
										<div class="product-custom__price">
										<span class="product__price">$${normalPrice(item.price)}.00</span>
											<span class="product__oldprice">$${normalPrice(item.oldPrice)}.00</span>
										</div>
										<div class="product-custom__cart">
											<button class="to-cart" data-id="${item.id}" aria-label="Показать информацию о товаре">Add to cart</button>
										</div>
									</div>
								</article>
							</li>
								`;
								continue;
							case "data-sort='best'":
								productsGrid.innerHTML += `
									<li class="products-grid__item" ${item.label}>
										<article class="product">
											<div class="product__image _ibg">
												<span class="product__best _icon-certificate"><span>Best Seller</span></span>
	 											<img src="${item.mainImage}" alt="${item.title}"></img>
											</div>
											<h3 class="product__title">
												<a href="#">
													${item.title}
												</a>
											</h3>
											<div class="product-custom">
												<div class="product-custom__price">
													<span class="product__price">$${normalPrice(item.price)}.00</span>
												</div>
												<div class="product-custom__cart">
													<button class="to-cart" data-id="${item.id}" aria-label="Показать информацию о товаре">Add to cart</button>
												</div>
											</div>
										</article>
									</li>
								`;
								continue;
							case "data-sort='new'":
								productsGrid.innerHTML += `
									<li class="products-grid__item" ${item.label}>
										<article class="product">
											<div class="product__image _ibg">
												<span class="product__new _icon-spa"><span>New</span></span>
												<img src="${item.mainImage}" alt="${item.title}"></img>
											</div>
											<h3 class="product__title">
												<a href="#">
													${item.title}
												</a>
											</h3>
											<div class="product-custom">
												<div class="product-custom__price">
													<span class="product__price">$${normalPrice(item.price)}.00</span>
												</div>
												<div class="product-custom__cart">
													<button class="to-cart" data-id="${item.id}" aria-label="Показать информацию о товаре">Add to cart</button>
												</div>
											</div>
										</article>
									</li>
								`;
								continue;
						}
					}
				}
				mainProductsBtns.forEach(mainProductsBtn => {
					mainProductsBtn.classList.remove('main-products__btn--current');
				});
			})
			.then(() => {
				cartLogic();
			});
	};

	fetchProducts(quantityProducts);

	loadMore.addEventListener('click', (e) => {
		quantityProducts = quantityProducts + 5;
		// console.log(quantityProducts);
		// console.log(dataLength);

		fetchProducts(quantityProducts);

		if (quantityProducts >= dataLength) {
			loadMore.style.display = 'none';
		} else {
			loadMore.style.display = 'inline-block';
		}
	});

}
//========================================================================================================================================================
// бургер-меню хедера
const burger = document.querySelector('.burger');
const navClose = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

if (burger) {
	burger.addEventListener('click', () => {
		nav.classList.add('nav--visible');
	});

	navClose.addEventListener('click', () => {
		nav.classList.remove('nav--visible');
	});

	nav.addEventListener('click', (e) => {
		if (e.target.classList.contains('nav__link')) {
			nav.classList.remove('nav--visible');
		}
	});
}
//========================================================================================================================================================
// на странице catalog при моб версии работа фильтров
const mobileFiltersOpen = document.querySelector('.catalog-mobile-filters');
const catalogFilters = document.querySelector('.catalog-filters');


if (mobileFiltersOpen) {
	let openFilters = false;
	mobileFiltersOpen.addEventListener('click', (e) => {
		if (!openFilters) {
			mobileFiltersOpen.querySelector('span').textContent = 'Close';
			catalogFilters.classList.add('catalog-filters--open');
			openFilters = true;
		} else {
			mobileFiltersOpen.querySelector('span').textContent = 'Filters';
			catalogFilters.classList.remove('catalog-filters--open');
			openFilters = false;
		}
	});
}
//==================================================================================================
// Звездный рейтинг товара
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
}
//========================================================================================================================================================
// Появление окна мини-корзины
const cartBtn = document.querySelector('.cart');
const miniCart = document.querySelector('.mini-cart');

cartBtn.addEventListener('click', () => {
	miniCart.classList.add('mini-cart--visible');
});

document.addEventListener('click', (e) => {
	if (!e.target.classList.contains('mini-cart') && !e.target.closest('.mini-cart') && !e.target.classList.contains('cart') && !e.target.classList.contains('mini-product__delete') && !e.target.classList.contains('to-cart')) {
		miniCart.classList.remove('mini-cart--visible');
	}
});
//========================================================================================================================================================

// работа корзины

let price = 0;
const miniCartList = document.querySelector('.mini-cart__list');
const fullPrice = document.querySelector('.mini-cart__summ');
const cartCount = document.querySelector('.cart__quantity');

// цена без пробелов 7500
const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};
// добавление цены
const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};
// вычитание цены
const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};
// вывод цены на страницу
const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)}.00 $`;
};

const printQuantity = (num) => {
	cartCount.textContent = num;
};

const loadCartData = (id = 1) => {
	fetch('../products.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			for (let dataItem of data) {
				if (dataItem.id == id) {
					// console.log(dataItem);
					miniCartList.insertAdjacentHTML('afterbegin', `
					<li class="mini-cart__item" data-id="${dataItem.id}">
					<article class="mini-cart__product mini-product">
						<div class="mini-product__image">
							<img src="${dataItem.mainImage}" alt="${dataItem.title}">
						</div>
						<div class="mini-product__content">
							<div class="mini-product__text">
								<h3 class="mini-product__title">${dataItem.title}</h3>
								<span class="mini-product__price">${normalPrice(dataItem.price)}.00&nbsp;$</span>
							</div>
							<button class="mini-product__delete" aria-label="Удалить товар">
								<svg>
									<use xlink:href="sprite.svg#trash"></use>
								</svg>
							</button>
						</div>
					</article>
				</li>
            `);

					return dataItem;
				}
			}
		})
		.then((item) => {
			plusFullPrice(item.price);
			printFullPrice();

			let num = document.querySelectorAll('.mini-cart__list .mini-cart__item').length;

			if (num > 0) {
				cartCount.classList.add('cart__quantity--visible');
			}

			printQuantity(num);
		});
};


const cartLogic = () => {
	const toCart = document.querySelectorAll('.to-cart');
	toCart.forEach(el => {
		el.addEventListener('click', (e) => {
			const id = e.currentTarget.dataset.id;
			loadCartData(id);
		});
	});

	miniCartList.addEventListener('click', (e) => {
		if (e.target.classList.contains('mini-product__delete')) {
			const self = e.target;
			const parent = self.closest('.mini-cart__item');
			const price = parseInt(priceWithoutSpaces(parent.querySelector('.mini-product__price').textContent));
			const id = parent.dataset.id;

			parent.remove();

			minusFullPrice(price);
			printFullPrice();

			let num = document.querySelectorAll('.mini-cart__list .mini-cart__item').length;

			if (num == 0) {
				cartCount.classList.remove('cart__quantity--visible');
				miniCart.classList.remove('mini-cart--visible');
			}

			printQuantity(num);
		}
	});
	//========================================================================================================================================================
	// Добавила код для удаления товара при клике на корзине в окончательной модалке-оформление заказа (в ней и в мини-корзине Код выше при клике на корзину в мини корзине)
	const cartModalOrderList = document.querySelector('.cart-modal-order__list')
	cartModalOrderList.addEventListener('click', (e) => {
		if (e.target.classList.contains('mini-product__delete')) {
			const self = e.target;
			const parent = self.closest('.mini-cart__item');
			const price = parseInt(priceWithoutSpaces(parent.querySelector('.mini-product__price').textContent));
			const id = parent.dataset.id;
			parent.remove();
			console.log(miniCartList.querySelector(`.mini-cart__item[data-id="${id}"]`));
			miniCartList.querySelector(`.mini-cart__item[data-id="${id}"]`).remove();
			minusFullPrice(price);
			printFullPrice();

			let num = document.querySelectorAll('.cart-modal-order__list .mini-cart__item').length;

			if (num == 0) {
				cartCount.classList.remove('cart__quantity--visible');
				miniCart.classList.remove('mini-cart--visible');
			}

			printQuantity(num);
			orderModalQuantity.textContent = `${document.querySelectorAll('.mini-cart__list .mini-cart__item').length} item`;
			orderModalSumm.textContent = fullPrice.textContent;
		}
	});
	//========================================================================================================================================================

};

const openOrderModal = document.querySelector('.mini-cart__btn');
const orderModalList = document.querySelector('.cart-modal-order__list');
const orderModalQuantity = document.querySelector('.cart-modal-order__quantity span');
const orderModalSumm = document.querySelector('.cart-modal-order__summ span');
const orderModalShow = document.querySelector('.cart-modal-order__show');

openOrderModal.addEventListener('click', () => {
	const productsHtml = document.querySelector('.mini-cart__list').innerHTML;
	orderModalList.innerHTML = productsHtml;

	orderModalQuantity.textContent = `${document.querySelectorAll('.mini-cart__list .mini-cart__item').length} item`;
	orderModalSumm.textContent = fullPrice.textContent;
});

orderModalShow.addEventListener('click', () => {

	if (orderModalList.classList.contains('cart-modal-order__list--visible')) {
		orderModalList.classList.remove('cart-modal-order__list--visible');
		orderModalShow.classList.remove('cart-modal-order__show--active');
	} else {
		orderModalList.classList.add('cart-modal-order__list--visible');
		orderModalShow.classList.add('cart-modal-order__show--active');
	}
});
//========================================================================================================================================================

//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');
		const test = form.getAttribute('data-test');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (test) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					//"+375 (99) 9999999"
					input.classList.add('_mask');
					Inputmask('+1(999) 999 9999', {
						// "placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			/*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}
function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}
function scrParallax(block, scrProcent, blockHeight) {
	let prlxItems = block.querySelectorAll('._prlx-item');
	if (prlxItems.length > 0) {
		for (let index = 0; index < prlxItems.length; index++) {
			const prlxItem = prlxItems[index];
			let prlxItemAttr = (prlxItem.dataset.prlx) ? prlxItem.dataset.prlx : 3;
			const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
		}
	}
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);

	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

	if (swiperScrolls.length > 0) {
		for (let index = 0; index < swiperScrolls.length; index++) {
			const swiperScroll = swiperScrolls[index];
			swiperScroll.addEventListener("mouseenter", function (e) {
				window.removeEventListener('wheel', full_scroll);
			});
			swiperScroll.addEventListener("mouseleave", function (e) {
				window.addEventListener('wheel', full_scroll);
			});
		}
	}
}
function getPrevBlockPos(current_block_prev) {
	let viewport_height = window.innerHeight;
	let current_block_prev_height = current_block_prev.offsetHeight;
	let block_pos = offset(current_block_prev).top;

	if (current_block_prev_height >= viewport_height) {
		block_pos = block_pos + (current_block_prev_height - viewport_height);
	}
	return block_pos;
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_prev) {
						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
					}
				} else {
					enableScroll();
					if (currentScroll <= current_block_pos) {
						if (current_block_prev) {
							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
						}
					}
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						full_scroll_to_sector(block_pos);
					}
				} else {
					enableScroll();
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						if (currentScroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}

// modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
	modalCloseBtn = document.querySelector('[data-close]'),
	modalClose = document.querySelector('.modal__close'),
	modal = document.querySelector('.modal');


function openModal() {
	modal.classList.toggle('_active');
	document.body.style.overflow = 'hidden';
}

modalTrigger.forEach(elem => {
	elem.addEventListener('click', () => {
		openModal()
	});
});

function closeModal() {
	modal.classList.toggle('_active');
	document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {
	if (e.target === modal || e.target == modalClose || e.target == modalCloseBtn) {
		closeModal();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code == 'Escape' && modal.classList.contains('_active')) {
		closeModal();
	}
});

