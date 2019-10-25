export default () => {
	var toggleMenu = {
		init: () => {
			toggleMenu.bind.init.call();
		},
		cache: {
			hamburger: $('.js-hamburger-trigger'),
			menu: $('.js-menu-trigger')
		},
		bind: {
			init: () => {
				toggleMenu.cache.hamburger.on('click', toggleMenu.functions.openMenu);
			}
		},
		functions: {
			openMenu: e => {
				e.preventDefault();

				toggleMenu.cache.hamburger.toggleClass('is-active');
			}
		}
	};

	toggleMenu.init.call();
};
