$(document).ready(function() {

    $('.nav-link').click(function(e) {
        e.preventDefault()

        // Capturar o link do elemento do html
        let url = $(this).attr('href')

        // Limpar a div container com id conteúdo
        $('#conteudo').empty()

        // Inserir o novo conteúdo na div container com id conteúdo
        $('#conteudo').load(url)
    })

})