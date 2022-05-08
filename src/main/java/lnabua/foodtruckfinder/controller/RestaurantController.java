package lnabua.foodtruckfinder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
}
