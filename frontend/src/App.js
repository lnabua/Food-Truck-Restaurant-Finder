import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantList from "./components/RestaurantsList";
import NotFound from "./components/NotFound";
import AddRestaurant from "./components/AddRestaurant";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  return ( 
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<RestaurantList />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/restaurants/edit/:id" element={<AddRestaurant />} />
          <Route path="/restaurants/details/:id" element={<RestaurantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;