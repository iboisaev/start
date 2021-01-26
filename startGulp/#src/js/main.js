@@include("components/testWebp.js")

// Native JS
const doc = document;

// after DOMContentLoaded
doc.addEventListener('DOMContentLoaded', function () {

	// переменные const
	const body        = doc.getElementsByTagName('body')[0],
		  header      = doc.querySelector('.header'),
		  headerMenu  = doc.querySelector('.header__menu'),
		  menuBurger  = doc.querySelector('.menu-burger'),
		  btnUp       = doc.querySelector('.btn-up'),
		  mode        = doc.querySelectorAll('.mode'),
		  form        = doc.querySelectorAll('.form'),
		  thanksPopup = doc.querySelector('.thanks-popup'),
		  closePopup  = doc.querySelector('.popup__close'),
		  dropdown    = doc.querySelectorAll('.dropdown'),
		  lazyAnchor  = doc.querySelectorAll('.lazy-anchor'),
		  lockPadding = doc.querySelectorAll('.lock-padding'),
		  lockMargin  = doc.querySelectorAll('.lock-margin'),
		  timeout     = 500;

	// переменные let
	let unlock = true;

	// function ibg for bg-images
	function ibg(){
		let ibg = doc.querySelectorAll(".ibg");
		for (let i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}

	// Блокировка скроллбара
	function bodyLock() {
		const lockPaddingValue = window.innerWidth - doc.querySelector('.wrapper').offsetWidth + 'px';
		
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
			    const el = lockPadding[index];
			    el.style.paddingRight = lockPaddingValue;
			}
		}

		if (lockMargin.length > 0) {
			for (let index = 0; index < lockMargin.length; index++) {
			    const el = lockMargin[index];
			    el.style.marginRight = lockPaddingValue;
			}
		}

		body.style.paddingRight = lockPaddingValue;
		body.classList.add('locked');

		unlock  = false;
		setTimeout(function() {
			unlock = true;
		}, timeout);
	}

	// Отмена блокировки скроллбара
	function bodyUnlock() {
		setTimeout(function() {
			if (lockPadding) {
				for (let index = 0; index < lockPadding.length; index++) {
				    const el = lockPadding[index];
				    el.style.paddingRight = '0px';
				}
			}

			if (lockMargin) {
				for (let index = 0; index < lockMargin.length; index++) {
				    const el = lockMargin[index];
				    el.style.marginRight = '0px';
				}
			}

			body.style.paddingRight = 0;
			body.classList.remove('locked');	
		}, timeout);
		

		unlock  = false;
		setTimeout(function() {
			unlock = true;
		}, timeout);
	}

	// Функция для открытия попапа
	function popupOpen(which) {
		if (unlock) {
			which.classList.add('open');
			bodyLock();
			return which;
		}
	}
	
	// Функция для закрытия попапа
	function popupClose(which) {
		if (unlock) {
			which.classList.remove('open');
			bodyUnlock();
			return which;
		}
	}

	// Функция для открытия/закрытия меню бургера
	function toggleMenuBurger() {
		menuBurger.classList.toggle('active');
		headerMenu.classList.toggle('active');
		bodyLock();

		if (!(menuBurger.classList.contains('active') || headerMenu.classList.contains('active'))) {
			bodyUnlock();
		}
	}

	// запуск функции ibg
	ibg();
	
});


// JQuery
// $(doc).ready(function(){

// 	// переменные const
// 	const body          = $('body'),
// 		  btnUp         = $('.btn-up'),
// 		  navLink       = $('.nav__link'),
// 		  btns          = $('.btns'),
// 		  popup         = $('.popup'),
// 		  callbackPopup = $('.callback-popup'),
// 		  thanksPopup   = $('.thanks-popup'),
// 		  closePopup    = $('.popup__close'),

// });