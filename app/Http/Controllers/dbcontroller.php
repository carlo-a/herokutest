<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class dbcontroller extends Controller
{
    //
    public function getData(){
    	$data = DB::table('restaurants')->get();
    	echo json_encode($data);
    }
}
