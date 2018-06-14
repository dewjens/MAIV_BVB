import Onboard from '../models/Onboard';
import { decorate, observable } from "mobx";

class Store {

    onboardingPages = [];

    constructor(){
    }

}

decorate(Store, {
    onboardingPages: observable,
});

const store = new Store();
export default store;
