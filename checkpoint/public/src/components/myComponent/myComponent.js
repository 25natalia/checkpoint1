class myComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['nombre', 'casa', 'imagen'];
	}

	connectedcallback() {
		this.render();
	}

	attributeChangeedCallback(propName, oldVlue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/myComponent/myComponent.css">
    <p>${this.nombre || 'por defecto'}</p>
    <p>${this.casa || 'por defecto'}</p>
    `;
	}
}
customElements.define('my-component', myComponent);
export default myComponent;
