<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ArticlePolicy
{
    public function modify(User $user, Article $article): Response
    {
        return $user->id === $article->user_id || $user->is_admin
            ? Response::allow()
            : Response::deny('You don\'t own the right to this article.');
    }
}
