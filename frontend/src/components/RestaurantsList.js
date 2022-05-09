import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import restaurantService from "../restaurant.service";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [sorted, setSorted] = useState(false);

    if (sorted) {
        restaurants.sort((a, b) => {
            const restaurantA = a.name.toUpperCase();
            const restaurantB = b.name.toUpperCase();
    
            if ( restaurantA < restaurantB) {
                return -1;
            }
            if (restaurantA > restaurantB) {
                return 1;
            }
            return 0;
        });
    }
    

    useEffect(() => {
      init();
    }, []);

    const init = () => {
        restaurantService.getAll()
        .then(response => {
            console.log('Printing the restaurants data', response.data);
            setRestaurants(response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }

    const handleDelete = id => {
        restaurantService.remove(id)
            .then(response => {
                console.log('Restaurant deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
              })
    }

    // const viewDetails = id => {
    //     restaurantService.get(id)
    //         .then(response => {
    //             console.log('Restaurant details retrieved successfully', response.data);
    //             init();
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //           })
    // }

    // const restaurantCards = [];
    //     for (let i = 0; i < restaurants.length; i += 4) {
    //         restaurantCards.push(
    //         <div class="card-deck">
    //             {restaurants.slice(i, i+4).map(restaurant => 
    //                     <RestaurantCard key={restaurant.id} name={restaurant.name} address={restaurant.address} />
    //             )}
    //         </div>
    //         )
    //     }

    return ( 
        <div className="container">
            <h3>List of Restaurants</h3>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <button type="button" className="btn btn-secondary" onClick={() => setSorted(true)}>Sort by Name</button>
                </div>
                <div className="col-4">
                    <Link to="/add" className="btn btn-primary mb-2">Add Restaurant</Link>
                </div>
            </div>
            
            {/* {restaurantCards} */}
            <div className="card-deck">
                {
                restaurants.map(restaurant => (
                    <RestaurantCard id={restaurant.id} key={restaurant.id} name={restaurant.name} 
                    food={restaurant.foodItems} handleDelete={handleDelete} />
                ))
                }
            </div>
            
        </div>
     );
}
 
export default RestaurantList;