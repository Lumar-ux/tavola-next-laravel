<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Article extends Model
{
    /** @use HasFactory<\Database\Factories\ArticleFactory> */
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'status',
    ];
    protected $guarded = ['created_at', 'updated_at','slug','id','category_id','author_id'];

    protected $casts = [
        'updated_at' => 'datetime:d/m/Y',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function getAllArticle()
    {
        return Article::select('id', 'title', 'body', 'status', 'updated_at')
            ->orderBy('id')
            ->get()
            ->toArray();
    }
    public static function getArticleById($id)
    {
        return Article::select('id', 'title', 'body', 'status', 'updated_at')
            ->where('id', $id)
            ->get()
            ->toArray();
    }
}
