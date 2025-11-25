# tavola-next-laravel 🍽️

🔗 **Live Demo**  
https://tavola-app.vercel.app/

Complete redesign of the **Restaurant 2.0** project using a modern stack based on **Next.js** for the frontend and **Laravel** for the backend API. The project focuses on performance, security, and user experience with a responsive and dynamic design.

***Note: This project is currently under active development.***

## 🎯 Goals

* **Separate Frontend & Backend**: Modern architecture with **Next.js** for the UI and **Laravel API** for business logic.
* **Secure Data Exchange**: Authentication and session handling using **Laravel Sanctum**.
* **Modernized UI**: Built with **Tailwind CSS** and **shadcn/ui** for fast, consistent styling.
* **Improved User Experience**: Dynamic pages and forms with smooth, high-performance interactions.

## 🚀 Implemented Features

* **Back Office**
  * Centralized management of contact messages via the Laravel API.
  * Secure authentication using **Sanctum**.

* **Guestbook**
  * Modern form (Next.js + shadcn/ui) to collect customer feedback.
  * Reviews stored in the Laravel/MySQL database.

* **Optimized User Interface**
  * Responsive design with **Tailwind CSS v4**.
  * Reusable components with **shadcn/ui** and **TypeScript**.

## 🛠️ Technologies Used

### Frontend

* **Next.js v15**: React framework supporting both SSR and client-side rendering.
* **TypeScript**: Static typing for better reliability.
* **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
* **shadcn/ui**: Modern and accessible component library.

### Backend

* **Laravel 12**: Modern PHP framework for the REST API.
* **Laravel Sanctum**: Secure authentication for SPA/Frontend.
* **PostgreSQL**: Relational database for data storage.

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your_username>/tavola-next-laravel.git
cd tavola-next-laravel
```

### 2️⃣ Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

⚠️ Configure your database credentials inside the `.env` file.

### 3️⃣ Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### 4️⃣ Sanctum Authentication

Ensure the frontend URL is allowed in `SANCTUM_STATEFUL_DOMAINS` (inside Laravel’s `.env`).

## 💡 Possible Improvements

* **Online Reservation System**: Full reservation module with email confirmation.
* **Advanced User Roles**: More granular back-office roles (Admin, Marketing, etc.).
* **SEO & Performance**: Additional optimizations on the Next.js side (images, caching, etc.).
* **Automated Testing**: Add unit and end-to-end tests.

## 📝 License

Open-source project under the MIT License.
