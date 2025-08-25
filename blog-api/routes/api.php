<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::prefix('v1')->middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('articles', ArticleController::class, [
        'only' => ['index', 'store', 'update', 'destroy']
    ]);
});
