import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import * as auth_actions from "../../_redux/auth/actions";
import {isUserLoggedIn} from "../../_helpers";
import logo from "../../_assets/images/logo.png";

import {bounce} from 'react-animations';
import {css, StyleSheet} from 'aphrodite';
import {handleBTN, useWindowSize} from "../../_helpers/Design";

const styles = StyleSheet.create({
    fadeInBottom: {
        animationName: 'fadeInBottom',
        animationDuration: '2s',
    },
    fadeInBottomMobile: {
        '@media (max-width: 767px)': {}
    }
});

// const styles = StyleSheet.create({
//     bounce: {
//         animationName: bounce,
//         animationDuration: '10s'
//     }
// })

export function Login() {
    let history = useHistory();
    const dispatch = useDispatch();

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

    const [width, height] = useWindowSize();
    handleBTN();

    return (
        <>
            <div className="row w-100 h-100 p-0 m-0">
                <div className="col-md-6 p-0 bg-white">
                    <a onClick={() => history.push('/login')} className="logo cursor-pointer">
                        <img src={logo} alt="React Boiler"/>
                    </a>

                    <div className={`login_card ${css(styles.fadeInBottom)}`}>
                        <form method="POST" className="login_form" id="login_form">
                            <div className="mb-5">
                                <p className="fs-2">Login</p>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="mb-2" htmlFor="email">Email Address</label>
                                        <input type="text" name="email" value={email} autoFocus id="email"
                                               className="form-control custom_input" placeholder="Ex. someone@gmail.com"
                                               onChange={(event) => {
                                                   setEmail(event.target.value);
                                               }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
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

                            <div className="row mt-3 mb-5">
                                <div className="col-md-12">
                                    <a href="" className="text-decoration-none float-end">Reset Password</a>
                                </div>
                            </div>

                            <button type="button" className="btn btn-dark" onClick={() => login()}>Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 p-0 background_card">
                    <div className="buttons">
                        <span>Not a member?</span> &nbsp; &nbsp;
                        <a onClick={() => history.push('/registration')}
                           className="btn btn-dark cursor-pointer">
                            Registration
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
