export default () => {
	const ToggleMenu = {
		init: () => {
			ToggleMenu.bind.init.call();
		},
		cache: {
			hamburger: $(".js-hamburger-trigger"),
			menu: $(".js-menu-trigger"),
			body: $("body")
		},
		bind: {
			init: () => {
				ToggleMenu.cache.hamburger.on("click", ToggleMenu.functions.openMenu);
			}
		},
		functions: {
			openMenu: e => {
				e.preventDefault();

				ToggleMenu.cache.hamburger.toggleClass("is-active");
				ToggleMenu.cache.menu.toggleClass("menu--open");
				ToggleMenu.cache.menu.hasClass("menu--open") ? ToggleMenu.cache.body.removeClass("has-overflow") : ToggleMenu.cache.body.addClass("has-overflow");
			}
		}
	};

	ToggleMenu.init.call();
};
