export default () => {
	const Auth = {
		init: () => {
			Auth.bind.call();
		},
		cache: {},
		bind: () => {
			Auth.functions.authenticate();
		},
		functions: {
			authenticate: () => {
				if ((!Auth.functions.getCookie('login') && window.location.pathname === '/feed.html') || window.location.pathname === '/contato.html') window.location.replace('/login.html');
			},
			getCookie: name => {
				const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
				return v ? v[2] : null;
			}
		}
	};

	Auth.init.call();
};
