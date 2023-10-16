class UrlapView {
    #adatLeiras = {};

    constructor(adatLeiras, szuloElem) {
        this.#adatLeiras = adatLeiras;

        this.szuloElem = szuloElem;
        console.log(this.szuloElem);
        szuloElem.append("<form class=''>");
        this.formElem = this.szuloElem.children("form");
        this.htmlOsszallit();
    }
    htmlOsszallit() {
        for (const key in this.#adatLeiras) {
            console.log(
                key,
                this.#adatLeiras[key].tipus,
                this.#adatLeiras[key].megjelenes
            );
            switch (this.#adatLeiras[key].tipus) {
                case "text":
                    this.urlapElem(this.#adatLeiras[key], key);
                    break;
                case "number":
                    this.urlapNumberElem(this.#adatLeiras[key], key);
                    break;
                default:
                // code block
            }
        }
        this.formElem.append("<input type='submit' value='OK'>");
    }
    urlapElem(leiras, kulcs) {
        let txt = `<div id="${kulcs}blokk" class="mb-3 mt-3">
                    <label for="${kulcs}" class="form-label">${leiras.megjelenes}</label>
                    <input type="${leiras.tipus}" id="${kulcs}" placeholder="${leiras.placeholder}" name="${kulcs}" class="form-control" pattern="${leiras.pattern}">
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback"></div>
                </div>`;
        this.formElem.append(txt);
    }
    urlapNumberElem(leiras, kulcs) {
        let txt = `<div id="${kulcs}blokk" class="mb-3 mt-3">
                    <label for="${kulcs}" class="form-label">${leiras.megjelenes}</label>
                    <input type="${leiras.tipus}" id="${kulcs}" min="${leiras.pattern.min}" max="${leiras.pattern.max}" value="${leiras.pattern.max}" name="${kulcs}" class="form-control" pattern="${leiras.pattern}">
                    <div class="valid-feedback">fsd</div>
                    <div class="invalid-feedback">fsd</div>
                </div>`;
        this.formElem.append(txt);
    }
}
export default UrlapView;
