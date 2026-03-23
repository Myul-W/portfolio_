/*
 * Copyright (c) 2022 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function () {

	"use strict";

	// here all ready functions

	grax_tm_modalbox_news();
	grax_tm_popupscroll();
	grax_tm_ripple();
	grax_tm_color_switcher();
	grax_tm_switcher_opener();
	grax_tm_cursor_switcher();
	grax_tm_videoplayer();
	grax_tm_hero_title();
	grax_tm_wavefy();
	grax_tm_nav_bg();
	grax_tm_anchor();
	grax_tm_down();
	grax_tm_hamburger();
	grax_tm_cursor();
	grax_tm_imgtosvg();
	grax_tm_popup();
	grax_tm_data_images();
	grax_tm_contact_form();
	grax_tm_parallax_effect();
	grax_tm_totop();

	jQuery(window).load('body', function () {
		grax_tm_my_load();
	});
	jQuery(window).on('resize', function () {
		grax_tm_modalbox_news();
	});
	jQuery(window).on('scroll', function () {
		grax_tm_progress_line();
	});

});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function grax_tm_modalbox_news() {

	"use strict";

	var modalBox = jQuery('.grax_tm_modalbox_news');
	var list = jQuery('.grax_tm_news .news_list ul li');
	var closePopup = modalBox.find('.close');

	list.each(function () {
		var element = jQuery(this);
		var details = element.find('.list_inner').html();
		var buttons = element.find('.details .title a,.grax_tm_full_link');
		var mainImage = element.find('.main');
		var imgData = mainImage.data('img-url');
		var title = element.find('.title');
		var titleHref = element.find('.title a').html();
		buttons.on('click', function () {
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({ backgroundImage: 'url(' + imgData + ')' });
			title = modalBox.find('.title');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});

}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function grax_tm_popupscroll() {

	"use strict";

	var WW = jQuery(window).width();
	var H = jQuery(window).height();
	var scrollable = jQuery('.scrollable');

	var popupBox = jQuery('.grax_tm_modalbox_news .description_wrap');

	if (WW >= 1200) {
		popupBox.css({ height: H - 140 });
	} else {
		popupBox.css({ height: H });
	}

	scrollable.each(function () {
		var element = jQuery(this);
		var wH = jQuery(window).height();

		element.css({ height: wH - 140 });

		if (WW >= 1200) {
			element.css({ height: wH - 140 });
		} else {
			element.css({ height: wH });
		}

		element.niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function grax_tm_ripple() {

	"use strict";

	jQuery('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function grax_tm_color_switcher() {

	"use strict";

	var list = jQuery('.grax_tm_settings .colors li a');

	list.on('click', function () {
		var element = jQuery(this);
		var elval = element.attr('class');
		element.closest('.grax_tm_all_wrap').attr('data-color', '' + elval + '');
		return false;
	});
}

function grax_tm_switcher_opener() {

	"use strict";

	var settings = jQuery('.grax_tm_settings');
	var button = settings.find('.link');
	var direction = settings.find('.direction li a');
	var light = settings.find('.direction li a.light');
	var dark = settings.find('.direction li a.dark');

	button.on('click', function () {
		var element = jQuery(this);
		if (element.hasClass('opened')) {
			element.removeClass('opened');
			element.closest('.grax_tm_settings').removeClass('opened');
		} else {
			element.addClass('opened');
			element.closest('.grax_tm_settings').addClass('opened');
		}
		return false;
	});

	direction.on('click', function () {
		var element = jQuery(this);
		if (!element.hasClass('active')) {
			direction.removeClass('active');
			element.addClass('active');
		}
	});

	dark.on('click', function () {
		var el = jQuery(this);
		jQuery('body').addClass('dark');
		jQuery('.grax_tm_partners').addClass('opened');
		el.closest('.grax_tm_settings').addClass('changed');
		return false;
	});

	light.on('click', function () {
		var ele = jQuery(this);
		jQuery('body').removeClass('dark');
		jQuery('.grax_tm_partners').removeClass('opened');
		ele.closest('.grax_tm_settings').removeClass('changed');
		return false;
	});
}

function grax_tm_cursor_switcher() {

	"use strict";

	var wrapper = jQuery('.grax_tm_all_wrap');
	var button = jQuery('.grax_tm_settings .cursor li a');
	var show = jQuery('.grax_tm_settings .cursor li a.show');
	var hide = jQuery('.grax_tm_settings .cursor li a.hide');

	button.on('click', function () {
		var element = jQuery(this);
		if (!element.hasClass('showme')) {
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click', function () {
		wrapper.attr('data-magic-cursor', '');
	});
	hide.on('click', function () {
		wrapper.attr('data-magic-cursor', 'hide');
	});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function grax_tm_videoplayer() {
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// ---------------   MY WAYPOINT    --------------------
// -----------------------------------------------------

function grax_tm_my_waypoint() {

	"use strict";

	var myWaypoint = jQuery('.my_waypoint');

	myWaypoint.each(function () {

		var element = jQuery(this);

		element.waypoint({
			handler: function () {
				element.addClass('load');
			},
			offset: "80%"
		});
	});
}

// -----------------------------------------------------
// -----------------   HERO TITLE    -------------------
// -----------------------------------------------------

function grax_tm_hero_title() {

	"use strict";

	var heroText = jQuery('.fn_animation');

	heroText.each(function () {
		var element = $(this);
		var start = '<span class="word">';
		var char = '<span class="character">';
		var end = '</span>';
		var space = '&nbsp;';
		var allHTML = '';
		$.each(element.text().split(' '), function (i, e) {
			if (i !== 0) {
				allHTML += char + space + end;
			}
			allHTML += start;
			$.each(e.split(''), function (ii, ee) {
				allHTML += char + ee + end;
			});
			allHTML += end;
		});
		element.html(allHTML).addClass('ready');
	});
}

function grax_tm_hero_title_fade() {
	"use strict";

	var mySpan = jQuery('.fn_animation .character');
	var a = 0;
	var speed = 30;
	var wait = 500;
	mySpan.each(function (i) {
		var element = jQuery(this);
		setTimeout(function () { element.addClass('opened'); }, i * speed);
		a = i * speed;
	});
	setTimeout(function () {
		jQuery('.grax_tm_topbar').addClass('opened');
		jQuery('.grax_tm_down').addClass('opened');
	}, a + wait);
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function grax_tm_my_load() {

	"use strict";

	grax_tm_my_waypoint();
	setTimeout(function () { grax_tm_preloader(); }, 1000);
	setTimeout(function () { grax_tm_hero_title_fade(); }, 3000);
}

// -----------------------------------------------------
// ------------------   WAVIFY   -----------------------
// -----------------------------------------------------

function grax_tm_wavefy() {
	"use strict";

	jQuery('#wave_img').wavify({
		height: 10,
		bones: 3,
		amplitude: 45,
		color: $('#wave_img').data('color'),
		speed: 0.25
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function grax_tm_preloader() {

	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function grax_tm_nav_bg() {

	"use strict";

	jQuery(window).on('scroll', function () {
		var progress = jQuery('.progressbar');
		var topbar = jQuery('.grax_tm_topbar');
		var WinOffset = jQuery(window).scrollTop();

		if (WinOffset >= 100) {
			topbar.addClass('animate');
			progress.addClass('animate');
		} else {
			topbar.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -----------  ANCHOR NAVIGATION ------------------
// -------------------------------------------------

function grax_tm_anchor() {

	"use strict";

	jQuery('.anchor_nav').onePageNav();
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function grax_tm_down() {

	"use strict";

	jQuery('.grax_tm_talk .button a').on('click', function () {
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function grax_tm_hamburger() {

	"use strict";

	var hamburger = jQuery('.hamburger');
	var mobileMenu = jQuery('.grax_tm_mobile_menu .dropdown');

	hamburger.on('click', function () {
		var element = jQuery(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});

	jQuery('.grax_tm_mobile_menu .dropdown .dropdown_inner ul li a').on('click', function () {
		jQuery('.hamburger').removeClass('is-active');
		jQuery('.grax_tm_mobile_menu .dropdown').slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function grax_tm_cursor() {
	"use strict";

	var myCursor = jQuery('.mouse-cursor');

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");

			// 바깥 원 부드럽게 따라오기용 현재 위치
			let outerX = 0, outerY = 0;
			let mouseX = 0, mouseY = 0;
			let outerRotation = 0;

			// 바깥 원 느리게 따라오기 + 회전 (requestAnimationFrame)
			function animateOuter() {
				outerX += (mouseX - outerX) * 0.12;
				outerY += (mouseY - outerY) * 0.12;
				outerRotation += 1.2;
				t.style.transform = "translate(" + outerX + "px, " + outerY + "px) rotate(" + outerRotation + "deg)";
				requestAnimationFrame(animateOuter);
			}
			animateOuter();

			window.onmousemove = function (s) {
				mouseX = s.clientX;
				mouseY = s.clientY;
				e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";

				// 혜성 꼬리 파티클
				createComet(s.clientX, s.clientY);
			};

			// 혜성 꼬리
			function createComet(x, y) {
				var particle = document.createElement('div');
				particle.style.cssText = [
					'position:fixed',
					'pointer-events:none',
					'border-radius:50%',
					'z-index:49',
					'left:' + x + 'px',
					'top:' + y + 'px',
					'width:4px',
					'height:4px',
					'background:' + getRandomPurple(),
					'box-shadow: 0 0 6px 2px rgba(181,110,255,0.6)',
					'transform:translate(-50%,-50%)',
					'transition:all 0.5s ease',
					'opacity:0.8'
				].join(';');
				document.body.appendChild(particle);
				setTimeout(function () {
					particle.style.opacity = '0';
					particle.style.transform = 'translate(-50%,-50%) scale(0.2)';
				}, 30);
				setTimeout(function () {
					particle.remove();
				}, 550);
			}

			// 클릭 시 별똥별 터짐
			document.addEventListener('click', function (s) {
				var rect = this.getBoundingClientRect();
				var x = rect.left + rect.width / 2;
				var y = rect.top + rect.height / 2;
				for (var i = 0; i < 10; i++) {
					createStarBurst(x, y, i);
				}
			});

			function createStarBurst(x, y, index) {
				var star = document.createElement('div');
				var angle = (index / 10) * 360;
				var distance = 40 + Math.random() * 30;
				var size = 2 + Math.random() * 3;
				star.style.cssText = [
					'position:fixed',
					'pointer-events:none',
					'border-radius:50%',
					'z-index:49',
					'left:' + x + 'px',
					'top:' + y + 'px',
					'width:' + size + 'px',
					'height:' + size + 'px',
					'background:' + getRandomPurple(),
					'box-shadow: 0 0 4px 1px rgba(181,110,255,0.8)',
					'transform:translate(-50%,-50%)',
					'transition:all 0.6s ease-out',
					'opacity:1'
				].join(';');
				document.body.appendChild(star);
				setTimeout(function () {
					var rad = angle * Math.PI / 180;
					star.style.transform = 'translate(calc(-50% + ' + (Math.cos(rad) * distance) + 'px), calc(-50% + ' + (Math.sin(rad) * distance) + 'px))';
					star.style.opacity = '0';
				}, 30);
				setTimeout(function () {
					star.remove();
				}, 680);
			}

			function getRandomPurple() {
				var colors = ['#b56eff', '#d09cff', '#8b3fff', '#c77dff', '#ffffff'];
				return colors[Math.floor(Math.random() * colors.length)];
			}

			$("body").on("mouseenter", "a, .cursor-pointer", function () {
				for (var i = 0; i < 10; i++) {
					createStarBurst(mouseX, mouseY, i);
				}
			});
			$("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
			});

			// 마우스 커서 모양
			e.innerHTML = '✦';
			e.style.cssText += 'font-size:25px; color:#b56eff; background:none; box-shadow:none; display:flex; align-items:center; justify-content:center;';

			e.style.visibility = "visible";
			t.style.visibility = "visible";
		}
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function grax_tm_imgtosvg() {

	"use strict";

	jQuery('img.svg').each(function () {

		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function grax_tm_popup() {

	"use strict";

	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
	animateClass: 'animated',
	offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function grax_tm_data_images() {

	"use strict";

	var data = jQuery('*[data-img-url]');

	data.each(function () {
		var element = jQuery(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function grax_tm_contact_form() {

	"use strict";

	jQuery(".contact_form #send_message").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function (data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function grax_tm_parallax_effect() {

	"use strict";

	if ($('.parallax').length > 0) {
		var scene = $('.parallax').get(0);
		var parallax = new Parallax(scene, {
			relativeInput: true,
			onReady: function () {
				console.log('ready!');
			}
		});
	}
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container) {

	"use strict";

	container.find('.progress_inner').each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		pBar.css({ width: pValue + '%', backgroundColor: pColor });
		setTimeout(function () { pBarWrap.addClass('open'); });
	});
}

jQuery('.kioto_progress').each(function () {

	"use strict";

	var pWrap = jQuery(this);
	pWrap.waypoint({ handler: function () { tdProgress(pWrap); }, offset: '90%' });
});

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});

function grax_tm_progress_line() {

	"use strict";

	var line = jQuery('.progressbar .line');
	var documentHeight = jQuery(document).height();
	var windowHeight = jQuery(window).height();
	var winScroll = jQuery(window).scrollTop();
	var value = (winScroll / (documentHeight - windowHeight)) * 100;
	var position = value;

	line.css('height', position + "%");
}

/****************************/
/********** TOTOP ***********/
/****************************/

function grax_tm_totop() {

	"use strict";

	jQuery(".progressbar a").on('click', function (e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}