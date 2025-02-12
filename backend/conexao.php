<?php
$host = "localhost";
$user = "ricardo";
$password = "senha123";
$dbname = "myAppDB";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
