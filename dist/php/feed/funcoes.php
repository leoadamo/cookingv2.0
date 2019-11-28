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


?>
