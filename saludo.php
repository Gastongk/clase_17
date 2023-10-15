<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $nombre = $_POST['nombre'];
  $saludo = "¡Hola $nombre!";
  echo $saludo;
} else {
  echo "¡Hola, usuario!";
}

?>

