$(document).ready(function() {
    $('#resultAutor-btn').on('click', 'button.unpin_user', function(e) {
        e.preventDefault()

        $('#resultAutor').empty()
        $('#resultAutor-btn').empty()

        //let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        //$.ajax({
        //    dataType: 'json',
        //    type: 'POST',
        //    assync: true,
        //    data: IDUSUARIO,
        //    url: 'src/usuario/model/fix-usuario.php',
        //    success: function(dados) {
        //        for (const dado of dados) {
        //            $('#resultAutor').empty()
        //            $('#resultAutor-btn').empty()
        //        }
        //    }
        //})

    })
})