/** @format */

import { CONSULTAR_SUCCESS } from "./actions";
import { store } from "../store";
import { showAlert, showError } from "../ui/actions";

const initialState = {
    entities: {},
    timeStamp: null,
};
export const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };
    switch (action.type) {
        case CONSULTAR_SUCCESS:
            newState.entities = action.payload.receive;
            newState.timeStamp = new Date().getTime();
            break;
    }
    return newState;
};
