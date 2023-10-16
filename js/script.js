$('#saludo-form').on('submit',function(e){
    e.preventDefault();
    $.ajax({
        url:'saludo.php',
        method: 'post',
        data: $('#formulario').serialize(),
        success: function(res){
            $('#success').html('<p> '+res +'</p>');
           /*  console.log(res); */
        },
        error: function(error){
            $('#error').html(error.mensaje);
            /* console.log(error); */
        }
    })
});

$('#conversion-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'conversion.php',
        method: 'post',
        data: $('#conversion-form').serialize(),
        dataType: 'json',
        success: function(data) {
                var resultadoLabel = $('#resultado');
                resultadoLabel.html(data.message);
           /*  $('#resultado').html('<p>' + data.message + '</p>'); */
        },
        error: function(error) {
            $('#error').html(error.mensaje);
            /* console.log(error); */
        }
    });
});

$('#registro-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'registro-login.php',
        method: 'post',
        data: $('#registro-form').serialize(),
        dataType: 'json',
        success: function(data) {
                var resultadoLabel = $('#resultado');
                resultadoLabel.html(data.message);
           /*  $('#resultado').html('<p>' + data.message + '</p>'); */
        },
        error: function(error) {
            $('#error').html(error.mensaje);
            /* console.log(error); */
        }
    });
});

$('#login-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'registro-login.php',
        method: 'post',
        data: $('#login-form').serialize(),
        dataType: 'json',
        success: function(data) {
                var resultadoLabel = $('#resultado');
                resultadoLabel.html(data.message);
           /*  $('#resultado').html('<p>' + data.message + '</p>'); */
        },
        error: function(error) {
            $('#error').html(error.mensaje);
            /* console.log(error); */
        }
    });
});

$(document).ready(function() {
    $.ajax({
        url: 'productos.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.length > 0) {
                var tableBody = $('#productos').find('tbody');

                $.each(data, function(index, product) {
                    var row = '<tr>' +
                        '<td>' + product.id + '</td>' +
                        '<td>' + product.nombre + '</td>' +
                        '<td>' + product.precio + '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });
            } else {
                $('#productos').html('No hay productos disponibles.');
            }
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
});

/* $(document).ready(function() {
    console.log('El documento está listo.'); // Agrega un console.log aquí
    $.ajax({
        url: 'productos.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.length > 0) {
                var table = '<table><tr><th>ID</th><th>Nombre</th><th>Precio</th></tr>';
                $.each(data, function(index, product) {
                    table += '<tr><td>' + product.id + '</td><td>' + product.nombre + '</td><td>' + product.precio + '</td></tr>';
                });
                table += '</table>';
                $('#productos').html(table);
            } else {
                $('#productos').html('No hay productos disponibles.');
            }
        },
        error: function(error) {
            console.error('Error:', error); // Agrega un console.log o console.error aquí
        }
    });
}); */


