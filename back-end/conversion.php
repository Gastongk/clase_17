<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['cantidad']) && isset($_POST['moneda_origen']) && isset($_POST['moneda_destino'])) {
        $cantidad = floatval($_POST['cantidad']);
        $moneda_origen = $_POST['moneda_origen'];
        $moneda_destino = $_POST['moneda_destino'];

        if ($moneda_origen === 'USD' && $moneda_destino === 'EUR') {
            $resultado = $cantidad * 0.8417;
            echo json_encode(array('message' => $cantidad . ' ' . $moneda_origen . ' = ' . $resultado . ' ' . $moneda_destino));
        } elseif ($moneda_origen === 'EUR' && $moneda_destino === 'USD') {
            $resultado = $cantidad * 1.1875;
            echo json_encode(array('message' => $cantidad . ' ' . $moneda_origen . ' = ' . $resultado . ' ' . $moneda_destino));
        } else {
            echo json_encode(array('message' => 'Conversión no admitida'));
        }
    }
}else{
    include '../front-end/conversion.html';
}

?>