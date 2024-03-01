import * as components from './components/indexpadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot,
			(innerHTML = `
      <my-component nombre="hola como estas" ></my-component>`);
	}
}

customElements.define('app-container', AppContainer);
