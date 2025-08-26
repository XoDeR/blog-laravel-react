# blog-laravel-react
Simple blog application, basically articles CRUD with auth. API: Laravel. Frontend: React.

## How to run locally:

#### Backend

```cd blog-api```

```composer install``` Install PHP dependencies

```php artisan key:generate```

copy .env.example to .env
Add mysql db and update the credentials in .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog-laravel-react
DB_USERNAME=root
DB_PASSWORD=
```

```php artisan migrate``` to run db migrations

```php artisan db:seed``` to seed db with 10 random articles and the default user for testing

```php artisan serve``` run the server

#### Frontend

```cd blog-client```

```npm install```

```npm run dev```

Default user: email: [john@example.com] password: [password]

## Why this tech stack was chosen

#### Backend

Laravel -- batteries included robust PHP framework for building maintainable APIs

Laravel Sanctum -- lightweight authentication system for SPAs and mobile apps

#### Frontend

React + TypeScript (Vite) -- React for dynamic component-drived UIs, TypeScript for
type safety and maintainability, Vite for fast development and optimized builds

Axios -- HTTP client with simple syntax, request/response interceptors, better error handling than 'fetch'
for API communication

React Router DOM -- client side routing, navigation without full page reloads

TanStack Query -- managing server state with caching, background updates, auto refetching to keep UI
in sync with backend data

React Hook Form -- lightweight form management with minimal re-renders

Zod -- type safe schema validation for client-side data

Zustand -- simple but powerful client global state management with minimalistic API and almost no boilerplate

Shadcn UI -- speeds up UI development with ready made but customizable UI component primitives