/** @format */

import {} from "../css/main.css";
import {} from "../css/media.css";
import {} from "../css/nunito.css";
import {} from "../css/fontSizes.css";
import {} from "../css/colors.css";
import {} from "../css/shadows.css";

import { store } from "./redux/store";
import { captureMedia } from "./redux/ui/actions";
import { goTo } from "./redux/routing/actions";
import { viewManager } from "./views/manager";

import { register as registerSW, activate as activateSW } from "./libs/serviceWorker";

if (process.env.NODE_ENV === "production") {
    registerSW();
    activateSW();
}

viewMode("main");
store.dispatch(captureMedia());
store.dispatch(goTo("main"));

console.log("Sirviendo datos de :" + SERVICE_URL);
/* if ("credentials" in navigator) {
    navigator.credentials
        .get({ password: true, mediation: "optional" })
        .catch((err) => console.log("navigator.credentials.get: No funciona en Firefox"))
        .then((cred) => {
            if (cred) {
                store.dispatch(login(cred.id, cred.password, true));
            } else {
                store.dispatch(goTo("login"));
            }
        });
} else {
    store.dispatch(goTo("login"));
}
 */
export default {
    login: (email, password) => {
        store.dispatch(login(email, password));
    },
    cambioClave: () => {
        store.dispatch(goTo("cambioClave"));
    },
    miembro: () => {
        store.dispatch(goTo("serMiembro"));
    },
};

import { consultar as TraerAmparo } from "./redux/consulta/actions";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pNroCarpeta = urlParams.get("qNroCapeta");

/* if (pNroCarpeta != undefined && pNroCarpeta != null && pNroCarpeta != "") {
    store.dispatch(TraerAmparo(pNroCarpeta));
} */
//store.dispatch(TraerAmparo(pNroCarpeta));

let NroCarpeta = "123F";
store.dispatch(TraerAmparo(NroCarpeta));
