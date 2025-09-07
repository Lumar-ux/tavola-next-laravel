<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            DB::table('users')->insert([
            [
                'name' => 'Lucas Maroy',
                'email' => 'lucasmaroy42@gmail.com',
                'email_verified_at' => '2025-01-15 10:30:00',
                'password' => Hash::make('password123'),
                'remember_token' => 'a1b2c3d4e5f6g7h8i9j0',
                'created_at' => '2025-01-10 09:15:00',
                'updated_at' => '2025-01-15 10:35:00',
            ],
            [
                'name' => 'Alice Dupont',
                'email' => 'alice.dupont@example.com',
                'email_verified_at' => '2025-01-15 10:30:00',
                'password' => Hash::make('password123'), // mot de passe hashé
                'remember_token' => 'a1b2c3d4e5f6g7h8i9j0',
                'created_at' => '2025-01-10 09:15:00',
                'updated_at' => '2025-01-15 10:35:00',
            ],
            [
                'name' => 'Marc Leblanc',
                'email' => 'marc.leblanc@google.com',
                'email_verified_at' => null,
                'password' => Hash::make('password123'),
                'remember_token' => 'z9y8x7w6v5u4t3s2r1q0',
                'created_at' => '2025-02-01 14:20:00',
                'updated_at' => '2025-02-01 14:20:00',
            ],
            [
                "name" => "Sophie Martin",
                "email" => "sophie.martin@google.com",
                "email_verified_at" => "2025-02-10 18:45:00",
                "password" => Hash::make('password123'),
                "remember_token" => null,
                "created_at" => "2025-02-05 11:10:00",
                "updated_at" => "2025-02-10 18:50:00"
            ],
            [
                "name" => "Jean Moreau",
                "email" => "jean.moreau@google.com",
                "email_verified_at" => "2025-02-10 18:45:00",
                "password" => Hash::make('password123'),
                "remember_token" => "lmno987654321",
                "created_at" => "2025-02-05 11:10:00",
                "updated_at" => "2025-02-10 18:50:00"
            ],
            [
                "name" => "Claire Petit",
                "email" => "claire.petit@google.com",
                "email_verified_at" => "2025-02-10 18:45:00",
                "password" => Hash::make('password123'),
                "remember_token" => "lmno987654321",
                "created_at" => "2025-02-05 11:10:00",
                "updated_at" => "2025-02-10 18:50:00"
            ],
        ]);
    }
}
