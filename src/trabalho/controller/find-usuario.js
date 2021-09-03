$(document).ready(function() {

    $('#AUTOR').keyup(function(e) {
        e.preventDefault()

        let NOME = `NOME=${$(this).val()}`

        $('#autores').empty()

        fix_user = 0

        if ($(this).val().length >= 3) {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/find-usuario.php',
                success: function(dados) {
                    $('#autores').empty()
                    $('#autores-btn').empty()
                    if (Object.values(dados).length === 0) {
                        $('#autores').append(`<input type="text" name="" id="" class="form-control" value="Nenhum resultado encontrado" disabled>`)
                    } else {

                        for (const dado of dados) {
                            $('#autores').append(`<input type="text" name="" id="" class="form-control" value="${dado.NOME}" disabled></input>`)
                            $('#autores').append(`<input type="hidden" name="IDUSUARIO" id="IDUSUARIO" value="">`)
                            $('#autores-btn').append(`<button class="btn btn-dark fix_user" id="${dado.IDUSUARIO}" type="button"><i class="fas fa-user-check"></i></button>`)
                        }
                    }
                }
            })

        }
    })
})