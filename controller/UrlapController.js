import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/urlap/UrlapView.js";
import Asszinkron from "../model/Asszinkron.js";

class UrlapController {
    #asszinkron;
   
    constructor() {
       
        this.urlap()
        /* this.#asszinkron = new Asszinkron();
        this.#asszinkron.getData(adatVegpont, feldolgoz); */
        this.asszinkronAdatok();
    }
    asszinkronAdatok() {
        let adatVegpont = "http://localhost:3000/adat";
        this.#asszinkron = new Asszinkron();
        this.#asszinkron.getData(adatVegpont, this.feldolgoz);
    }
    urlap() {
        const urlapModel = new UrlapModel();
        const urlapView = new UrlapView(urlapModel.adatLeiras, $(".urlap"));
    }
    feldolgoz(data) {
        console.log(data);
       
    }
}
export default UrlapController;
