import Swal from "sweetalert2";
import Api from "../settings/api";

export default () => {
	const Contact = {
		init: () => {
			Contact.bind.init.call();
		},
		cache: {
			server: Api.getUrlApi("contato/logica.php"),
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
							timer: 2500,
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
				let data = new FormData(form);

				$.ajax({
					type: "POST",
					url: Contact.cache.server,
					data: data,
					contentType: false,
					processData: false,
					cache: false,
					dataType: "json",
					enctype: "multipart/form-data",
					success: response => {
						if (response.success) {
							Swal.fire({
								title: response.title,
								text: response.message,
								icon: "success",
								confirmButtonText: response.btnText
							});
							$("button.swal2-confirm").on("click", () => {
								window.location.replace("/feed.html");
							});
						} else {
							Swal.fire({
								title: response.title,
								text: response.messages,
								icon: "error",
								confirmButtonText: response.btnText
							});
						}
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
