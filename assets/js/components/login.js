export default () => {
	let Login = {
		init: () => {
			Login.bind.call();
		},
		cache: {
			server: 'http://localhost/projects/cookingv2.0/dist/php/usuario/',
			loginForm: $('.js-login-trigger')
		},
		bind: () => {
			Login.cache.loginForm.on('submit', e => {
				Login.functions.verifyUser(e);
			});
		},
		functions: {
			verifyUser: e => {
				e.preventDefault();

				let values = Login.cache.loginForm.serializeArray();
				let formData = {};

				$.each(values, (i, obj) => {
					formData[obj.name] = obj.value;
				});

				$.ajax({
					type: 'GET',
					url: Login.cache.server + 'logica.php?verify',
					data: JSON.stringify(formData),
					contentType: 'application/json; charset=utf-8;',
					success: response => {
						console.log(`Sucesso ${response.data}`);
					},
					error: (xhr, thrownError) => {
						console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
						console.log(`Erro: ${thrownError}`);
					}
				});
			}
		}
	};

	Login.init.call();
};
