var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
let NRGistikComponent = class NRGistikComponent extends LitElement {
    constructor() {
        super(...arguments);
        // Declare reactive properties
        this.name = 'NRGistik';
    }
    render() {
        return html `<p>Hi, ${this.name}!</p>`;
    }
};
// define scoped styles right with your component, in plain CSS
NRGistikComponent.styles = css `
    :host {
      color: red;
    }
  `;
__decorate([
    property()
], NRGistikComponent.prototype, "name", void 0);
NRGistikComponent = __decorate([
    customElement('nrgistik-component')
], NRGistikComponent);
export { NRGistikComponent };
//# sourceMappingURL=test-element.js.map
