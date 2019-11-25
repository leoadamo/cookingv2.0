import Swal from "sweetalert2";

export default () => {
	const Contact = {
		init: () => {
			Contact.bind.init.call();
		},
		cache: {
			server: "http://localhost:8888/Projects/cookingv2.0/dist/php/contato/logica.php",
			form: $(".js-contact-trigger"),
			spinner: $(".js-loader-trigger")
		},
		bind: {
			init: () => {
				Contact.functions.validate();
			}
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

						let timerInterval;
						Swal.fire({
							title: "Enviando sua mensagem!",
							html: "Isso pode levar alguns <b></b> milisegundos.",
							timer: 3000,
							timerProgressBar: true,
							onBeforeOpen: () => {
								Swal.showLoading();
								timerInterval = setInterval(() => {
									Swal.getContent().querySelector("b").textContent = Swal.getTimerLeft();
								}, 100);
							},
							onClose: () => {
								clearInterval(timerInterval);
							}
						});
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
							Swal.fire({
								title: "Sucesso!",
								text: "Obrigado por enviar sua mensagem! Em breve você receberá um e-mail de confirmação.",
								icon: "success",
								confirmButtonText: "Ir para o Feed"
							});
							$("button.swal2-confirm").on("click", () => {
								window.location.replace("/feed.html");
							});
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
			},
			toggleSpinner: () => {
				Auth.cache.spinner.toggleClass("hidden");
				$("body").addClass("has-overflow");
			}
		}
	};

	Contact.init.call();
};
