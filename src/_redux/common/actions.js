import {CommonSlices} from "./slices";
import * as requestFromServer from "./cruds";

const {actions} = CommonSlices;

export const search = (identifier) => dispatch => {
    dispatch(actions.startCall({}));

    return requestFromServer.search(identifier)
        .then(response => {
            if (!response.data.success) {
                dispatch(actions.catchError({message: response.data.message}));
                return false;
            }
            
            dispatch(actions.search(response.data.data));
            return response.data;
        });
};