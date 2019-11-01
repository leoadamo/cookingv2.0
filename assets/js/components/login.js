export default () => {
	let Login = {
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
						confirm_password: {
							required: true,
							minlength: 5,
							equalTo: '#password'
						},
						name: {
							required: true,
							lettersonly: true
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
							required: 'Por favor, preencha este campo',
							lettersonly: 'Por favor, digite apenas letras'
						},
						about: {
							required: 'Por favor, preencha este campo'
						},
						message: {
							required: 'Por favor, preencha este campo',
							maxlength: 'Limite de 50 caracteres atingido'
						}
					},
					submitHandler: (form, e) => {
						e.preventDefault();

						Login.functions.verifyUser(form);
					}
				});
			},
			verifyUser: form => {
				let values = $(form).serializeArray();
				let formData = {};
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
						console.log(response);
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
			}
		}
	};

	Login.init.call();
};
