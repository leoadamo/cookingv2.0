export default () => {
	const Contact = {
		init: () => {
			Contact.bind.call();
		},
		cache: {
			server: "http://localhost:8888/Projects/cookingv2.0/dist/php/contato/logica.php",
			form: $(".js-contact-trigger")
		},
		bind: () => {
			Contact.functions.validate();
		},
		functions: {
			validate: () => {
				Contact.cache.form.validate({
					validClass: "success",
					rules: {
						name: {
							required: true,
							lettersonly: true
						},
						email: {
							required: true,
							email: true
						},
						about: {
							required: true,
							minlength: 5
						},
						message: {
							required: true,
							minlength: 20
						}
					},
					messages: {
						name: {
							required: "Por favor, preencha este campo",
							lettersonly: "Por favor, digite apenas letras"
						},
						email: "Por favor, digite um endereço de e-mail válido",
						about: {
							required: "Por favor, informe o assunto da mensagem",
							minlength: "O assunto deve conter no mínimo 5 caracteres"
						},
						message: {
							required: "Por favor, preencha esse campo",
							minlength: "Sua mensagem deve conter no mínimo 20 caracteres"
						}
					},
					submitHandler: (form, e) => {
						e.preventDefault();

						Contact.functions.verifyContact(form);
					}
				});
			},
			verifyContact: form => {
				const values = $(form).serializeArray();
				const formData = {};
				let data;

				$.each(values, (i, obj) => {
					formData[obj.name] = obj.value;
				});

				data = JSON.stringify(formData);

				$.ajax({
					type: "POST",
					url: Contact.cache.server,
					data: data,
					contentType: false,
					dataType: "json",
					success: response => {
						if (response.success) {
							window.location.replace("/feed.html");
						} else console.log(response.message);
					},
					error: (xhr, thrownError) => {
						console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
						console.log(`Erro: ${thrownError}`);
					}
				});

				$(form).trigger("reset");
				$(form)
					.find("*")
					.removeClass("success");
			}
		}
	};

	Contact.init.call();
};
