import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
import restaurantService from "../restaurant.service";
import { useEffect, useState } from "react";

const RestaurantDetails = (props) => {

    return (
        <div className="container">
        <div className="card text-center">
            <div className="card-body">
                <h6 className="card-title">{props.restaurant.name}</h6>
                <p className="card-text">{props.restaurant.address}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.restaurant.locationDescription}</li>
                    <li className="list-group-item">{props.restaurant.foodItems}</li>
                    <li className="list-group-item">{props.restaurant.schedule}</li>
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