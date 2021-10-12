import React from "react";
import {Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import * as auth_actions from "../../_redux/auth/actions";

export function Header() {
    let history = useHistory();
    const dispatch = useDispatch();

    const logout = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to logout.',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(auth_actions.logout())
                    .then((response) => {
                        if (response) {
                            history.push('/login');
                        }
                    });
            } else if (result.isDenied) {
                Swal.close();
            }
        })
    }

    return (
        <>
            <Navbar style={{backgroundColor: "#616161", height: "80px"}}>
                <Navbar.Brand href="#home" style={{color: "white"}}>
                    <span style={{marginLeft: "20px", fontSize: "18px"}}>React Boiler</span>
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end text-white cursor-pointer">
                    <span style={{marginRight: "20px", fontSize: "18px"}}
                          onClick={() => logout()}>Logout</span>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
