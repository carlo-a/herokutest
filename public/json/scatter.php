<?php header("Access-Control-Allow-Origin: *");

    function scatterData(){
        $nameArray = ["Tokyo", "Japan", "Nihongo", "Kawaii", "Petko-sama", "Bogart Desu", "Utot Catalog", "Sapatos", "Font White", "Password"];
        $categoryCount = count($nameArray) - 1;
        $pointCount = 10;//rand(10, 100);

        $json = array();
        for($i = 0; $i < $categoryCount; $i++){
            $set = array('name' => $nameArray[$i]);
            $data = array();
            for($j = 0; $j < $pointCount; $j++){
                $point = [nrand(0, 100), nrand(0, 100)];
                array_push($data, $point);
            }
            $set['data'] = $data;
            array_push($json, $set);
        }
        return $json;
    }
    function nrand($mean, $sd){
        $x = mt_rand()/mt_getrandmax();
        $y = mt_rand()/mt_getrandmax();
        return sqrt(-2*log($x))*cos(2*pi()*$y)*$sd + $mean;
    }

    echo json_encode(scatterData());
?>