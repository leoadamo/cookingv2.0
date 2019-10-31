<?php
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	require_once('../connect.php');
	require_once('../usuario/funcoes.php');

	$action = $_SERVER['QUERY_STRING'];
	$json = file_get_contents('php://input');
	$data = json_decode($json);

	switch ($action) {
		case 'verify':
			$email = $data->e_mail;
			$password = $data->senha;
			$passEncryption = base64_encode($password);
			$array = array($email, $passEncryption);
			$user = verifyUser($pdo, $array);

			// VERIFICAR ESSA VALIDAÇÃO NA PRÓXIMA AULA
			if($user) {
				session_start();
				$_SESSION['logged'] = true;
				$_SESSION['id'] = $user['id'];
				$_SESSION['name'] = $user['nome'];
			} else {
				echo('Usuário Inexistente!'); // VERIFICAR COMO RETORNAR O ERRO AO FRONT
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
