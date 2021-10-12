import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {HomeIndex} from "./pages/HomeIndex";
import {Login} from "./pages/Login";
import {isUserLoggedIn} from "../_helpers";
import {ErrorPage} from "./pages/ErrorPage";
import {Bookings} from "./pages/Bookings";
import {CheckedIn} from "./pages/CheckedIn";
import {CheckedOut} from "./pages/CheckedOut";
import {Search} from "./pages/Search";
import {Registration} from "./pages/Registration";

export function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/home" component={HomeIndex}/>
            <Route exact path="/bookings" component={Bookings}/>

            <Route exact path="/checked-in" component={CheckedIn}/>
            <Route exact path="/checked-out" component={CheckedOut}/>
            <Route exact path="/search" component={Search}/>

            <Route exact path="/">
                {isUserLoggedIn() ? <Redirect to='/home'/> : <Redirect to='/login'/>}
            </Route>

            <Route exact path="/error" component={ErrorPage} />
            <Redirect to='/home'/>
        </Switch>
    );
}
