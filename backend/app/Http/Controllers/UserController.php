<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function index(){
        $user = User::all();
        return response()->json($user);
    }
    function show($id){
        $userId = User::getUserNamesById($id);
        return response()->json($userId);
    }
        public function create()
    {
        return view('users.create');
    }
    // Enregistrer un nouvel utilisateur
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email:rfc,dns|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $validated['password'] = Hash::make($validated['password']);
        $user = User::create($validated);

        return response()->json($user, 201);
    }

    // Formulaire de modification (pour Blade)
    public function edit($id)
    {
        return "Modifier l'utilisateur " . $id;
    }

    // Mettre à jour un utilisateur existant
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email:rfc,dns',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $user->update($validated);
        return response()->json($user, 200);
    }

    // Supprimer un utilisateur
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
