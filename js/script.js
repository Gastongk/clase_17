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


