import Api from "../settings/api";

export default () => {
	const Posts = {
		init: () => {
			Posts.bind.init.call();
		},
		cache: {
			server: Api.getUrlApi("feed/logica.php"),
			ul: $(".posts")
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
							console.log(response);
						}
					}
				});
			}
		}
	};

	Posts.init.call();
};
