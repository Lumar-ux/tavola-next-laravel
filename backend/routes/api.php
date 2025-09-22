<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuHeaderController;
use App\Http\Controllers\MenuController;
use Illuminate\Http\Request;

Route::get('/use', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::apiResource('article', ArticleController::class);
Route::apiResource('user', UserController::class);
Route::post('/tokens/create', [AuthController::class, 'createToken']);

Route::get('/menu-header', [MenuHeaderController::class, 'index']);
Route::get('/menu', [MenuController::class, 'index']);
Route::get('/info', [InfoController::class, 'index']);

Route::apiResource('message', ArticleController::class);

