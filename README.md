# Food-Truck-Restaurant-Finder
A responsive web application developed in React and Java with Spring Boot that shows a list of food trucks and restaurants and displays information about each business.

### Screenshots
Restaurant list
![Home page](place image here)

Restaurant details
![result](place image here)

Update a restuarant
![result](place image here)

Sort restaurant list by name
![result](place image here)

### Getting Started
* Fork/Clone project to local
* Open project in IntelliJ IDEA
* Run server in IntelliJ IDEA.
* Open MySQL Workbench and run database. See application.properties in project directory/Resources for database information.
* Open frontend folder within project in VSCode
* Run *npm install* to startup web page.

### Architechture Overview
##### Used MVC design pattern.

##### React
* Router: App.js
* Components: RestaurantList, RestaurantDetails, RestaurantCard, AddRestaurant 
* Service: restaurant.service

##### Spring Boot
* Model: Restaurant
* Controller: RestaurantController
* Repository: RestaurantRepository

##### Database
* MySQL: restaurants_db

##### MVP
* As a user I should be able to see the list of retaurants so that I can select the one I want to know more about.
* As a user I should be able to select a restaurant and see details of the restaurant's name, address, location description, and food items.
* As a user I should be able to add a new restaurant and input information of that restaurant.
* As a user I should be able to sort the list of restaurants by name.
* As a user I should be able to delete a restaurant from my list.

### Functionality
The app's functionality includes:
* Display all restaurants
* Sort restaurants by name
* Select a restaurant to see more information about the restaurant
* Add a restaurant
* Edit a restaurant's information
* Delete a restaurant

### Technical
This app is built with ReactJS, Java, Spring Boot, and MySQL. Restaurant addresses are from Google Maps API when retrieving restaurant longitude and latitude values.

#### Google Maps API
Used *npm install --save react-geocode*. API Key: AIzaSyBhkkcJIJjPHC5sbBVnwxqlgbgDk5e9oo8

### Development Roadmap
Future enhancements to include:
* Adding a Home page and navigation bar. Changing the styling of the application views.
* Display a map showing a marker of the location of the restaurant.
* Display ratings or reviews of the each restaurant.

### Live Link
You can access the app here:
https://foodtruck-app-1.herokuapp.com/

### Author
Lorraine Nabua
