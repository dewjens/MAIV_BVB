import {observable, decorate, action, computed} from "mobx";

class Onboard {
  constructor(title, content, date, author, image, comments) {
    this.title = title;
    this.content = content;
    this.image = image;
  }

}

decorate(Onboard, {

})

export default Onboard;
