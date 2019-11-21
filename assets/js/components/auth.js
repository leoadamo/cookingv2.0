export default () => {
	const Auth = {
		init: () => {
			Auth.bind.call();
		},
		cache: {
			spinner: $(".js-loader-trigger")
		},
		bind: () => {
			Auth.functions.authenticate();
		},
		functions: {
			authenticate: () => {
				if (!Auth.functions.getCookie("login")) {
					if (window.location.pathname === "/feed.html" || window.location.pathname === "/contato.html") {
						window.location.replace("/login.html");
						return;
					}
				}
				Auth.functions.toggleSpinner();
			},
			getCookie: name => {
				const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
				return v ? v[2] : null;
			},
			toggleSpinner: () => {
				Auth.cache.spinner.toggleClass("hidden");
				$("body").addClass("has-overflow");
			}
		}
	};

	Auth.init.call();
};
