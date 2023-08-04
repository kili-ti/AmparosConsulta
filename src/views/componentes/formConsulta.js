/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect, deepValue } from "@brunomon/helpers";
import { PERSON } from "../../../assets/icons/svgs";
import { gridLayout } from "@brunomon/template-lit/src/views/css/gridLayout";
import { input } from "@brunomon/template-lit/src/views/css/input";
import { select } from "@brunomon/template-lit/src/views/css/select";
import { check } from "@brunomon/template-lit/src/views/css/check";
import { button } from "@brunomon/template-lit/src/views/css/button";
import { SpinnerControl } from "./spinner";
import { AlertControl } from "./alert";
import { ConfirmControl } from "./confirm";
import { showAlert, showConfirm } from "../../redux/ui/actions";
import { showSpinner } from "../../redux/api/actions";

const CONSULTA = "consulta.timeStamp";

export class formConsulta extends connect(store, CONSULTA)(LitElement) {
    constructor() {
        super();
        store.dispatch(showSpinner());
        this.consulta = {};
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${input}
            ${select}
            ${check}
            ${button}

            :host {
                display: grid;
                grid-auto-flow: row;
                background-color: var(--formulario);
                padding: 2rem;
                grid-gap: 1rem;
                overflow-y: scroll;
            }
            svg {
                height: 1rem;
                width: 1.2rem;
            }
            button[circle][big] svg {
                height: 2rem;
                width: 2rem;
            }
            button[etiqueta] {
                display: grid;
                grid-auto-flow: column;
                grid-template-columns: auto 1fr;
                grid-gap: 0.3rem;
                align-items: center;
                align-content: center;
            }

            .spinner-container {
                position: relative;
                color: var(--on-formulario);
            }
            .justificado {
                text-align: justify;
            }
        `;
    }

    render() {
        return html`
            <div class="inner-grid fit18">
                <div class="inner-grid">
                    <button flat>Apellido: ${this.consulta.ape}</button>
                    <button flat>Nombre: ${this.consulta.nom != this.consulta.ape ? this.consulta.nom : ""}</button>
                    <button flat>Nº documento: ${this.consulta.nro_doc}</button>
                    <button flat>Asesor legal: ${this.consulta.asesor}</button>
                    <button flat>Recepción: ${this.formatoFecha(this.consulta.frecepcion.substring(0, 10))}</button>
                    <button flat>Inicio Vigencia: ${this.formatoFecha(this.consulta.fvigenciainicio.substring(0, 10))}</button>
                </div>
                <div class="inner-grid fit18">
                    <button flat>Plan: ${this.consulta.plan}</button>
                    <button flat>CEMAP: ${this.consulta.cemap}</button>
                    <button flat>Tipo: ${this.consulta.tipo}</button>
                    <button flat>Motivo: ${this.consulta.motivo}</button>
                    <button flat>Carpeta: ${this.consulta.nrocarpeta}</button>
                    <button flat>Fin Vigencia: ${this.formatoFecha(this.consulta.fvigenciafin.substring(0, 10))}</button>
                </div>
                <div class="inner-grid fit18">
                    <button raised="" disabled="" class="justificado">Observaciones: ${this.consulta.observaciones}</button>
                </div>
            </div>
            <div class="lista inner-grid ">
                ${this.consulta.imagenes?.map((item) => {
                    return html`<div @click=${this.portaPapeles} .item=${item}>
                        <div>${item.idimagen} <img src=${item.urlnom} /></div>
                    </div> `;
                })}
            </div>
        `;
    }

    formatoFecha(pFecha) {
        pFecha = pFecha.substring(8, 10) + "-" + pFecha.substring(5, 7) + "-" + pFecha.substring(0, 4);
        return pFecha;
    }

    portaPapeles(e) {
        navigator.clipboard.writeText(e.currentTarget.item.urlnom);
    }

    stateChanged(state, name) {
        if (name == CONSULTA) {
            this.consulta = state.consulta.entities;
        }
        this.update();
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size",
            },
            orientation: {
                type: String,
                reflect: true,
            },
        };
    }
}
window.customElements.define("form-consulta", formConsulta);
