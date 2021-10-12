import React from "react";
import {Header} from "../layouts/Header";
import {HeaderActions} from "../layouts/HeaderActions";
import {isUserLoggedIn} from "../../_helpers";
import {useHistory} from "react-router-dom";

export function HomeIndex(props) {
    let history = useHistory();

    if (!isUserLoggedIn()) {
        history.push('/login');
    }

    return (<>
            <Header/>
            <div className="container" style={{marginTop: "30px"}}>
                <HeaderActions props={props}/>
            </div>
        </>
    )
}
