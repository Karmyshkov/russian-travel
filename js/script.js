$('.header__links').on('click', 'a', function(){
	$('.header__links a').removeClass('header__link_active');
	$(this).addClass('header__link_active');
});
