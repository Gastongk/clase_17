<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['usuario']) && isset($_POST['contraseña']) && isset($_POST['form_id'])) {
        $usuario = $_POST['usuario'];
        $contraseña = $_POST['contraseña'];
        $formId = $_POST['form_id'];

        $host = '127.0.0.1';
        $user = 'root';
        $pass = '';
        $db = 'clientes';

        $conn = mysqli_connect($host, $user, $pass, $db);

        if (!$conn) {
            die("Error: " . mysqli_connect_error());
        }

        if ($formId === 'registro-form') {
            $query = "INSERT INTO usuarios (nombre, contraseña) VALUES ('$usuario', '$contraseña')";

            if (mysqli_query($conn, $query)) {
                echo json_encode(array('message' => 'Usuario agregado correctamente'));
            } else {
                echo json_encode(array('message' => 'Error al agregar el usuario: ' . mysqli_error($conn)));
            }
        } else if ($formId === 'login-form') {
            $query = "SELECT nombre, contraseña FROM usuarios WHERE nombre = '$usuario'";
            $result = mysqli_query($conn, $query);

            if ($result) {
                if (mysqli_num_rows($result) > 0) {
                    $row = mysqli_fetch_assoc($result);
                    $contraseñaAlmacenada = $row['contraseña'];

                    if ($contraseña === $contraseñaAlmacenada) {
                        echo json_encode(array('message' => 'Usuario logueado correctamente'));
                      /*    $_SESSION['autenticado'] = true;
                        header('Location: productos.html');
                        exit;  */
                    } else {
                        echo json_encode(array('message' => 'Contraseña incorrecta'));
                    }
                } else {
                    echo json_encode(array('message' => 'Usuario no registrado'));
                }
            } else {
                echo json_encode(array('message' => 'Error en la consulta: ' . mysqli_error($conn)));
            }
        }

        mysqli_close($conn);
    } else {
        echo json_encode(array('message' => 'Faltan datos de formulario'));
    }
} else {
    echo json_encode(array('message' => 'Acción no válida'));
}
?>
