<?php
require_once('./Autoload.php');
$data = json_decode(file_get_contents('php://input'), true);
$lat = $data['lat'];
$lon = $data['lon'];

$result = config\Weather::GetValues($lat, $lon); // Supondo que isso retorne um objeto \stdClass
$response = json_encode($result); // Converte o objeto em uma string JSON

header('Content-Type: application/json'); // Define o cabeçalho para indicar que a resposta é JSON
echo $response; // Imprime a resposta JSON
