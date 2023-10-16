import { adat, tipus, kulcs } from "./adatok.js";

class UrlapModel {
    #adat = [];
    #tipus = {};
    #kulcs = {};
    constructor() {
        this.#adat = adat;
        this.#tipus = tipus;
        this.#kulcs = kulcs;
    }
    get adat() {
        return this.#adat;
    }
    get tipus() {
        return this.#tipus;
    }

    get kulcs() {
        return this.#kulcs;
    }
}
export default UrlapModel;
