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
			ulCategories: $(".js-categories-trigger"),
			menuList: $(".js-list-trigger")
		},
		bind: {
			init: () => {
				Posts.functions.listPosts();
				Posts.functions.listCategories();
				Posts.functions.userMenu(Posts.functions.getCookie("login"));

				$("body").on("click", ".js-edit-trigger", e => {
					e.preventDefault();
					Posts.functions.updatePost(e);
				});

				$("body").on("click", ".js-delete-trigger", e => {
					e.preventDefault();
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
							const $target = Posts.cache.ulPosts;

							$target.html(Posts.functions.buildPosts(data));
						}
					},
					error: (xhr, thrownError) => {
						console.log(`Erro na Requisição:\nStatus: ${xhr.status}`);
						console.log(`Erro: ${thrownError}`);
					}
				});
			},

			buildPosts: data => {
				let elements = [];

				$.each(data, (index, value) => {
					let localDate = new Date(value.data_post).toLocaleDateString("pt-br");

					elements.push(
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

				return elements;
			},

			deletePost: e => {
				Swal.fire({
					title: "Tem certeza que deseja excluir?",
					text: "Esta ação não poderá ser revertida!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#cb2b44",
					confirmButtonText: "Confirmar",
					cancelButtonText: "Cancelar",
					scrollbarPadding: false,
					preConfirm: () => {
						return new Promise(resolve => {
							const $id = $(e.target).attr("data-id");

							let data = new FormData();
							data.append("method", "delete");
							data.append("post-id", $id);

							$.ajax({
								type: "POST",
								url: Posts.cache.server,
								data: data,
								contentType: false,
								processData: false,
								cache: false,
								dataType: "json",
								enctype: "multipart/form-data"
							})
								.done(response => {
									Swal.fire({ text: response.message, icon: "success" });
									Posts.functions.listPosts();
								})
								.fail(() => {
									Swal.fire({
										title: response.message,
										icon: "error"
									});
								});
						});
					},
					allowOutsideClick: false
				});
			},

			updatePost: e => {
				Swal.mixin({
					input: "text",
					confirmButtonText: "Next &rarr;",
					showCancelButton: true,
					progressSteps: ["1", "2", "3"],
					scrollbarPadding: false
				})
					.queue([
						{
							title: "Título do Post",
							text: "Insira um novo título para a postagem:"
						},
						{
							title: "Nome do Autor",
							text: "Agora corrija o nome do Autor:"
						},
						{
							title: "Ajustes na descrição",
							text: "Caso encontre algum bug, corrija a descrição:"
						}
					])
					.then(result => {
						if (result.value) {
							const answers = JSON.stringify(result.value);
							Swal.fire({
								title: "Feito!",
								text: "Suas Alterações foram salvas",
								icon: "success",
								confirmButtonText: "Sair"
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
