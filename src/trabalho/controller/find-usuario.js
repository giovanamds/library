$(document).ready(function() {

    $('#AUTOR').keyup(function(e) {
        e.preventDefault()

        let NOME = `NOME=${$(this).val()}`

        $('#autores').empty()
        $('.result-autor').empty()
            //$('#lista').empty()

        if ($(this).val().length >= 3) {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/find-usuario.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#autores').append(`<input type="text" name="" id="${dado.IDUSUARIO}" class="form-control" value="${dado.NOME}" disabled>`)
                    }
                    $('.result-autor').click(function(e) {
                        e.preventDefault()
                        $('#autores').empty()
                        $('#AUTOR').empty()
                        $('.result-autor').append(`<input type="text" name="" id="${dado.IDUSUARIO}" class="form-control" value="${dado.NOME}">`)
                    })
                }
            })

        }
    })
})