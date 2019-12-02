import Api from "../settings/api";
import Swal from "sweetalert2";

export default () => {
	const Posts = {
		init: () => {
			Posts.bind.init.call();
		},
		cache: {
			server: Api.getUrlApi("feed/logica.php"),
			ulPosts: $(".js-posts-tracker"),
			menuList: $(".js-list-trigger"),
			ulCategories: $(".js-categories-trigger")
		},
		bind: {
			init: () => {
				Posts.functions.listPosts();
				Posts.functions.listCategories();

				const userLogged = Posts.functions.getCookie("login");
				Posts.functions.userMenu(userLogged);

				$("body").on("click", ".js-delete-trigger", e => {
					Posts.functions.deletePost(e);
				});
			}
		},
		functions: {
			listPosts: () => {
				let data = new FormData();
				data.append("method", "listPosts");

				$.ajax({
					type: "POST",
					url: Posts.cache.server,
					data: data,
					contentType: false,
					processData: false,
					cache: false,
					dataType: "json",
					enctype: "multipart/form-data",
					success: response => {
						if (response.success) {
							const data = response.data;
							$.each(data, (index, value) => {
								let localDate = new Date(value.data_post).toLocaleDateString("pt-br");

								Posts.cache.ulPosts.append(
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
											<button class="btn btn--new js-edit-trigger" data-id="${value.id_post}">Editar Post</button>
											<button class="btn btn--del js-delete-trigger" data-id="${value.id_post}">Deletar Post</button>
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
			},

			deletePost: e => {
				Swal.fire({
					title: "Tem certeza que deseja excluir?",
					text: "Esta ação não poderá ser revertida!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Confirmar",
					cancelButtonText: "Cancelar"
				}).then(result => {
					if (result.value) {
						const $id = $(e.target).attr("data-id");

						let data = new FormData();
						data.append("post-id", $id);

						$.ajax({
							type: "POST",
							url: Posts.cache.server,
							data: data,
							contentType: false,
							processData: false,
							cache: false,
							dataType: "json",
							enctype: "multipart/form-data",
							success: response => {
								if (response.success) {
									Swal.fire("Feito!", "O Post foi excluído com sucesso.", "success");
								}
							},
							error: (xhr, thrownError) => {
								console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
								console.log(`Erro: ${thrownError}`);
							}
						});
					}
				});
			},

			listCategories: () => {
				let data = new FormData();
				data.append("method", "listCategories");

				$.ajax({
					type: "POST",
					url: Posts.cache.server,
					data: data,
					contentType: false,
					processData: false,
					cache: false,
					dataType: "json",
					enctype: "multipart/form-data",
					success: response => {
						if (response.success) {
							const data = response.data;
							$.each(data, (index, value) => {
								Posts.cache.ulCategories.append(
									`<li class="categories__type">
										<picture>
											<source srcset="${value.imagem}" />
											<img class="categories__type__img" src="${value.imagem}" alt="Ícone da categoria que representa o tipo de receitas" />
										</picture>
										<h3 class="categories__type__name ttl-tp4">${value.nome}</h3>
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
			},

			getCookie: name => {
				const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
				return v ? v[2] : null;
			},

			userMenu: userLogged => {
				let data = new FormData();
				data.append("email", userLogged);
				data.append("method", "verify");

				$.ajax({
					type: "POST",
					url: Posts.cache.server,
					data: data,
					contentType: false,
					processData: false,
					cache: false,
					dataType: "json",
					enctype: "multipart/form-data",
					success: response => {
						const data = response.data;
						Posts.cache.menuList.before(
							`<figure class="photo">
								<img class="photo__rounded" src="${Api.getUrlApi("usuario/uploads/images/")}${data.foto}" alt="Foto de perfil do Usuário que está logado no sistema." />
								<figcaption class="photo__authorName ttl-tp4">${data.nome}</figcaption>
							</figure>`
						);
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
