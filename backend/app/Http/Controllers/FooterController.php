<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FooterController extends Controller
{
    function index(){
        $footer = config('footer.list');
        return response()->json($footer);
    }
}
