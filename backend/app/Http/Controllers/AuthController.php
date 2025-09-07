<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create($fields);
        $token = $user->createToken($request->name);

        return response()->json(['name'=> $user, 'token' => $token->plainTextToken], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required',
        ]);

       $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
            return ['message' => 'Bad credentials'];
        }
        $token = $user->createToken($user->name);

        return response()->json(['name'=> $user, 'token' => $token->plainTextToken], 201);
    }
    public function logout (Request $request)
    {
       $request->user()->tokens()->delete();
       return ['message' => 'Logged out'];
    }
}
