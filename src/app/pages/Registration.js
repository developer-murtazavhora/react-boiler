import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import * as auth_actions from "../../_redux/auth/actions";
import {isUserLoggedIn} from "../../_helpers";
import logo from "../../_assets/images/logo.png";

export function Registration() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    if (isUserLoggedIn()) {
        history.push('/home');
    }

    const login = () => {
        dispatch(auth_actions.login({'email': email, 'password': password}))
            .then((response) => {
                if (response.code === 200) {
                    history.push('/home');
                }
            });
    }

    return (
        <>
            <div className="row w-100 h-100 p-0 m-0">
                <a onClick={() => history.push('/registration')} className="logo cursor-pointer">
                    <img src={logo} alt="React Boiler"/>
                </a>

                <div className="col-md-6 p-0 bg-white">
                    <div className="login_card">
                        <form method="POST" className="registration_form" id="registration_form">
                            <div className="mb-5">
                                <p className="fs-2">Registration</p>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <label className="mb-2" htmlFor="name">Name</label>
                                        <input type="text" name="name" value={name} autoFocus id="name"
                                               className="form-control custom_input" placeholder="Ex. Someone"
                                               onChange={(event) => {
                                                   setName(event.target.value);
                                               }}/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <label className="mb-2" htmlFor="phone">Phone</label>
                                        <input type="text" name="phone" value={phone} id="phone"
                                               className="form-control custom_input" placeholder="Ex. 1234567890"
                                               onChange={(event) => {
                                                   setPhone(event.target.value);
                                               }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <label className="mb-2" htmlFor="email">Email Address</label>
                                        <input type="text" name="email" value={email} id="email"
                                               className="form-control custom_input" placeholder="Ex. someone@gmail.com"
                                               onChange={(event) => {
                                                   setEmail(event.target.value);
                                               }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="form-group">
                                        <label className="mb-2" htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" value={password}
                                               className="form-control custom_input" placeholder="********"
                                               onChange={(event) => {
                                                   setPassword(event.target.value);
                                               }}/>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn btn-dark" onClick={() => login()}>Register</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 p-0 background_card">
                    <div className="buttons">
                        <span>Already Account?</span> &nbsp; &nbsp;
                        <a onClick={() => history.push('/login')}
                           className="btn btn-dark cursor-pointer fs-6">
                            Login Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
