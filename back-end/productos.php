<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $host = '127.0.0.1';
    $user = 'root';
    $pass = '';
    $db = 'productos';
    
    $conn = mysqli_connect($host, $user, $pass, $db);
    
    if (!$conn) {
        die("Error: " . mysqli_connect_error());
    }
    
    $select_query = "SELECT * FROM productos";
    
    $result = mysqli_query($conn, $select_query);

    if ($result) {
        $productos = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $productos[] = $row;
        }
        echo json_encode($productos);
       
    } else {
        echo json_encode(array('error' => mysqli_error($conn))); 
    }
    mysqli_close($conn);

}else {
    
    http_response_code(405); 
    echo json_encode(array('message' => 'Método no permitido'));
}