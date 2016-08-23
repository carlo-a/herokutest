<?php
function randSeed(){
	list($usec, $sec) = explode(' ', microtime());
	srand((float) $sec + ((float) $usec * 100000));
}

$names = ["HQC", "C2C", "GDA", "ADM", "COR", "ACO", "ECO", "ONE", "NEO"];
$keys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];

$json = [];
foreach($names as $index_i => $name){
    srand($index_i);
    $set = ["name" => $name];
    foreach($keys as $index_j => $key){
        $set[$key] = rand(10,100);
    }
    array_push($json, $set);
}

randSeed();
foreach($json as $index => $set){
    foreach($set as $key => $value){
        if($key!="name"){
            $json[$index][$key] = $value + rand(0, 10);
        }
    }
}

echo json_encode($json);