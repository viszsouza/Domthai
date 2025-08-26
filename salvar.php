<?php
// Configuração do banco
$servername = "localhost";
$username   = "root";      // seu usuário MySQL
$password   = "";          // sua senha MySQL
$dbname     = "viszdev_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Receber dados do formulário
$nome     = $_POST['nome'];
$email    = $_POST['email'];
$telefone = $_POST['telefone'];

// Preparar SQL
$sql = "INSERT INTO leads_catalogo (nome, email, telefone) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $telefone);

// Executar e verificar
if ($stmt->execute()) {
    // Redireciona para catálogo ou WhatsApp
    header("Location: index.html"); 
    exit();
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>