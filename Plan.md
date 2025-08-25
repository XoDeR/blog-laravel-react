# Plan

## Overview

This project will implement simple blog application.
Specifically it will have CRUD for articles and basic authentication.

For backend API I use Laravel, for frontend -- React (Vite with TypeScript).

Backend: 
- local MySQL database
- Laravel model, migration, controller, routes for articles CRUD
- Laravel Sanctum for token based authentication
- Laravel requests for validation

Frontend:
- React (Vite + TypeScript)
- shadcn ui for ui elements (Card, Form, Input, Textarea, Dialog, Button)
- TanStack Query for fetching, caching and syncing server data
- axios to make api calls
- react-hook-form for forms
- zod (with hookform/resolvers) for client side form validation
- zustand to handle auth state in frontend

## Initial setup and installing required packages

### Backend

Laravel app skeletion
```composer create-project laravel/laravel blog-api```

API routes and Sanctum
```php artisan install:api```


### Frontend

Install:
axios
react-router-dom
tanstack/react-query
react-hook-form
zustand
zod
hookform/resolvers

```npm i axios react-router-dom @tanstack/react-query react-hook-form @hookform/resolvers zod zustand```

Install shadcn ui with components: Card, Form, Input, Textarea, Dialog, Button

## Articles CRUD backend

Model Article.
Migration, requests, resourcem, controller, api routes.

## Articles CRUD frontend

Add router.
Hooks for API using tanstack query.

Create ArticlesPage, components: ArticleCard, ArticleList, ArticleCreateForm, ArticleEditForm.
Helper Modal component to display create/edit forms in a modal on the same page.

## Auth backend

User model should use trait HasApiTokens to enable Sanctum with tokens.
AuthController with /login and /register.
Articles CRUD routes are protected with sanctum middleware.
Additional routes for /login, /register.

## Auth frontend

Auth hooks with tanstack query.
Login, Register pages.
ProtectedRoute to redirect to login if the user is not authentified.
Update router.
Update axios config to include token to headers.






