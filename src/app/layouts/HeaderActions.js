import React from "react";
import {HeaderActionsJSON} from "../json/HeaderActionsJSON";
import {useHistory} from "react-router-dom";

export function HeaderActions({props}) {
    let history = useHistory();

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="widget-box">
                        <div className="widget-field-group">
                            {(() => {
                                if (HeaderActionsJSON.length > 0) {
                                    return HeaderActionsJSON.map((field, index) => (
                                        <div key={index}
                                             className={`widget-field cursor-pointer ${props && props.match.path === field.route ? 'active' : ''}`}
                                             onClick={() => {
                                                 history.push(field.route);
                                             }}>
                                            <div className="field-name">{field.name}</div>
                                        </div>
                                    ))
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
