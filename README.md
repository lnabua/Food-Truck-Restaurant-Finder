# Food-Truck-Restaurant-Finder
A responsive web application developed in React and Java with Spring Boot that shows a list of food trucks and restaurants and displays information about each business.

### Video showing app features
https://user-images.githubusercontent.com/59665932/167696200-a6ee7b15-0e4b-46bb-8272-84aa9581b31b.mp4


### Getting Started
* Fork/Clone project to local.
* Make sure to have all the following technologies downloaded/setup in your computer: IntelliJ, VSCode, MySQL Workbench, Apache Maven
* Use CSV provided below under Database section. 
* Open MySQL Workbench and run database. See application.properties in project directory/Resources for database information. To run locally, change username and password to your MySQL workbench local username and password. 
* Open project in IntelliJ Community or IntelliJ IDEA licensed version.
* Run FoodTruckFinderApplication.java to run spring boot on localhost:8080. This will auto create the database and restaurants table in MySQL.
* Refresh MySQL schemas and right-click then select Table Data Import Wizard to upload initial restaurant list data.
* You can check that the data is showing in the backend by conducting a GET resquest in Postman with the url: http://localhost:8080/api/restaurants
* Open the frontend folder in VSCode.
* Install the following in the frontend directory: *npm install --save bootstrap@4 react-router-dom axios*
* Run *npm install* to start frontend application on localhost:3000.

### Architechture Overview
##### Used MVC design pattern
![Spring-React-MVC](https://user-images.githubusercontent.com/59665932/167696102-eb854d20-95fa-41ae-9780-97e148e21c96.png)

##### Spring Boot
* Model: *Restaurant* entity class that represents the data model, with the following fields: restaurant id, name, location description, address, food items, latitude/longitude, schedule, and coordinate.
* Controller: *RestaurantController* interacts with the RestaurantRepository which allows us to expose a REST API. This will provide APIs for retrieving, creating, updating, deleting, and finding Restaurants.
* Repository Interface: *RestaurantRepository* interface extends from the JpaRepository which provides JPA CRUD capabilities using the following methods: findAll(), findByID(), get(), save(), deleteByID()

##### Database
* MySQL: restaurants_db
* CSV file: [Restaurants.csv](https://github.com/lnabua/Food-Truck-Restaurant-Finder/files/8664050/Restaurants.csv)


##### React
* Router: App is a container with React-Router and links to routes paths.
     * Home page path "/" routes to RestauarantList.
     * Adding a restaurant path "/add" routes to AddRestaurant.
     * Editing a restaurnt path "/restaurants/edit/:id" routes to Add Restaurant.
     * Showing restaurant details path "/restaurants/details/:id" routes to RestaurantDetails.
* Components: 
     * RestaurantList: retrieves and displays all Restaurants.
     * RestaurantDetails: shows more information on a restaurant. Contains Google Maps API integration to show Google Maps address of the restaurant selected.
     * RestaurantCard: contains restaurant information that will be displayed in RestaurantList.
     * AddRestaurant: has form for adding and editing a restaurant's information based on the restaurant ID.
* Service: All of the components call the *restaurant.service* CRUD methods which uses Axios to make HTTP requests and receive responses. The *http-common* file initializes Axios with a baseURL using *http://localhost:8080/api* (backend proxy) and headers. 

### Technologies
* React with React-Router
* Java 11
* Spring Boot 2 (Spring Web MVC, Spring Data JPA)
* Apache Maven 3.8.5
* MySQL
* Springboot4
* Axios
* Google Maps API

#### Google Maps API
Used *npm install --save react-geocode*. API Key: AIzaSyBhkkcJIJjPHC5sbBVnwxqlgbgDk5e9oo8

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
