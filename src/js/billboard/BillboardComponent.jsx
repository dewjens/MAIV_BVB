import React, {Component} from 'react';
import OnboardingPage from './OnboardingPage.jsx';

class BillboardComponent extends Component{

  constructor(){
    super();

    this.state = {
      onboarding:{
        "1": {
          "title": "Welke is jouw favoriet?",
          "tekst": "Kies je favoriet tussen 3 willekeurig geselecteerde kunststukken."
        },
        "2": {
          "title": "Laat de kunstenaar in je vrij",
          "tekst": "Kies waar je jouw unieke kunststuk op het canvas plaatst en maak deel uit van een collaboratief kunstwerk."
        },
        "3": {
          "title": "Jouw kunst in het museum!",
          "tekst": "Bij de heropening van Museum Boijmans Van Beuningen zal jouw kunstwerk tentoon gesteld worden mét jouw naam erbij!"
        }
      }

      , currentPage: 1
    }

    this.handleNext = this.handleNext.bind(this)
  }

  // componentDidMount() {
  //   fetch('./assets/data/onboarding.json')
  //   .then(r => r.json())
  //   .then(this.parseOnboarding);
  // }

  parseOnboarding = data => {
    this.setState({onboarding:data});
  }

  handleNext(page) {
    console.log(page);

    this.setState({ currentPage: page });
  }

  render() {
    const {onboarding, currentPage} = this.state;
    return (
      <div>
        <OnboardingPage onboarding={onboarding} currentPage={currentPage} onNext={this.handleNext}/>
      </div>
    );
  }
}

export default BillboardComponent;
