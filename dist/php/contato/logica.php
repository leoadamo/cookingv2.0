<?php
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
	if($contact) echo(json_encode(['success' => true]));
	else echo(json_encode(['msg' => 'Erro ao inserir usuário!']));

?>
