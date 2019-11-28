<?php
	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		require_once('../connect.php');
		require_once('../feed/funcoes.php');

		switch($_POST['method']) {
			case 'list':
				$posts = listPosts($pdo);
				if ($posts) {
					echo(json_encode(['data' => $posts, 'success' => true]));
				} else {
					$message = 'Não há posts disponíveis em nossa base de dados';
					echo(json_encode(['successs' => 'false', 'title' => 'Erro!', 'message' => $message]));
				}
			break;

			default:
				echo(json_encode(['success' => false, 'message' => 'Erro na requisição']));
			break;
		}
	}
?>
