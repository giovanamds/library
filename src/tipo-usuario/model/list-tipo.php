<?php
    // Realizar o include da conexão com o banco de dados
    include('../../conexao/conn.php');
    
    // Obter o request vindo do anco de dados
    $requestData = $_REQUEST;

    // Obter as colunas vindas do request
    $colunas = $requestData['columns'];

    // Prepara o SQL básico para consulta ao banco de dados
    $sql = "SELECT IDTIPO_USUARIO, DESCRICAO FROM TIPO_USUARIO WHERE 1=1";

    // Obter o total de registros cadastrados no banco de dados
    $resultado = $pdo->query($sql);
    $qtdeLinhas = $resultado->rowCount();

    // Verificação se existe algum filtro a ser pesquisado
    $filtro = $requestData['search']['value'];
    if(!empty($filtro)){
        // Montar a lógica para executar o filtro
        // Aqui também determina quais colunas farão parte da minha pesquisa
        $sql .= " AND (IDTIPO_USUARIO LIKE '%$filtro%' ";
        $sql .= " OR DESCRICAO LIKE '%$filtro%') ";

    }

    // Obter o total de dados filtrados
    $resultado = $pdo->query($sql);
    $totalFiltrados = $resultado->rowCount();

    // Criar a lógica para ordenação de dados em tela
    $colunaOrdem = $requestData['order'][0]['column']; // Obtendo a posição da coluna a ser ordenada 
    $ordem = $colunas[$colunaOrdem]['data']; // Obtendo o nome da coluna que será organizada
    $direcao = $requestData['order'][0]['dir']; // Obtendo a direção que será ordenado

    // Criar os limites de dados que irão aparecer na tela
    $inicio = $requestData['start']; // Obtendo o início do limite
    $tamanho = $requestData['length']; // Obtendo o tamanho do limite

    // Criar a query de ordenação e limite de dados
    $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho";
    $resultado = $pdo->query($sql);
    $dados = array();
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map('utf8_encode', $row);
    }

    // Montar o ojeto json de retorno nos padrões do DataTables
    $json_data = Array(
        "draw" => intval($requestData['draw']),
        "recordsTotal" => intval($qtdeLinhas),
        "recordsFiltered" => intval($totalFiltrados),
        "data" => $dados
    );

    // Retorno o elemento JSON
    echo json_encode($json_data);


    

