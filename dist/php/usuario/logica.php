<?php
	header('Content-Type: charset="utf-8"');
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

			if($user) {
				$credentials = array(
					'id' => $user['id_usuario'],
					'name' => $user['nome'],
					'login' => $user['e_mail']
				);
				//setcookie('loginCredentials', json_encode($credentials), 0, '/');
				echo(json_encode(['isLogged' => true]));
			} else {
				$message = 'Usuário não cadastrado no sistema!';
				echo(json_encode(['msg' => $message]));
			}
			break;

		case 'insert':
			$name = $data->nome;
			$email = $data->e_mail;
			/* FALTA INSERIR CAMPO SENHA NO BANCO E ENCRIPTAR A SENHA AO INSERIR */
			$born = $data->dt_nasc;
			$phone = $data->telefone;
			$array = array($name, $email, $born, $phone); // SENHA VAI TAMBÉM
			insertUser($pdo, $array);
			break;

		default:
			echo('Erro na requisição, verifique os parâmetros.');
			break;
	}
?>
