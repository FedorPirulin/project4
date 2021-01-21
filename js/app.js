const body = document.querySelector("body");
const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".header_nav");
const anchor = document.querySelector(".intro_arrow");

/*==================smooth scrol===========================*/
  	if(anchor){
  		anchor.addEventListener("click", smoothscroll);

	  	function smoothscroll(event){
	    	event.preventDefault();
	    	const href = this.getAttribute("href");
	    	
	    	document.querySelector(href).scrollIntoView({
				behavior: "smooth"
			 });
	  	}
  	}
/*====================menu===========================*/

	burger.addEventListener("click", function(){
		body.classList.toggle("lock");
		burger.classList.toggle("_active");
		menu.classList.toggle("_active");
	});
/*=====================slider intro.html=======================*/

$('.directions_slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next',
        responsive: [
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	   ]
	});
/*========================tabs law.html==========================*/
const tabsBtn = document.querySelectorAll(".fastconsult_tabs__link");
const tabsBlock = document.querySelectorAll(".fastconsult_tabs__block");

tabsBtn.forEach(function(item){
		item.addEventListener("click", function(){
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentBlock = document.querySelector(tabId);

			tabsBtn.forEach(function(item){
				item.classList.remove("fastconsult_tabs__link--active");
			});
			tabsBlock.forEach(function(item){
				item.classList.remove("fastconsult_tabs__block--active");
			});

			currentBtn.classList.add("fastconsult_tabs__link--active");
			currentBlock.classList.add("fastconsult_tabs__block--active");
		});
	});

if(document.querySelector(".fastconsult_tabs__link")){
	document.querySelector(".fastconsult_tabs__link").click();
}

/*======================dropdown===========================*/
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown_button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown_list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown_list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		e.preventDefault();
		dropDownList.classList.toggle('dropdown_list--visible');
        this.classList.add('dropdown_button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown_list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown_button--active');
			dropDownList.classList.remove('dropdown_list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown_button--active');
			dropDownList.classList.remove('dropdown_list--visible');
		}
	});
});


// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

/*========================slider law.html==========================*/

$('.fastconsult_tabs__item-first').slick({
  centerMode: true,
  infinite:false,
  centerPadding: '0px',
  initialSlide: 1,
  slidesToShow: 3,
  prevArrow: '.fastconsult_controls_prev-first',
  nextArrow: '.fastconsult_controls_next-first',
  dots:false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
      	centerMode: false,
      	initialSlide: 0,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});
$('.fastconsult_tabs__item-two').slick({
  centerMode: true,
  infinite:false,
  centerPadding: '0px',
  initialSlide: 1,
  slidesToShow: 3,
  prevArrow: '.fastconsult_controls_prev-two',
  nextArrow: '.fastconsult_controls_next-two',
  dots:false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
      	centerMode: false,
      	initialSlide: 0,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});
$('.fastconsult_tabs__item-three').slick({
  centerMode: true,
  infinite:false,
  centerPadding: '0px',
  initialSlide: 1,
  slidesToShow: 3,
  prevArrow: '.fastconsult_controls_prev-three',
  nextArrow: '.fastconsult_controls_next-three',
  dots:false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
      	centerMode: false,
      	initialSlide: 0,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});
$('.fastconsult_tabs__item-four').slick({
  centerMode: true,
  infinite:false,
  centerPadding: '0px',
  initialSlide: 1,
  slidesToShow: 3,
  prevArrow: '.fastconsult_controls_prev-four',
  nextArrow: '.fastconsult_controls_next-four',
  dots:false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
      	centerMode: false,
      	initialSlide: 0,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

/*========================slider consult.html==========================*/
$('.services-consult_inner_mob').slick({
  responsive: [
    {
      breakpoint: 575,
      settings: {
		infinite:false,
		slidesToShow: 1,
		prevArrow: '.services-consult_controls_prev',
  		nextArrow: '.services-consult_controls_next',
		
		dots:true
      }
    }
  ]
});

/*======================flat.html===slider========================*/
$('.flat_slider_body').slick({

	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	
	responsive: [
	{
      breakpoint: 1023,
      settings: {
        prevArrow: false,
        nextArrow: false,
      }
    },
    {
      breakpoint: 495,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    }
   ]
});

/*======================flat-open.html===sidebar======================*/
const btnSidebar = document.querySelector("#btnSide");
const blockSidebar = document.querySelector(".flat-open_aside-hidden-mob");

if(btnSidebar){
	btnSidebar.addEventListener("click", function(){
		blockSidebar.classList.toggle("flat-open_aside-hidden-mob--active");
	});
}

/*======================flat-open1.html=======================*/
const current = document.querySelector('#currentImg');
const imgs = document.querySelector('.flat-open1_gallery-mini');
const img = document.querySelectorAll('.flat-open1_gallery-mini img');
const opacity = 0.6;


if (imgs) {
	imgs.addEventListener('click', imgClick);
}

function imgClick(e) {
  img.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}

/*====================flat-open1.html==readmore========================*/
let readMore = document.querySelector('#mobReadMore');

if(readMore){
	readMore.addEventListener("click", function(){
		document.querySelectorAll(".flat-open1_description_text ._hidden").forEach(function(item){
			item.classList.toggle("_hidden--active");
		});
		document.querySelector(".flat-open1_description_text .mob").classList.toggle("mob--active");

		if (readMore.innerHTML === "Читать далее") {
	    	readMore.innerHTML = "Скрыть";
	  	} else {
	    	readMore.innerHTML = "Читать далее";
	  	}
	});
}

/*======================flat-open.html===range========================*/
var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 1000000,
    max = 10000000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "modern",
    type: "double",
    min: min,
    max: max,
    from: 1000000,
    to: 10000000,
    hideMinMax: false,
    hideFromTo: false, 
    prettify: true,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});