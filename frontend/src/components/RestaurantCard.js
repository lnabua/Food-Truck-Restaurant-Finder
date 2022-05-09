import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {

    return (
        <div className="col-4">
        <div className="card text-center" key={props.id}>
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                <p className="card-text"></p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.food}</li>
                </ul>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link className="btn btn-primary" to={`/restaurants/details/${props.id}`}>Info</Link>
                <Link className="btn btn-info" to={`/restaurants/edit/${props.id}`}>Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button>
            </div>
        </div>
        </div>
    );
}
 
export default RestaurantCard;