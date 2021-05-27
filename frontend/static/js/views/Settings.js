import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return`
            <h1>Eat Poop</h1>
            <p>
                SETTINGS!!!!
            </p>
        `;
    }
}