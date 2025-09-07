<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class ArticleController extends Controller implements HasMiddleware
{
    public static function middleware(){
        return [
            new Middleware('auth:sanctum', except:['index','show']),
        ];
    }
    public function index(){
        $article = Article::getAllArticle();
        return response()->json($article);
    }
    public function show($id){
        $articleId = Article::getArticleById($id);
        return response()->json($articleId);
    }
    // Formulaire de modification (pour Blade)
    public function create()
    {
        return view('users.create');
    }
    // Enregistrer un nouvel utilisateur
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'status' => 'required|in:draft,published,archived',
        ]);

        $article = $request->user()->articles()->create($validated);

        return response()->json($article, 201);
    }

    // Formulaire de modification (pour Blade)
    public function edit($id)
    {
        return "Modifier l'utilisateur " . $id;
    }

    // Mettre à jour un utilisateur existant
    public function update(Request $request, Article $article)
    {
        Gate::authorize('modify', $article);
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'status' => 'required|in:draft,published,archived',
        ]);
        $article->update($validate);
        return response()->json($article, 200);
    }

    // Supprimer un utilisateur
    public function destroy(Article $article)
    {
        Gate::authorize('modify', $article);
        $article->delete();
        return response()->json(null, 204);
    }
}
