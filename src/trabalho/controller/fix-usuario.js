$(document).ready(function() {
    $('#autores-btn').on('click', 'button.fix_user', function(e) {
        e.preventDefault()

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        $.ajax({
            dataType: 'json',
            type: 'POST',
            assync: true,
            data: IDUSUARIO,
            url: 'src/usuario/model/fix-usuario.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#resultAutor').append(`<input type="text" name="NOME" id="NOME" class="form-control" value="${dado.NOME}" disabled></input>`)
                    $('#resultAutor-btn').append(`<button class="btn btn-dark unpin_user" id="" nome="" type="button"><i class="fas fa-user-times"></i></button>`)
                }
            }
        })
    })
})