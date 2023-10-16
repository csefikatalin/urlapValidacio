import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController {
    #asszinkron;
    #list = [];
    constructor() {
        let adatVegpont = "http://localhost:3000/adat";
        const urlapModel = new UrlapModel();
        console.log(urlapModel.kulcs);
        console.log(urlapModel.kulcs);
        const urlapView = new UrlapView(
            urlapModel.kulcs,
            urlapModel.tipus,
            $(".urlap")
        );
        /* this.#asszinkron = new Asszinkron();
        this.#asszinkron.getData(adatVegpont, feldolgoz); */
    }
    feldolgoz(data) {
        this.#list = [...data];
        console.log(this.#list);
    }
}
export default UrlapController;
