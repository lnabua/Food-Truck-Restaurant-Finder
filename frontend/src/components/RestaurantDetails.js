import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
import restaurantService from "../restaurant.service";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";

const RestaurantDetails = (props) => {

    const [googleAddress, setGoogleAddress] = useState('');

    Geocode.setApiKey("AIzaSyBhkkcJIJjPHC5sbBVnwxqlgbgDk5e9oo8");
    Geocode.fromLatLng(String(props.restaurant.latitude), String(props.restaurant.longitude)).then(
        (response) => {
          const address = response.results[0].formatted_address;
          setGoogleAddress(address);
        },
        (error) => {
          console.error(error);
        }
      );


    return (
        <div className="container">
        <div className="card text-center">
            <div className="card-body">
                <h4 className="card-title">{props.restaurant.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{googleAddress}</li>
                    <h6 className="card-text">Location Description</h6>
                    <li className="list-group-item">{props.restaurant.locationDescription}</li>
                    <h6 className="card-text">Food Items</h6>
                    <li className="list-group-item">{props.restaurant.foodItems}</li>
                    <li className="list-group-item"><a href={props.restaurant.schedule}>Restaurant Schedule</a></li>
                </ul>
            </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => props.setSelectedRestaurant(null)}>
            Back to List
        </button>
        </div>
    );
}
 
export default RestaurantDetails;