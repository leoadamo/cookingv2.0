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
				Object.keys(form.cache).forEach(key => {
					form.functions.validate(form.cache[key]);
				});
			}
		},
		functions: {
			validate: form => {
				$(form).validate({
					rules: {
						email: {
							required: true,
							email: true
						},
						password: {
							required: true,
							minlength: 5
						},
						confirm_password: {
							required: true,
							minlength: 5,
							equalTo: '#password'
						},
						name: {
							required: true
							// lettersonly: true
						},
						about: {
							required: true
						},
						message: {
							required: true,
							maxlength: 50
						}
					},
					messages: {
						email: 'Por favor, digite um endereço de e-mail válido',
						password: {
							required: 'Por favor, forneça sua senha',
							minlength: 'Sua senha deve conter no mínimo 5 caracteres'
						},
						confirm_password: {
							required: 'Por favor, forneça sua senha',
							minlength: 'Sua senha deve conter no mínimo 5 caracteres',
							equalTo: 'As senhas não conferem'
						},
						name: {
							required: 'Por favor, preencha este campo'
							// lettersonly: 'Por favor, digite apenas letras'
						},
						about: {
							required: 'Por favor, preencha este campo'
						},
						message: {
							required: 'Por favor, preencha este campo',
							maxlength: 'Limite de 50 caracteres atingido'
						}
					}
				});
			}
		}
	};

	form.init.call();
};
