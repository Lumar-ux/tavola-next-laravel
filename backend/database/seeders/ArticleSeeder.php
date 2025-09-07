<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'title' => '',
                'body' => 'Tavola est une pizzeria contemporaine qui a su se démarquer grâce à son approche innovante de la cuisine italienne. Située dans un quartier branché, Tavola propose un menu éclectique avec des pizzas aux saveurs uniques, comme la truffe blanche et le gorgonzola, ou encore le poulet épicé et la mangue. Le décor moderne et l\'ambiance conviviale attirent une clientèle jeune et dynamique, faisant de Tavola un lieu incontournable pour les amateurs de nouveautés culinaires.',
                'created_at' => '2025-01-11 09:15:00',
                'updated_at' => '2025-01-13 10:35:00',
                'status' => 'published',
                'user_id' => 1
            ],
            [
                'title' => 'Soirée Dégustation',
                'body' => 'Tavola organise une soirée dégustation exclusive où les invités pourront savourer une variété de pizzas artisanales créées par le chef Luigi. Chaque pizza sera accompagnée d\'un vin soigneusement sélectionné pour compléter les saveurs. Une occasion idéale pour découvrir de nouvelles combinaisons de goûts dans une ambiance chaleureuse. Les convives auront également l\'opportunité de rencontrer le chef Luigi, qui partagera ses secrets de cuisine et répondra aux questions. En plus des pizzas, des amuse-bouches et des desserts italiens traditionnels seront servis, offrant une expérience culinaire complète et raffinée.',
                'created_at' => '2025-02-10 09:15:00',
                'updated_at' => '2025-02-15 10:35:00',
                'status' => 'published',
                'user_id' => 1
            ],
            [
                'title' => 'pizza édition linitée d\'été',
                'body' => 'Le célèbre restaurant pizzeria Tavola, reconnu pour son approche innovante de la cuisine italienne, lance une nouvelle pizza en édition limitée pour célébrer l\'été. Cette création unique marie des ingrédients frais et surprenants : une base de crème de ricotta, des tranches de figues fraîches, du prosciutto di Parma et une touche de miel de lavande. Ce mélange audacieux de saveurs sucrées et salées promet de ravir les papilles des clients de Tavola. Disponible uniquement pendant les mois d\'été, cette pizza est une raison de plus pour visiter ce lieu branché et convivial.',
                'created_at' => '2025-02-11 09:15:00',
                'updated_at' => '2025-02-15 10:35:00',
                'status' => 'published',
                'user_id' => 1
            ],
            [
                'title' => '5e Anniversaire',
                'body' => 'À l\'occasion de son cinquième anniversaire, Tavola, la pizzeria contemporaine du quartier branché, propose un menu dégustation exclusif qui met en avant ses créations les plus populaires et innovantes. Ce menu spécial comprend une sélection de mini-pizzas aux saveurs emblématiques, telles que la truffe blanche et le gorgonzola, ainsi que le poulet épicé à la mangue. Les clients pourront également savourer des antipasti variés et des desserts italiens revisités. Pour couronner le tout, une coupe de prosecco est offerte à chaque convive. Tavola invite tous les amateurs de nouveautés culinaires à célébrer cet événement marquant dans une ambiance toujours aussi conviviale et dynamique.',
                'created_at' => '2025-02-12 09:15:00',
                'updated_at' => '2025-02-17 10:35:00',
                'status' => 'published',
                'user_id' => 1
            ],
            [
                'title' => 'Ateliers de Pizzaiolo',
                'body' => 'Tavola, la pizzeria contemporaine qui séduit par ses pizzas aux saveurs uniques, annonce le lancement d\'une série d\'ateliers de pizzaiolo destinés aux passionnés de cuisine italienne. Ces ateliers, animés par le chef exécutif de Tavola, offrent une occasion unique d\'apprendre les secrets de la préparation de pizzas exceptionnelles. Les participants pourront découvrir les techniques de pétrissage, l\'art d\'associer les ingrédients et la cuisson parfaite au four à bois. Chaque session se termine par une dégustation des pizzas préparées, accompagnée d\'un verre de vin italien. Une expérience enrichissante et gourmande à ne pas manquer pour tous les amateurs de cuisine innovante.',
                'created_at' => '2025-02-13 09:15:00',
                'updated_at' => '2025-02-18 10:35:00',
                'status' => 'published',
                'user_id' => 1
            ]
        ]);
    }
}
