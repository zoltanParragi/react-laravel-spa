<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $users = User::get();
    return view('welcome')->with('users', $users);
});

Route::get('/dynamic/{path?}', function () {
    return view('dynamic');
});

Route::get('/dynamic/{path?}/{path2?}', function () {
    return view('dynamic');
});
