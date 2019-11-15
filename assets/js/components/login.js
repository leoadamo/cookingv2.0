export default () => {
	const Login = {
		init: () => {
			Login.bind.call();
		},
		cache: {
			server: 'http://localhost/projects/cookingv2.0/dist/php/usuario/logica.php',
			form: $('.js-login-trigger')
		},
		bind: () => {
			Login.functions.validate();
		},
		functions: {
			validate: () => {
				Login.cache.form.validate({
					validClass: 'success',
					rules: {
						email: {
							required: true,
							email: true
						},
						password: {
							required: true,
							minlength: 5
						},
					},
					messages: {
						email: 'Por favor, digite um endereço de e-mail válido',
						password: {
							required: 'Por favor, forneça sua senha',
							minlength: 'Sua senha deve conter no mínimo 5 caracteres'
						},
					},
					submitHandler: (form, e) => {
						e.preventDefault();

						Login.functions.verifyUser(form);
					}
				});
			},
			verifyUser: form => {
				const values = $(form).serializeArray();
				const formData = {};
				let data;

				$.each(values, (i, obj) => {
					formData[obj.name] = obj.value;
				});

				formData['method'] = 'verify';

				data = JSON.stringify(formData);

				$.ajax({
					type: 'POST',
					url: Login.cache.server,
					data: data,
					dataType: 'json',
					contentType: 'application/json; charset=utf-8;',
					success: response => {
						if (response.isLogged) {
							Login.functions.setCookie('login', response.user.login, 1);
							window.location.replace('/feed.html');
						} else console.log(response.msg);
					},
					error: (xhr, thrownError) => {
						console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
						console.log(`Erro: ${thrownError}`);
					}
				});

				$(form).trigger('reset');
				$(form)
					.find('*')
					.removeClass('success');
			},
			setCookie: (name, value, days) => {
				const d = new Date();
				d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
				document.cookie = `${name} = ${value} ;path=/;expires= ${d.toGMTString()}`;
			},
			deleteCookie: name => {
				Login.functions.setCookie(name, '', -1);
			}
		}
	};

	Login.init.call();
};
