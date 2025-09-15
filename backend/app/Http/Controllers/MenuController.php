<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    function index(){
        $menus = config('menu');
        return response()->json($menus);
    }
}
