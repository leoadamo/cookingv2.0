<?php
  $dsn = 'mysql:dbname=cookingv2.0;host=localhost;';
  $dbuser = 'mamp';
  $dbpass = 'root';

  try {
    $pdo = new PDO(
      $dsn,
      $dbuser,
      $dbpass,
      array(PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
						PDO::ATTR_PERSISTENT => false));
  } catch (PDOException $e) {
    echo 'Erro:'.$e->getMessage();
  }

?>
