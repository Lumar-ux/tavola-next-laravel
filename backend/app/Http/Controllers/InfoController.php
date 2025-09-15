<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoController extends Controller
{
    function index(){
        $footer = config('info');
        return response()->json($footer);
    }
}
