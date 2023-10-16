import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/urlap/UrlapView.js";

class UrlapController {
    #asszinkron;
    #list = [];
    constructor() {
        let adatVegpont = "http://localhost:3000/adat";
        const urlapModel = new UrlapModel();
      
        const urlapView = new UrlapView(
            urlapModel.adatLeiras,          
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
