<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(StoreUserRequest $request)
    {
        return User::create($request->all());
    }

    public function login(LoginUserRequest $request)
    {
        $authResult = Auth::attempt($request->only(['email', 'password']));
        if (!$authResult) {
            return response()->json([
                'message' => 'Wrong email or password'
            ], 401);
        }

        $user = Auth::user();
        assert($user instanceof \App\Models\User);
        $user->tokens()->delete();

        return response()->json([
            'token' => $user->createToken("Token by email: {$user->email}")->plainTextToken
        ]);
    }
}
