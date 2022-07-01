$(function(){

	$("a[href*='#']").click(function(){
		if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
			var t=$(this.hash);
			if(t=t.length&&t||$("[name="+this.hash.slice(1)+"]"),t.length - 60){
				var a=t.offset().top;
				return $("html,body").animate({scrollTop:a},500)
			}
		}
	})

	// header fixed
	//-------------------------------------------------------------//
	//var togSrc = ["images/logos/logo.svg", "images/logos/logo_color.svg"];
	if($(window).scrollTop() >= 100){
		$('header').addClass('fixed');
		//$('#logo img').attr('src', togSrc.reverse()[0]);
	} else {
		$('header').removeClass('fixed');
		//$('#logo img').attr('src', togSrc.reverse()[1]);
	}

	// form control
	//-------------------------------------------------------------//
	$('.form-control').focusout(function(){
		if($(this).val() != ''){
			$(this).addClass('filled');
		} else {
			$(this).removeClass('filled');
		}
	})

	// Burger icon
	//-------------------------------------------------------------//
	$('.menuBurger').click(function(){
		$(this).toggleClass('open');
		$('.mainMenu').toggleClass('open');
	})

	// search-mobile
	//-------------------------------------------------------------//
	$('.search-icon').click(function(){
		$('.search-header').toggleClass('open');
		$('body').toggleClass('open-search');
	})

	// Cookies
	//-------------------------------------------------------------//
	$('.btn-cookies').click(function(){
		document.cookie="accept_cookies=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		$('.cookies').fadeOut("fast");
	})

	// Acoordion and show toggle
	//-------------------------------------------------------------//
	$('.toggle, .toggle-icon').click(function(){
		$(this).toggleClass('open');
		$(this).siblings('ul').toggleClass('open')
	})

	$('.btn-toggle').click(function(){
		data=$(this).attr('data-toggle');
		$(this).siblings().removeClass('active');
		$(data).siblings().removeClass('open');
		$(this).toggleClass('active');
		$(data).toggleClass('open');
	})

	// Popups
	//-------------------------------------------------------------//
	$('.btn-popup').click(function(){
		data=$(this).attr('data');
		$(data).addClass('show').fadeIn("normal")
	});

	$('.popup').click(function(){
		$(this).removeClass('show').fadeOut("normal")
	})

	$('.popup-container').click(function(e){
		e.stopPropagation()
	})

	$('.btn-popup-close').click(function(e){
		data=$(this).attr('data-close');
		$(data).removeClass('show').fadeOut("normal")
	})

	// Modernizr
	//-------------------------------------------------------------//
	if(!Modernizr.objectfit){
		$('.img-frame').each(function(){
			var $container=$(this),imgUrl=$container.find('img').prop('src');
			if(imgUrl){
				$container.css('backgroundImage','url('+imgUrl+')').addClass('compat-object-fit');
			}
		})
	}

})
