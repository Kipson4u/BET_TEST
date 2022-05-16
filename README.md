# BET E Store

Basic e-commerce site. Below are the functional requirements that implemented:
1. User registration (Register with an email address and password),
with email validation
2. User login (with an email address and password)
3. Display a list of products (show product image, product name, price and quantity)
4. A ‘add to cart button next to each product
5. View shopping cart (show the product, quantity and price with a Total value of all the
products selected)
6. Checkout button (TODO: send an email to the logged-in users' email address with all the
products they have purchased with an order number)
7. Store user information in a database as well as the products purchased for each user
against an order number.

I build this project with the influence from udemy "Learn to build an e-commerce app with .Net Core and Angular" by Neil Cummings.

## Front-end:
Web front end is what the user will see, the front end is built SPA framework "Angular 9".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1. You can cd into client folder and do npm i to install the packages then ng serve.

### Client Project Structure
![image](https://user-images.githubusercontent.com/10977930/168584846-d6537bf1-7c91-4778-b6cd-a167fb26614e.png)

## Middleware:
REST API will facilitate the communication between then Web front end and our
database. The web API is built using .net core web API using C#. 

This project is built using asp.net core 3.1. you can cd into API directory and run dotnet restore and  then dotnet watch run.

### API Project Structure
![image](https://user-images.githubusercontent.com/10977930/168585150-63556db0-4eff-4d59-87a4-185934ea7c38.png)

## Data persistence:
We will use MS SQL of data persistance and Radis Redis to store the shopping basket.

## Setting up the developer environment

- Start by Installing and running Redis Server on Windows machine. You can use the following link to run Redis Server: https://riptutorial.com/redis/example/29962/installing-and-running-redis-server-on-windows.
- To Setup the database Run Update-Database against Infrustructure project.
- Make sure you have installed client packages by running npm i on the client project.   

## Server Side Technologies

- .Net Core
- Generic Repository Patterns
- Unit of Work Pattern
- Specification Pattern
- Azure Redis Cache
- MSSQL Server
- Swagger
- Stripe Implementation

## Client Side Technologies

- Angular 9
- Bootstrap 4
- ngx-bootstrap
- Font Awesome
- Lazy Loading
- Caching
- RXJS
- Design Components

## Stripe Payment Test Cards

You can also follow docs here https://stripe.com/docs/testing

![TEst](https://user-images.githubusercontent.com/10977930/168589449-d1205d2c-498f-4e4e-bb7f-ab579cf9107e.png)



