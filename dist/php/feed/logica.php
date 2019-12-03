<?php
	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		require_once('../connect.php');
		require_once('../feed/funcoes.php');

		switch($_POST['method']) {
			case 'listPosts':
				$posts = listPosts($pdo);
				if ($posts) {
					echo(json_encode(['data' => $posts, 'success' => true]));
				} else {
					$message = 'Não há posts disponíveis em nossa base de dados';
					echo(json_encode(['successs' => 'false', 'title' => 'Erro!', 'message' => $message]));
				}
			break;

			case 'listCategories':
				$categories = listCategories($pdo);
				if ($categories) {
					echo(json_encode(['data' => $categories, 'success' => true]));
				} else {
					$message = 'Não há posts disponíveis em nossa base de dados';
					echo(json_encode(['successs' => 'false', 'title' => 'Erro!', 'message' => $message]));
				}
			break;

			case 'verify':
				$email = $_POST['email'];
				$array = array($email);
				$user = userLogged ($pdo, $array);
				if ($user) {
					echo(json_encode(['data' => $user, 'success' => true]));
				}
			break;

			case 'delete':
				$id = $_POST['post-id'];
				$array = array($id);
				$status = deletePost ($pdo, $array);
				if ($status) {
					echo(json_encode(['success' => true, 'message' => 'Feito! Post excluído com sucesso.']));
				} else {
					echo(json_encode(['success' => false, 'message' => 'Erro ao excluir a postagem!']));
				}
			break;

			case 'update':
				$id = $_POST['id'];
				$title = $_POST['title'];
				$author = $_POST['author'];
				$description = $_POST['description'];
				$array = array($id, $title, $author, $description);
				$status = updatePost($pdo, $array);
				if ($status) {
					echo(json_encode(['success' => true, 'message' => 'Feito! Post atualizado com sucesso.']));
				} else {
					echo(json_encode(['success' => false, 'message' => 'Erro ao atualizar a postagem!']));
				}
			break;

			default:
				echo(json_encode(['success' => false, 'message' => 'Erro na requisição']));
			break;
		}
	}
?>
