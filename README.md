# tavola-next-laravel 🍽️

Refonte complète du projet **Restaurant 2.0** avec un stack moderne basé sur **Next.js** pour le frontend et **Laravel** pour l’API backend. Ce projet met l’accent sur la performance, la sécurité et l’expérience utilisateur avec un design réactif et dynamique.

***Note : Ce projet est actuellement en phase de développement.***


## 🎯 Objectifs

* **Séparer Frontend & Backend** : Architecture moderne avec **Next.js** pour l’interface et **Laravel API** pour la logique métier.
* **Sécuriser les échanges** : Authentification et gestion de sessions via **Laravel Sanctum**.
* **Moderniser l’UI** : Utilisation de **Tailwind CSS** et de **shadcn/ui** pour un design rapide et cohérent.
* **Expérience utilisateur améliorée** : Pages et formulaires dynamiques, interactions fluides et performantes.


## 🚀 Fonctionnalités implémentées

* **Back-office**

  * Gestion des messages de contact centralisée via l’API Laravel.
  * Authentification sécurisée via **Sanctum**.

* **Livre d’or (Guestbook)**

  * Formulaire moderne (Next.js + shadcn/ui) pour recueillir les avis des clients.
  * Stockage des avis dans la base de données Laravel/MySQL.

* **Interface utilisateur optimisée**

  * Responsive Design avec **Tailwind CSS v4**.
  * Composants réutilisables avec **shadcn/ui** et **TypeScript**.


## 🛠️ Technologies utilisées

### **Frontend**

* **Next.js v15** : Framework React pour le rendu côté serveur (SSR) et côté client.
* **TypeScript** : Typage statique pour plus de robustesse.
* **Tailwind CSS v4** : Framework CSS utilitaire pour des interfaces rapides.
* **shadcn/ui** : Librairie de composants modernes et accessibles.

### **Backend**

* **Laravel 12** : Framework PHP moderne pour l’API REST.
* **Laravel Sanctum** : Authentification sécurisée pour SPA/Frontend.
* **PostgreSQL** : Base de données relationnelle pour stocker les données.


## ⚙️ Installation

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/<votre_nom_utilisateur>/tavola-next-laravel.git
cd tavola-next-laravel
```

### 2️⃣ Installation du Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

⚠️ Configurez votre base de données dans le fichier `.env`.

### 3️⃣ Installation du Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### 4️⃣ Authentification Sanctum

Assurez-vous que l’URL du frontend est autorisée dans `SANCTUM_STATEFUL_DOMAINS` (dans `.env` côté Laravel).


## 💡 Améliorations possibles

* **Système de réservation en ligne** : Ajout d’un module complet de réservation avec confirmation par email.
* **Gestion avancée des rôles utilisateurs** : Back-office plus fin (Admin, Marketing, etc.).
* **SEO & Performance** : Optimisations supplémentaires côté Next.js (images, cache, etc.).
* **Tests automatisés** : Mise en place de tests unitaires et end-to-end.


## 📝 Licence

Projet open-source sous licence MIT.
