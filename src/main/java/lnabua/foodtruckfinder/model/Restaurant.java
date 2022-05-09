package lnabua.foodtruckfinder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
// creates table in database
@Table(name = "restaurants")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@Getter
//@Setter
//@EqualsAndHashCode
public class Restaurant {

    @Id //marks field as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public String name;

    public String locationDescription;

    public String address;

    public String foodItems;

    public double latitude;

    public double longitude;

    public String schedule;

    public String coordinate;

}
