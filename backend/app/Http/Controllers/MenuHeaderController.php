<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuHeaderController extends Controller
{
    function index(){
        $menus = config('menu-header');
        return response()->json($menus);
    }
}
