/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a.scrolly');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);



let home1 = document.querySelector('.home1');
let home2 = document.querySelector('.home2');
let home3 = document.querySelector('.home3');
let home4 = document.querySelector('.home4');
let home5 = document.querySelector('.home5');
let aboutMe = document.querySelector('.about-me');
let aboutMe1 = document.querySelector('.aboutme1');
let aboutMe2 = document.querySelector('.aboutme2');
let aboutMe3 = document.querySelector('.aboutme3');
let aboutMe4 = document.querySelector('.aboutme4');
let techSkill1 = document.querySelector('.tech-skill1');
let techSkill2 = document.querySelector('.tech-skill2');
let techSkill3 = document.querySelector('.tech-skill3');
let techSkill4 = document.querySelector('.tech-skill4');
let techSkill5 = document.querySelector('.tech-skill5');
let techSkill6 = document.querySelector('.tech-skill6');
let experience1 = document.querySelector('.experience1');
let experience2 = document.querySelector('.experience2');
let experience3 = document.querySelector('.experience3');
let carerr = document.querySelector('.carerr');
let education = document.querySelector('.education');
let contact1 = document.querySelector('.contact1');
let contact2 = document.querySelector('.contact2');

window.addEventListener("scroll", function(){
	let value = window.scrollY;
	console.log("scrollY", value);

	if(value >400){
		aboutMe.style.animation='fadeInLeft 1s ease-out';
		home1.style.animation='disappear 1s ease-out forwards';
		home2.style.animation='disappear 1s ease-out forwards';
		home3.style.animation='disappear 1s ease-out forwards';
		home4.style.animation='disappear 1s ease-out forwards';
		home5.style.animation='disappear 1s ease-out forwards';
	}else if(value < 400){
		aboutMe.style.animation='disappear 1s ease-out forwards';
		home1.style.animation='bounceInLeft 1s ease-out';
		home2.style.animation='bounceInRight 2s ease-out';
		home3.style.animation='bounceInLeft 1.4s ease-out';
		home4.style.animation='bounceInDown 1.6s ease-out';
		home5.style.animation='bounceInUp 1.8s ease-out';
	}

	if(value >900){
		aboutMe1.style.animation='fadeInLeft 1s ease-out';
		aboutMe2.style.animation='fadeInDown 1s ease-out';
		aboutMe3.style.animation='fadeInUp 1s ease-out';
		aboutMe4.style.animation='fadeInRight 1s ease-out';
	}else if(value < 900){
		aboutMe1.style.animation='disappear 1s ease-out forwards';
		aboutMe2.style.animation='disappear 1s ease-out forwards';
		aboutMe3.style.animation='disappear 1s ease-out forwards';
		aboutMe4.style.animation='disappear 1s ease-out forwards';
	}
	
	if(value > 1400){
		techSkill1.style.animation= 'fadeInDown 1s ease-out';
		techSkill2.style.animation= 'fadeInUp 1s ease-out';
		techSkill3.style.animation= 'fadeInLeft 1s ease-out';
		techSkill4.style.animation = 'fadeInRight 1s ease-out';
		techSkill5.style.animation = 'fadeInLeft 1s ease-out';
		techSkill6.style.animation = 'fadeInRight 1s ease-out'	
	}else if(value < 1400){
		techSkill1.style.animation='disappear 1s ease-out both';
		techSkill2.style.animation='disappear 1s ease-out both';
		techSkill3.style.animation='disappear 1s ease-out both';
		techSkill4.style.animation='disappear 1s ease-out both';
		techSkill5.style.animation='disappear 1s ease-out both';
		techSkill6.style.animation='disappear 1s ease-out both';
	}
	
	if(value > 2960){
		experience1.style.animation= 'fadeInLeft 1s ease-out';
		experience2.style.animation= 'fadeInLeft 1s ease-out';
	}else if(value < 2960){
		experience1.style.animation='disappear 1s ease-out both';
		experience2.style.animation='disappear 1s ease-out both';
	}

	if(value > 3200){
		experience3.style.animation= 'fadeInUp 1s ease-out';
	}else if(value < 3200){
		experience3.style.animation='disappear 1s ease-out both';
	}
	
	if(value > 3750){
		carerr.style.animation= 'fadeInLeft 1s ease-out';
	}else if(value < 3750){
		carerr.style.animation='disappear 1s ease-out both';
	}

	if(value > 4200){
		education.style.animation= 'fadeInRight 1s ease-out';
	}else if(value < 4200){
		education.style.animation='disappear 1s ease-out both';
	}

	if(value > 4520){
		contact1.style.animation= 'fadeInDown 1s ease-out';
		contact2.style.animation= 'fadeInUp 1s ease-out';
	}else if(value < 4520){
		contact1.style.animation='disappear 1s ease-out both';
		contact2.style.animation='disappear 1s ease-out both';
	}

});





