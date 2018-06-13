import React from 'react';
import AppHeader from './AppHeader.jsx';
import ChooseArt from './ChooseArt.jsx';
import PickPiece from './PickPiece.jsx';
import ImageApp from './ImageApp.js';


const StartApp = ({currentPage, onBack, onNext, stappen, arts, chosenArt, onSelect, chosenPiece, isSelected, chosenPieceNr}) => {
  return (
      <div className="appContainer">
        <AppHeader currentPage={currentPage} onBack={onBack} stappen={stappen} />

        {console.log(currentPage)}
        {  console.log(chosenPieceNr)}

        {(() => {
          switch (currentPage) {
            case 4: return(
              <ChooseArt 
                onNext={onNext} 
                arts={arts} 
                chosenArt={arts[chosenArt]}
              />);
            case 5: return (
              <PickPiece 
                onNext={onNext} 
                arts={arts} 
                chosenArt={arts[chosenArt]} 
                onSelect={onSelect}
                chosenPiece={chosenPiece}
                isSelected={isSelected}
               
              />);
            case 6: return (
              <ImageApp 
                arts={arts} 
                chosenPieceNr={chosenPieceNr}
                chosenArt={chosenArt} 
              />
            );
            default: return "oops geen stap";
          }
        })()}
      </div>

  );
}

export default StartApp;
