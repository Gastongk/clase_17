
function enviarFormulario(form_id, url_ok, resultado_id, endpoint_id) {
    $(form_id).on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: url_ok + '?endpoint=' + endpoint_id, //para agregar el endpoint  ?endpoint= y el valor
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

enviarFormulario('#saludo-form', '../back-end/saludo.php','#resultado','endpoint');
enviarFormulario('#conversion-form', '../back-end/conversion.php','#resultado2','endpoint');
enviarFormulario('#registro-form', '../back-end/registro-login.php','#resultado3','endpoint');
enviarFormulario('#login-form', '../back-end/registro-login.php','#resultado4','endpoint');


$(document).ready(function() {
    $.ajax({
        url: '../back-end/productos.php',
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