<?php
if ($_REQUEST['endpoint']=='saludo'){

include 'saludo.html';
}

if ($_REQUEST['endpoint']=='conversion'){

    include 'conversion.html';
}

if($_REQUEST['endpoint']=='registro'){

    include 'registro.html';
}
?>