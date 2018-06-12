import Onboard from '../models/Onboard';
import { decorate, observable } from "mobx";

class Store {

    onboardingPages = [];

    constructor(){
        this.addPost(new Onboard( ));
    }

    addPost = (post, callback) => {
        this.posts.push(post);
        console.log(post.id);
    }

}

decorate(Store, {
    onboardingPages: observable,
});

const store = new Store();
export default store;
