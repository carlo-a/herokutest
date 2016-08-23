<?php
function randSeed(){
	list($usec, $sec) = explode(' ', microtime());
	srand((float) $sec + ((float) $usec * 100000));
}

$names = ["DPN1CI01_PN1_25", "DPN1APO2_PN1_52", "GDA", "ADM", "COR", "ACO", "ECO", "ONE", "NEO"];
//$keys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];
$keys = ["04/25 09:00", "04/25 10:00", "04/25 11:00", "04/25 12:00", "04/25 13:00", "04/25 14:00", "04/25 15:00", "04/25 16:00", "04/25 17:00", "04/25 18:00", "04/25 19:00"];

$json = [];
foreach($names as $index_i => $name){
    srand($index_i);
    $set = ["name" => $name];
    foreach($keys as $index_j => $key){
        $set[$key] = rand(85,95);
    }
    array_push($json, $set);
}

randSeed();
foreach($json as $index => $set){
    foreach($set as $key => $value){
        if($key!="name"){
            $json[$index][$key] = $value + rand(0, 5);
        }
    }
}

echo json_encode($json);