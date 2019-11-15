<?php
	// THIS FUNCTION VERIFY IF THE USER EXISTS IN DATABASE OR NOT
	function verifyUser($pdo, $array) {
		$sql = 'SELECT * FROM usuarios WHERE e_mail = ? AND senha = ?';
		try {
			$query = $pdo->prepare($sql);

			if($query->execute($array)) {
				$user = $query->fetch(PDO::FETCH_ASSOC);
				return $user ? $user : false;
			}
		} catch (PDOException $e) {
			echo('Erro na consulta:'.$e->getMessage());
		}
	}

	// THIS FUNCTION INSERT A NEW USER INTO DB
	function insertUser($pdo, $array) {
		$sql = 'INSERT INTO usuarios (e_mail, senha) VALUES (?, ?)';
		try {
			$query = $pdo->prepare($sql);
			$user = $query->execute($array);

			return $user;
		} catch (PDOException $e) {
			echo('Erro ao inserir novo usuário:'.$e->getMessage());
		}
	}
?>
