import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import restaurantService from "../restaurant.service";

const AddRestaurant = () => {
    
    const[name, setName] = useState('');
    const[locationDescription, setLocationDescription] = useState('');
    const[address, setAddress] = useState('');
    const[foodItems, setFoodItems] = useState('');
    const[schedule, setSchedule] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveRestaurant = (e) => {
        e.preventDefault();

        const restaurant = {name, locationDescription, address, foodItems, schedule, id};
        if (id) {
            restaurantService.update(restaurant)
                .then(response => {
                    console.log("restaurant data updated successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log("something went wrong", error);
                });
        }else {
            restaurantService.create(restaurant)
                .then(response => {
                    console.log("restaurant added successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log("something went wrong", error);
                });
        }
    }


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
            <h3>Add Restaurant</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter restaurant name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="locationDescription"
                        value={locationDescription}
                        onChange={(e) => setLocationDescription(e.target.value)}
                        placeholder="Enter location description"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="foodItems"
                        value={foodItems}
                        onChange={(e) => setFoodItems(e.target.value)}
                        placeholder="Enter food items"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="schedule"
                        value={schedule}
                        onChange={(e) => setSchedule(e.target.value)}
                        placeholder="Enter URL link to schedule"
                    />
                </div>
                <div>
                    <button onClick={(e) => saveRestaurant(e)}
                    className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    );
}
 
export default AddRestaurant;