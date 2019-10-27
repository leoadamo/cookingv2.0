export default () => {
	var form = {
		init: () => {
			form.bind.init.call();
		},
		cache: {
			login: $('.js-login-trigger'),
			register: $('.js-register-trigger'),
			contact: $('.js-contact-trigger')
		},
		bind: {
			init: () => {
				form.cache.login.on('submit', form.functions.validate);
				form.cache.register.on('submit', form.functions.validate);
				form.cache.contact.on('submit', form.functions.validate);
			}
		},
		functions: {
			validate: function(e) {
				e.preventDefault();
				const target = $(this);

				console.log(target);
			}
		}
	};

	form.init.call();
};
