<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserEditRequest;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class UserEditController extends Controller
{
    function useredit(Request $request) {
        try {
            $request->validate([
                "name"=>'required|min:3|max:20',
                "email"=>'required|email',
            ]);
        } catch (ValidationException $e) {
            return response(['status' => 'error', 'message' => $e->errors()]);
        }
        
        User::where('id', $request->id)->update(['name' => $request->name, 'email' => $request->email]);

        return response(['status' => 'success', 'message' => __('Sikeres módosítás.')]);

    }
}
