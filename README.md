# MyNetwork

!['Printscreen of the SPA - listing contacts'](https://i.imgur.com/qnLhPJS.png "MyNetwork - Contacts")

## About the project
This is a SPA to manage contacts. It's possible to add, view, list, search, delete, and see coming birthdays of contacts. Developed with Laravel, Vue.js, and Tailwind CSS.

## How to run the project in your machine
It's required to have [git](https://git-scm.com/downloads), [composer](https://getcomposer.org/download/) and [npm](https://nodejs.org/en/download/) installed to follow these steps:
1. Clone this repository with ```git clone https://github.com/Romanti-Ezer/MyNetwork.git```
2. Enter in the folder of the project ```cd MyNetwork```
3. Install dependencies and generate build
    * Install composer dependencies with ```composer install```
    * Install npm dependencias and generate build with ```npm install && npm run dev```
4. Create a database
    * You can give any name you want
    * Database collation can be ```latin1_swedish_ci```
5. Configure ```.env``` file
    * Copy the ```.env.example``` and rename to ```.env```
    * In this file configure the database connection
6. Generate an application key running ```php artisan key:generate```
7. Migrate database
    * Run ```php artisan migrate``` to create the tables in the database
8. Run tests
    * Run ```vendor/bin/phpunit``` to execute all tests
    * Run ```vendor/bin/phpunit --filter name_of_test``` to execute a single test
9. Configure virtual host if necessary
    * Here I have a configuration that can help.
    ```
    <VirtualHost my.network:80>
        ServerAdmin romantigds@gmail.com
        DocumentRoot "E:/Projects/mynetwork/public"
        <Directory "E:/Projects/mynetwork/public">
            Options All
            AllowOverride All
            Order Allow,Deny
            Allow from all
            Require all granted
        </Directory>
        ServerName my.network
        ServerAlias my.network
        ErrorLog "logs/my.network.log"
    </VirtualHost>
    ```
    * If you create a virtual host, don't forget to change the APP_URL in the ```.env``` file
11. Access the app url and create an account to use the system
