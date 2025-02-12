<?php
include 'conexao.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
//esses header permitem o cors, mas não é 100% seguro deixar assim, precisa verificar

$result = $conn->query("SELECT * FROM usuarios");
$usuarios = [];

while ($row = $result->fetch_assoc()) {
    $usuarios[] = $row;
}

echo json_encode($usuarios);
?>
