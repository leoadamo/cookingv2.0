export default () => {
	const Register = {
		init: () => {
			Register.bind.call();
		},
		cache: {
			server: 'http://localhost:8888/Projects/cookingv2.0/dist/php/usuario/logica.php',
			form: $('.js-register-trigger')
		},
		bind: () => {
			Register.functions.validate();
		},
		functions: {
			validate: () => {
				Register.cache.form.validate({
					validClass: 'success',
					rules: {
						name: {
							required: true,
							lettersonly: true
						},
						bday: {
							required: true,
							date: true
						},
						phone: {
							required: true,
							number: true,
							maxlength: 11
						},
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
						}
					},
					messages: {
						name: {
							required: 'Por favor, preencha este campo',
							lettersonly: 'Por favor, digite apenas letras'
						},
						bday: 'Por favor, selecione uma data válida',
						phone: 'Por favor, digite um número de telefone válido',
						email: 'Por favor, digite um endereço de e-mail válido',
						password: {
							required: 'Por favor, forneça sua senha',
							minlength: 'Sua senha deve conter no mínimo 5 caracteres'
						},
						confirm_password: {
							required: 'Por favor, forneça sua senha',
							minlength: 'Sua senha deve conter no mínimo 5 caracteres',
							equalTo: 'As senhas não conferem'
						}
					},
					submitHandler: (form, e) => {
						e.preventDefault();

						Register.functions.verifyUser(form);
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

				formData['method'] = 'insert';

				data = JSON.stringify(formData);
				console.log(data)
				$.ajax({
					type: 'POST',
					url: Register.cache.server,
					data: data,
					contentType: 'application/json; charset=utf-8;',
					success: response => {
						if (response.success) {
							window.location.replace('/login.html');
						} else console.log(response.msg);
						console.log(response)
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

	Register.init.call();
};
