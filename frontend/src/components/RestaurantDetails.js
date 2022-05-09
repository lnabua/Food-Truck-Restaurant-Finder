import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
import restaurantService from "../restaurant.service";
import { useEffect, useState } from "react";

const RestaurantDetails = () => {

    const[name, setName] = useState('');
    const[locationDescription, setLocationDescription] = useState('');
    const[address, setAddress] = useState('');
    const[foodItems, setFoodItems] = useState('');
    const[schedule, setSchedule] = useState('');
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            restaurantService.get(id)
                .then(restaurant => {
                    setName(restaurant.data.name);
                    setLocationDescription(restaurant.data.locationDescription);
                    setAddress(restaurant.data.address);
                    setFoodItems(restaurant.data.foodItems);
                    setSchedule(restaurant.data.schedule);
                })
                .catch(error => {
                    console.log("something went wrong", error);
                });
        }
    }, [id])

    return (
        <div className="container">
        <div className="card text-center">
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text">{address}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{locationDescription}</li>
                    <li className="list-group-item">{foodItems}</li>
                    <li className="list-group-item">{schedule}</li>
                </ul>
            </div>
        </div>
        <Link to="/">Back to List</Link>
        </div>
    );
}
 
export default RestaurantDetails;