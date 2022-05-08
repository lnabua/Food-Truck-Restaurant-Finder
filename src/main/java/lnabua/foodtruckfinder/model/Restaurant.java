package lnabua.foodtruckfinder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
// creates table in database
@Table(name = "restaurants")
@Getter
@Setter
@EqualsAndHashCode
public class Restaurant {

    @Id //marks field as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String locationDescription;

    private String address;

    private String foodItems;

    private double latitude;

    private double longitude;

    private String schedule;

    private String coordinate;

}