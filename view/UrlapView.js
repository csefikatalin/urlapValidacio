class UrlapView {
    #tipus = {};
    #kulcs = {};
    constructor(kulcs, tipus, szuloElem) {
        this.#tipus = tipus;
        this.#kulcs = kulcs;
        this.szuloElem = szuloElem;
        console.log(this.szuloElem);
        szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.htmlOsszallit();
    }
    htmlOsszallit() {
        for (const key in this.#kulcs) {
            console.log(key, this.#tipus[key], this.#kulcs[key]);
            switch (this.#tipus[key]) {
                case "text":
                    this.urlapElem(this.#tipus[key], key, this.#kulcs[key]);
                    break;
                case "number":
                    this.urlapElem(this.#tipus[key], key, this.#kulcs[key]);
                    break;
                default:
                // code block
            }
        }
    }
    urlapElem(tipus, kulcs, ertek) {
        let txt = `<div id="${kulcs}blokk">
                    <label for="${kulcs}">${ertek}</label>
                    <input type="${tipus}" id="${kulcs}" name="${kulcs}">
                </div>`;
        this.formElem.append(txt);
    }
}
export default UrlapView;
