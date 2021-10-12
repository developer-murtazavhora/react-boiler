import React from "react";
import {Header} from "../layouts/Header";
import {isUserLoggedIn} from "../../_helpers";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {Loader} from "../layouts/Loader";
import {Accordion} from "react-bootstrap";
import {HeaderActions} from "../layouts/HeaderActions";

export function Bookings(props) {
    let history = useHistory();

    if (!isUserLoggedIn()) {
        history.push('/login');
    }

    const loading = useSelector(state => state.auth.loading);

    return (<>
            {loading && <Loader/>}
            <Header/>
            <div className="container" style={{marginTop: "30px"}}>
                <HeaderActions props={props}/>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="card card-custom">
                            <div className="card-header">
                                <p className="block-header">
                                    <span>101</span>
                                    <a href="#" className="text-decoration-none">Ticket Detail</a>
                                </p>
                            </div>
                            <div className="card-body">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Ticket Details</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Number</h6>
                                                    <span className="text-secondary">123456</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Date</h6>
                                                    <span className="text-secondary">12-09-2021</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Status</h6>
                                                    <span className="text-secondary">Pending</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Amount</h6>
                                                    <span className="text-secondary">2.00</span>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Customer Details</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Phone</h6>
                                                    <span className="text-secondary">9426616652</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Name</h6>
                                                    <span className="text-secondary">Murtaza Vohra</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Type</h6>
                                                    <span className="text-secondary">General</span>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Vehicle Details</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Manufacturer</h6>
                                                    <span className="text-secondary">Toyota - Cruiser</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Color</h6>
                                                    <span className="text-secondary">Magma Grey</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Plate Number</h6>
                                                    <span className="text-secondary">0053</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Scratches</h6>
                                                    <span className="text-secondary">Link</span>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Parking Details</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Location</h6>
                                                    <span className="text-secondary">Hotel Imperial</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Block</h6>
                                                    <span
                                                        className="text-secondary">First Floor - A101</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap pl-0 pr-0">
                                                    <h6>Notes</h6>
                                                    <span className="text-secondary">-</span>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
