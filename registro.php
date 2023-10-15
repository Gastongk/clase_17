<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['usuario']) && isset($_POST['contraseña'])) {
        $usuario = $_POST['usuario'];
        $contraseña = $_POST['contraseña'];

        $host = '127.0.0.1';
        $user = 'root';
        $pass = '';
        $db = 'clientes';

        $conn = mysqli_connect($host, $user, $pass, $db);

        if (!$conn) {
            die("Error: " . mysqli_connect_error());
        }

        // Evita la inserción directa de contraseñas en texto claro
        $contraseñaSegura = password_hash($contraseña, PASSWORD_BCRYPT);

        $query = "INSERT INTO usuarios (nombre, contraseña) VALUES ('$usuario', '$contraseñaSegura')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(array('message' => 'Usuario agregado correctamente'));
        } else {
            echo json_encode(array('message' => 'Error al agregar el usuario: ' . mysqli_error($conn)));
        }

        mysqli_close($conn);
    }
}
?>

