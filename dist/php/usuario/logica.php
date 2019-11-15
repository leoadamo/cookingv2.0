<?php
	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	require_once('../connect.php');
	require_once('../usuario/funcoes.php');

	$data = json_decode(file_get_contents('php://input'));

	switch ($data->method) {
		case 'verify':
			$email = $data->email;
			$password = $data->password;
			//$passEncryption = base64_encode($password);
			$array = array($email, $password);
			$user = verifyUser($pdo, $array);
			$user ? $credentials = array(
				'id' => $user['id_usuario'],
				'name' => $user['nome'],
				'login' => $user['e_mail']
			);
			echo(json_encode(['isLogged' => true, 'user' => $credentials]));
			: $message = 'Usuário não cadastrado no sistema!';
				echo(json_encode(['msg' => $message]));
			break;

		case 'insert':
			$email = $data->email;
			$senha = $data->password;
			$array = array($email, $senha);
			$user = insertUser($pdo, $array);
			$user ? echo(json_encode(['success' => true])) : echo(json_encode(['msg' => 'Erro ao inserir usuário!']));
			break;

		default:
			echo('Erro na requisição, verifique os parâmetros.');
			break;
	}
?>
