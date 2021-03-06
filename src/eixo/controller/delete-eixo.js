$(document).ready(function() {

    $('#table-eixo').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDEIXO = `IDEIXO=${$(this).attr('id')}`

        Swal.fire({
            title: 'Library',
            text: 'Deseja realmente excluir o registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
        }).then((result) => {

            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: IDEIXO,
                    url: "src/eixo/model/delete-eixo.php",
                    success: function(dados) {
                        Swal.fire({
                            title: 'Library',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-eixo').DataTable().ajax.reload()
                    }
                })

            }

        })
    })
})