<?php
	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		require_once('../connect.php');
		require_once('../usuario/funcoes.php');

		switch($_POST['method']) {
			case 'verify':
				if(isset($_POST['email']) && isset($_POST['password'])) {
					$email = $_POST['email'];
					$password = $_POST['password'];
					$encPassword = base64_encode($password);
					$array = array($email, $encPassword);
					$user = verifyUser($pdo, $array);

					if($user) {
						$credentials = array(
							'id' => $user['id_usuario'],
							'name' => $user['nome'],
							'login' => $user['e_mail']
						);
						echo(json_encode(['isLogged' => true, 'user' => $credentials]));
					} else {
						$message = 'Usuário não cadastrado em nossa base de dados, por favor, tente novamente.';
						echo(json_encode(['isLogged' => false, 'title' => 'Erro!', 'message' => $message, 'btnText' => 'Ok']));
					}
				}
			break;

			case 'insert':
				if(isset($_POST['name']) && isset($_POST['bday']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['password']) && isset($_FILES['file'])) {

					$size = $_FILES['file']['size'];
					$ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
					$maxsize = 2 * 1024 * 1024;

					if($size <= $maxsize) {
						$filename = md5(date('Y-m-d H:i:s'));
						$file['photo'] = false;

						if(!empty($_FILES['file']['name'])) {
							if(!move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/images/' . $filename . '.' . $ext)) {
								$response = ['success' => false, 'message' => 'Erro ao fazer o upload de sua imagem, verfique as permissões do repositório de destino'];
							} else {
								$file['photo'] = true;
							}
						}

						if(!isset($response)) {
							$name = $_POST['name'];
							$email = $_POST['email'];
							$password = $_POST['password'];
							$encPassword = base64_encode($password);
							$birthday = $_POST['bday'];
							$birthdayConverted = date('Y-m-d', strtotime(str_replace('/', '-', $birthday)));
							$phone = $_POST['phone'];
							$photo = $file['photo'] ? $filename . '.' . $ext : null;
							$array = array($name, $email, $encPassword, $birthdayConverted, $phone, $photo);
							$user = insertUser($pdo, $array);
							if($user) echo(json_encode(['success' => true, 'title' => 'Sucesso!', 'message' => 'Seu cadastro foi realizado com sucesso, por favor efetue seu login.', 'btnText' => 'Acessar a página de Login']));
							else echo(json_encode(['success' => false, 'title' => 'Erro!', 'message' => 'Não foi possível realizar seu cadastro, por favor, tente novamente mais tarde.', 'btnText' => 'Ok']));
						}
					}
				}
			break;

			default:
				echo(json_encode(['success' => false, 'message' => 'Erro na requisição, verifique os parâmetros.']));

			break;
		}
	}
?>
