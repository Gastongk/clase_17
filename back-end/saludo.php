<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (isset($_POST['nombre'])&& $_POST['nombre'] !== ''){
   $nombre = $_POST['nombre'];
  echo json_encode(array('message' => 'Hola ' . $nombre));
  } else {
  echo json_encode(array ('message'=> 'Hola Usuario'));
  }
} else {
  include '../front-end/saludo.html';
}
?>
