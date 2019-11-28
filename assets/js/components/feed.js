import Api from "../settings/api";

export default () => {
	const Posts = {
		init: () => {
			Posts.bind.init.call();
		},
		cache: {
			server: Api.getUrlApi("feed/logica.php"),
			ul: $(".js-posts-tracker")
		},
		bind: {
			init: () => {
				Posts.functions.listPosts();
			}
		},
		functions: {
			listPosts: () => {
				let data = new FormData();
				data.append("method", "list");

				$.ajax({
					type: "POST",
					url: Posts.cache.server,
					data: data,
					contentType: false,
					processData: false,
					cache: false,
					dataType: "json",
					enctype: "multpart/form-data",
					success: response => {
						if (response.success) {
							const data = response.data;

							$.each(data, (index, value) => {
								let localDate = new Date(value.data_post).toLocaleDateString("pt-br");

								Posts.cache.ul.append(
									`<li class="posts__item">
											<picture>
												<source srcset="${value.foto_perfil}"/>
												<img class="posts__item__avatar src="${value.foto_perfil}" alt="Foto de perfil do autor da postagem" />
											</picture>
											<div class="info">
												<h3 class="ttl-tp4">${value.autor}</h3>
												<time class="info__date" datetime="${value.data_post}">${localDate}</time>
											</div>

											<picture>
												<source srcset="${value.imagem}" />
												<img class="posts__image" src="${value.imagem}" alt="Imagem de um post da receita descrita no site" />
											</picture>
											<h2 class="posts__title ttl-tp4">${value.titulo}</h2>
											<p class="posts__item__description">${value.texto}</p>
										</li>`
								);
							});
						}
					},
					error: (xhr, thrownError) => {
						console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
						console.log(`Erro: ${thrownError}`);
					}
				});
			}
		}
	};

	Posts.init.call();
};
