<?php

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $_GET['get']
));
curl_exec($curl);

// echo "sup";
// $html = file_get_contents('http://192.168.0.44/sd/20220101/recdata.db');

// echo $html;

// $start = stripos($html, 'id="Births"');

// $end = stripos($html, '</ul>', $offset = $start);

// $length = $end - $start;

// $htmlSection = substr($html, $start, $length);

// echo $htmlSection;

?>