import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Home from "./pages/home/Home";
import MealScheduler from "./pages/mealScheduler/MealScheduler";

export const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Link to="/meal-scheduler">Meal Scheduler</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/meal-scheduler">
                    <MealScheduler />
                </Route>
            </Switch>            
        </Router>
    )
}

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }
`