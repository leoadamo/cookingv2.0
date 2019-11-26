import Swal from "sweetalert2";
import Api from "../settings/api";

export default () => {
	const Register = {
		init: () => {
			Register.bind.init.call();
		},
		cache: {
			server: Api.getUrlApi("usuario/logica.php"),
			form: $(".js-register-trigger")
		},
		bind: {
			init: () => {
				Register.functions.validate();
			}
		},
		functions: {
			validate: () => {
				Register.cache.form.validate({
					validClass: "success",
					rules: {
						name: {
							required: true,
							lettersonly: true
						},
						bday: {
							required: true
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
							equalTo: "#password"
						}
					},
					messages: {
						name: {
							required: "Por favor, preencha este campo",
							lettersonly: "Por favor, digite apenas letras"
						},
						bday: "Por favor, selecione uma data válida",
						phone: "Por favor, digite um número de telefone válido",
						email: "Por favor, digite um endereço de e-mail válido",
						password: {
							required: "Por favor, forneça sua senha",
							minlength: "Sua senha deve conter no mínimo 5 caracteres"
						},
						confirm_password: {
							required: "Por favor, forneça sua senha",
							minlength: "Sua senha deve conter no mínimo 5 caracteres",
							equalTo: "As senhas não conferem"
						}
					},
					submitHandler: (form, e) => {
						e.preventDefault();

						Register.functions.verifyUser(form);
					}
				});
			},
			verifyUser: form => {
				let data = new FormData(form);
				data.append("method", "insert");

				$.ajax({
					type: "POST",
					url: Register.cache.server,
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
								window.location.replace("/login.html");
							});
						} else {
							Swal.fire({
								title: response.title,
								text: response.message,
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
			}
		}
	};

	Register.init.call();
};
