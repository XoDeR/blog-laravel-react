# blog-laravel-react
Simple blog application, basically articles CRUD with auth. API: Laravel. Frontend: React.

## How to run locally:

### Backend

```cd blog-api```

```php artisan key:generate```

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

### Frontend

```cd blog-client```

```npm install```

```npm run dev```

Default user: email: [john@example.com] password: [password]


