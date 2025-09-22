<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'firstname',
        'name',
        'email',
        'object',
        'text',
    ];
    protected $guarded = ['created_at', 'updated_at'];

    public static function getAllMessage()
    {
        return Message::select('id', 'firstname', 'name', 'email', 'object', 'text', 'updated_at')
            ->orderBy('id')
            ->get()
            ->toArray();
    }
    public static function getMessageById($id)
    {
        return Message::select('id', 'firstname', 'name', 'email', 'object', 'text', 'updated_at')
            ->where('id', $id)
            ->get()
            ->toArray();
    }
}
