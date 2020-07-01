import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home";
import MealScheduler from "./pages/mealScheduler/MealScheduler";

export const App = () => {


    return (
        <Router>
            <Link to="/meal-scheduler">Meal Scheduler</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/meal-scheduler">
                    <MealScheduler />
                </Route>
            </Switch>
            
        </Router>)
}
