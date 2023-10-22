<?php

if ($_REQUEST['endpoint']=='saludo'){

include 'saludo.php';
}

if ($_REQUEST['endpoint']=='conversion'){

    include 'conversion.php';
}

if($_REQUEST['endpoint']=='registro'){

    include 'registro-login.php';
}

if($_REQUEST['endpoint']=='login'){

    include 'registro-login.php';
}

if($_REQUEST['endpoint']=='productos'){

    include '../front-end/productos.html';
}
?>