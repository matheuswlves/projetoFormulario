<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];  
    $server = 'localhost';
    $user = 'root';
    $senha_banco = '';
    $banco = 'formulario';
    $conn = new mysqli($server, $user, $senha_banco, $banco); 
    if ($conn->connect_error){
        die("Falha ao se comunicar com banco de dados: " . $conn->connect_error);
    }
    $smtp = $conn->prepare("INSERT INTO clientes (nome, email, senha, sexo) VALUES (?,?,?)");
    $smtp->bind_param("sss", $nome, $email, $senha);
    if($smtp->execute()){
        echo "Usuário cadastrado com sucesso!";
    } else {
        echo "Erro no cadastro do usuário: " . $smtp->error;
    }
    $smtp->close();
    $conn->close();
?>