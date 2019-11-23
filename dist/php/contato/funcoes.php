<?php
	function newContact($pdo, $array) {
		$sql = 'INSERT INTO contato (nome, e_mail, assunto, mensagem) VALUES (?, ?, ?, ?)';
		try {
			$query = $pdo->prepare($sql);
			if($query->execute($array)) return true;
			else return false;
		} catch (PDOException $e) {
			echo('Erro ao inserir sua mensagem:'.$e->getMessage());
		}
	}
?>
