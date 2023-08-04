/** @format */

import { consultarFetch } from "../fetchs.js";
import { CONSULTAR, CONSULTAR_SUCCESS, CONSULTAR_ERROR } from "./actions";

//import { showSpinner, hideSpinner, showError } from "../actions/ui";
import { hideSpinner, showAlert, showError, showSpinner } from "../ui/actions.js";
//import { apiRequest } from "../actions/api";
//import { RESTAdd, RESTRequest } from "../rest/actions.js";
import { RESTRequest } from "../rest/actions.js";

export const Consulta =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === CONSULTAR) {
            dispatch(RESTRequest(consultarFetch, "?pNroCarpeta=" + action.carpeta, CONSULTAR_SUCCESS, CONSULTAR_ERROR, ""));
            dispatch(showSpinner());
        }
    };
export const processConsulta =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === CONSULTAR_SUCCESS) {
            dispatch(hideSpinner());
        }
    };
export const processErrorConsulta =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);
        if (action.type === CONSULTAR_ERROR) {
            dispatch(hideSpinner());
            dispatch(showError(action.payload.message));
        }
    };

export const middleware = [Consulta, processConsulta, processErrorConsulta];
