<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
//esses header permitem o cors, mas não é 100% seguro deixar assim, precisa verificar

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    http_response_code(200);
    exit();
}

include 'conexao.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;

$stmt = $conn->prepare("DELETE FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

echo json_encode(["status" => "success"]);
?>
