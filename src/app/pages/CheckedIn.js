import React from "react";
import {Header} from "../layouts/Header";
import {HeaderActions} from "../layouts/HeaderActions";

export function CheckedIn(props) {
    return (<>
            <Header/>

            <div className="container" style={{marginTop: "30px"}}>
                <HeaderActions props={props}/>

                <div className="row mb-4 d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card card-custom">
                            <div className="card-header">
                                <p className="block-header">
                                    <span>Checked In</span>
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="row mt-4">
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="phone">
                                                Phone
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control custom_input" id="phone"
                                                   name="phone"
                                                   value="" autoFocus/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="customer_name">
                                                Name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control custom_input" id="customer_name"
                                                   name="customer_name" value=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="car_manufacturer_id">Car
                                                Manufacturer</label>
                                            <select name="car_manufacturer_id" id="car_manufacturer_id"
                                                    className="form-control custom_input">
                                                <option value="">Please select a value</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="car_model_id">Car Model</label>
                                            <select name="car_model_id" id="car_model_id"
                                                    className="form-control custom_input">
                                                <option value="">Please select a value</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="color">Color</label>
                                            <input type="text" className="form-control custom_input" id="color"
                                                   name="color"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0" htmlFor="car_plate">Car Plate</label>
                                            <input type="text" className="form-control custom_input" id="car_plate"
                                                   name="car_plate"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="form-group">
                                            <label className="form-label mb-0"
                                                   htmlFor="instructions">Instructions</label>
                                            <textarea rows="3" cols="5" className="form-control custom_input"
                                                      name="instructions" id="instructions"
                                                      placeholder="Type here something..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
