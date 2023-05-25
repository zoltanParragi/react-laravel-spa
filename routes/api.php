<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('/users', function(){
    return response(User::get(), 200, [
        'Content-Type' => 'application/jsnon'
    ]);
});

Route::get('/user/{id}', function($id){
    return response(User::find($id), 200, [
        'Content-Type' => 'application/jsnon'
    ]);
});
