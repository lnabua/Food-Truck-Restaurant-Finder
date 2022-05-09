package lnabua.foodtruckfinder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import lnabua.foodtruckfinder.model.Restaurant;
import lnabua.foodtruckfinder.repository.RestaurantRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepo;

    // fetches all the restaurants from the repository
    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants() {
        return this.restaurantRepo.findAll();
    }

    // saves restaurant details to database
    @PostMapping("/restaurants")
    // new handler method saveRestaurantDetails
    // receive restaurant details using @RequestBody binding to restaurant object
    public Restaurant saveRestaurantDetails(@RequestBody Restaurant restaurant) {
        // pass save method to restaurant object and return/save restaurant details to database
        return restaurantRepo.save(restaurant);
    }

    //grab restuarant to update
    @GetMapping("/restaurants/{id}")
    public Restaurant getSingleRestaurant(@PathVariable Integer id) {
        return restaurantRepo.findById(id).get();
    }

    //update restaurant data
    @PutMapping("/restaurants")
    public Restaurant updateRestaurantDetails(@RequestBody Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }

    @DeleteMapping("/restaurants/{id}")
    public ResponseEntity<HttpStatus> deleteRestaurantById(@PathVariable Integer id) {
        restaurantRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}