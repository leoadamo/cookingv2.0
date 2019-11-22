<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	header('Content-Type: application/json; charset="utf-8"');
	header('Access-Control-Allow-Methods: *');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');

	require_once('../connect.php');
	require_once('../contato/funcoes.php');

	$data = json_decode(file_get_contents('php://input'));

	$nome = $data->name;
	$email = $data->email;
	$assunto = $data->about;
	$message = $data->message;

	$array = array($nome, $email, $assunto, $message);
	$contact = newContact($pdo, $array);

	if($contact) {
		require_once('../PHPMailer/src/PHPMailer.php');
		require_once('../PHPMailer/src/Exception.php');
		require_once('../PHPMailer/src/SMTP.php');

		$mail = new PHPMailer();
		$mail->SetLanguage("br");
		$mail->IsSMTP();
		$mail->isHTML(true);
		$mail->SMTPDebug = 1; //exibe erros e mensagens, 0 não exibe nada
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "tls";

		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587;
		$mail->Username = "cookingv2.0@gmail.com";
		$mail->Password = "Senha5Cook";
		$mail->CharSet = "utf-8";

		$mail->From = "cookingv2.0@gmail.com"; //remetente
		$mail->FromName = "Cooking";
		$mail->AddAddress($email);

		$mail->Subject = "Contato - Cooking";
		$mail->Body = "Olá ".$nome.",<br><br>Obrigado por entrar em contato conosco, retornaremos assim que possível!";

		if(!$mail->Send()){
			$message = $mail->ErrorInfo;
		} else {
			$message = "Sucesso!";
		}
		echo(json_encode(['success' => true]));
	}
	else echo(json_encode(['msg' => 'Erro']));

?>
