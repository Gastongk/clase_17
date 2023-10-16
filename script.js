
/* function enviarFormulario (form_ok,url_ok) {
$(form_ok).on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: url_ok,
        method: 'post',
        data: $(form_ok).serialize(),
        dataType: 'json',
        success: function(data) {
                var resultadoLabel = $('#resultado');
                resultadoLabel.html(data.message);
           },
        error: function(error) {
            $('#error').html(error.mensaje);
        }
    });
});
} */


function enviarFormulario(form_id, url_ok, resultado_id) {
    $(form_id).on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: url_ok,
            method: 'post',
            data: $(form_id).serialize(),
            dataType: 'json',
            success: function(data) {
                var resultadoLabel = $(resultado_id);
                resultadoLabel.html(data.message);
            },
            error: function(error) {
                $(resultado_id).html(error.mensaje);
            }
        });
    });
}

enviarFormulario('#saludo-form', 'saludo.php','#resultado');
enviarFormulario('#conversion-form', 'conversion.php','#resultado2');
enviarFormulario('#registro-form', 'registro-login.php','#resultado3');
enviarFormulario('#login-form', 'registro-login.php','#resultado4');


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
}); 


$('#saludo-form').on('submit',function(e){
    e.preventDefault();
    $.ajax({
        url:'saludo.php',
        method: 'post',
        data: $('#saludo-form').serialize(),
        dataType: 'json',
        success: function(data){
            var resultadoLabel = $('#resultado');
            resultadoLabel.html(data.message);
             $('#success').html('<p> '+res +'</p>'); 
             console.log(res); 
        },
        error: function(error){
            $('#error').html(error.mensaje);
             console.log(error); 
        }
    })
});

*/


