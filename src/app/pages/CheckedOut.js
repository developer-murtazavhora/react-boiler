import React from "react";
import {Header} from "../layouts/Header";
import {HeaderActions} from "../layouts/HeaderActions";

export function CheckedOut(props) {
    return (<>
            <Header/>

            <div className="container" style={{marginTop: "30px"}}>
                <HeaderActions props={props}/>

                <div className="row mb-4 d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card card-custom">
                            <div className="card-header">
                                <p className="block-header">
                                    <span>Checked Out</span>
                                </p>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
