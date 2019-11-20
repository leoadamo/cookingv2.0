<?php
	function newContact($pdo, $array) {
		$sql = 'INSERT INTO contato (nome, e_mail, assunto, mensagem) VALUES (?, ?, ?, ?)';
		try {
			$query = $pdo->prepare($sql);
			$contact = $query->execute($array);
			return $contact;
		} catch (PDOException $e) {
			echo('Erro ao inserir novo usuário:'.$e->getMessage());
		}
	}
?>
