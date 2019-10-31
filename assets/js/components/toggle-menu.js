export default () => {
	let ToggleMenu = {
		init: () => {
			ToggleMenu.bind.call();
		},
		cache: {
			hamburger: $('.js-hamburger-trigger'),
			menu: $('.js-menu-trigger')
		},
		bind: () => {
			ToggleMenu.cache.hamburger.on('click', ToggleMenu.functions.openMenu);
		},
		functions: {
			openMenu: e => {
				e.preventDefault();

				ToggleMenu.cache.hamburger.toggleClass('is-active');
				ToggleMenu.cache.menu.toggleClass('menu--open');
				ToggleMenu.cache.menu.hasClass('menu--open') ? $('body').addClass('fixed') : $('body').removeClass('fixed');
			}
		}
	};

	ToggleMenu.init.call();
};
