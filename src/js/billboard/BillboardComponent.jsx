import React, {Component} from 'react';
import OnboardingPage from './OnboardingPage.jsx';
import StartApp from './StartApp.jsx';

class BillboardComponent extends Component{

  constructor(){
    super();

    this.state = {
      stappen:{
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
        },
        "4": {
          "title": "Kies je favoriete kunstwerk",
        },
        "5": {
          "title": "Kies een stukje om te gebruiken",
        },
        "6": {
          "title": "Laat de kunstenaar in je vrij!",
        },
        "7": {
          "title": "Afronden en delen",
        }
      },

      arts:{
        "1": {
          "title": "Schimmel in een Landschap",
          "artist": "Albert Cuyp",
          "image": "schimmel",

          "stukken": {
            "1": {
              "id": 1,
              "name": "paardenhoofd",
              "info": "Het hoofdmotief op dit schilderij van Aelbert Cuyp is de schimmel die breeduit van de zijkant is geportretteerd.",
              "x": 100,
              "y": 100
            },
            "2": {
              "id": 2,
              "name": "hond",
              "info": "hoofd van een hond",
              "x": 120,
              "y": 320
            }
          }
        }
      }

      , currentPage: 5, chosenArt: 1, chosenPiece: {}, isSelected: false, chosenPieceNr:1
    }

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  // componentDidMount() {
  //   fetch('./assets/data/onboarding.json')
  //   .then(r => r.json())
  //   .then(this.parseOnboarding);
  // }

  // parseOnboarding = data => {
  //   this.setState({onboarding:data});
  // }

  handleNext() {
    console.log();

    this.setState({ currentPage: this.state.currentPage + 1});
  }

  handleBack() {
    this.setState({ currentPage: this.state.currentPage - 1});
  }

  handleSelect(stuk, id) {
    // this.setState({ currentPage: stuk});

    const chosenPiece = {};
    chosenPiece[id] = {key: id, name: stuk.name, info: stuk.info}
    this.setState({chosenPiece});

    this.setState({ isSelected: true });

    this.setState({ chosenPieceNr: stuk.id });

  }

  render() {
    const {stappen, currentPage, arts, chosenArt, chosenPiece, isSelected, chosenPieceNr} = this.state;
    return (
      // <div>
      //   {(currentPage >= 4 ? (
      //     <StartApp 
      //       currentPage={currentPage} 
      //       stappen={stappen} 
      //       onBack={this.handleBack} 
      //       onNext={this.handleNext} 
      //       arts={arts} 
      //       chosenArt={chosenArt} 
      //       onSelect={this.handleSelect} 
      //       chosenPiece={chosenPiece} 
      //       isSelected={isSelected}
      //     />
      //   ) : (
      //     <OnboardingPage 
      //       onboarding={stappen} 
      //       currentPage={currentPage} 
      //       onNext={this.handleNext} 
      //       onBack={this.handleBack}/>
      //   ))}
      // </div>
      <StartApp 
        currentPage={currentPage} 
        stappen={stappen} 
        onBack={this.handleBack} 
        onNext={this.handleNext} 
        arts={arts} 
        chosenArt={chosenArt} 
        onSelect={this.handleSelect} 
        chosenPiece={chosenPiece} 
        isSelected={isSelected}
        chosenPieceNr={chosenPieceNr}
      />
    );
  }
}

export default BillboardComponent;
