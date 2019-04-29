/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseElement, html, property, query, observer, addHasRemoveClass } from '@material/mwc-base/base-element.js';
import MDCIconButtonToggleFoundation from '@material/icon-button/foundation.js';
import { ripple } from '@material/mwc-ripple/ripple-directive.js';
export class IconButtonBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCIconButtonToggleFoundation;
        this.label = '';
        this.disabled = false;
        this.icon = '';
        this.offIcon = '';
        this.on = false;
    }
    createAdapter() {
        return Object.assign({}, addHasRemoveClass(this.mdcRoot), { setAttr: (name, value) => {
                this.mdcRoot.setAttribute(name, value);
            }, notifyChange: (evtData) => {
                if (this.offIcon === '') {
                    return;
                }
                this.dispatchEvent(new CustomEvent('MDCIconButtonToggle:change', { detail: evtData, bubbles: true }));
            } });
    }
    handleClick() {
        if (this.offIcon !== '') {
            this.on = !this.on;
            this.mdcFoundation.handleClick();
        }
    }
    focus() {
        this.mdcRoot.focus();
    }
    updated() {
        if (this.offIcon === '') {
            this.on = true;
        }
    }
    render() {
        return html `
      <button
        .ripple="${ripple()}"
        class="mdc-icon-button"
        @click="${this.handleClick}"
        aria-hidden="true"
        aria-label="${this.label}"
        ?disabled="${this.disabled}">
        <i class="material-icons mdc-icon-button__icon">${this.offIcon}</i>
        <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">${this.icon}</i>
      </button>`;
    }
}
__decorate([
    query('.mdc-icon-button')
], IconButtonBase.prototype, "mdcRoot", void 0);
__decorate([
    property({ type: String })
], IconButtonBase.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], IconButtonBase.prototype, "offIcon", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (state) {
        this.mdcFoundation.toggle(state);
    })
], IconButtonBase.prototype, "on", void 0);
//# sourceMappingURL=icon-button-base.js.map