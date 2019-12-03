<?php

	function listPosts($pdo) {
		$sql = 'SELECT * FROM posts';
		$query = $pdo->prepare($sql);

		try {
			if($query->execute()) {
				$posts = $query->fetchAll(PDO::FETCH_ASSOC);
				return $posts ? $posts : false;
			}
		} catch (PDOException $e) {
			echo('Erro na consulta:'.$e->getMessage());
		}
	}

	function listCategories($pdo) {
		$sql = 'SELECT * FROM categorias';
		$query = $pdo->prepare($sql);

		try {
			if($query->execute()) {
				$categories = $query->fetchAll(PDO::FETCH_ASSOC);
				return $categories ? $categories : false;
			}
		} catch (PDOException $e) {
			echo('Erro na consulta:'.$e->getMessage());
		}
	}

	function userLogged ($pdo, $array) {
		$sql = 'SELECT nome, foto FROM usuarios WHERE e_mail = ?';
		try {
			$query = $pdo->prepare($sql);

			if($query->execute($array)) {
				$user = $query->fetch(PDO::FETCH_ASSOC);
				return $user ? $user : false;
			}
		} catch (PDOException $e) {
			echo('Erro na requisição:'.$e->getMessage());
		}
	}

	function deletePost($pdo, $array) {
		$sql = "DELETE FROM posts WHERE id_post = ?";

		try {
			$query = $pdo->prepare($sql);
			$success = $query->execute($array);
			return $success ? $success : false;

		} catch (PDOException $e) {
			echo('Erro na requisição:'.$e->getMessage());
		}
	}

	function updatePost($pdo, $array) {
		$sql = "UPDATE posts SET autor = ?, titulo = ?, texto = ? WHERE id_post = ?";

		try {
			$query = $pdo->prepare($sql);
			$success = $query->execute($array);
			return $success ? $success : false;

		} catch (PDOException $e) {
			echo('Erro na requisição:'.$e->getMessage());
		}
	}
?>
