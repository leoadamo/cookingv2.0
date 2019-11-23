export default () => {
	const Auth = {
		init: () => {
			Auth.bind.call();
		},
		cache: {
			spinner: $(".js-loader-trigger"),
			logout: $(".js-logout-trigger")
		},
		bind: () => {
			Auth.functions.authenticate();
			Auth.cache.logout.on("click", Auth.functions.deleteCookie);
		},
		functions: {
			authenticate: () => {
				if (!Auth.functions.getCookie("login")) {
					if (window.location.pathname === "/feed.html" || window.location.pathname === "/contato.html" || window.location.pathname === "/intro.html") {
						window.location.replace("/login.html");
						return;
					}
				} else {
					if (window.location.pathname === "/login.html") {
						window.location.replace("/intro.html");
						return;
					}
				}
				Auth.functions.toggleSpinner();
			},
			getCookie: name => {
				const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
				return v ? v[2] : null;
			},
			setCookie: (name, value, days) => {
				const d = new Date();
				d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
				document.cookie = `${name} = ${value} ;path=/;expires= ${d.toGMTString()}`;
			},
			deleteCookie: () => {
				Auth.functions.setCookie("login", "", -1);
				window.location.reload();
			},
			toggleSpinner: () => {
				Auth.cache.spinner.toggleClass("hidden");
				$("body").addClass("has-overflow");
			}
		}
	};

	Auth.init.call();
};
