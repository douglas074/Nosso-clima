<?php
namespace config;

class Weather
{
    public static function GetValues(float $lat, float $lon): \stdClass|string
    {
        $apiKey = 'sua chave da api';
        $url = "http://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&units=metric&lang=pt_br&exclude=current&appid=$apiKey";
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $response = curl_exec($curl);
        curl_close($curl);
        if ($response === false) {
            return curl_error($curl);
        } else {
            return json_decode($response);
        }
    }
}
