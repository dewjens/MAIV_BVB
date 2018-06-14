import React from 'react';
//import AppHeader from './AppHeader.jsx';
import ChooseArt from './ChooseArt.jsx';
import PickPiece from './PickPiece.jsx';
import ImageApp from './ImageApp.jsx';

const StartApp = ({currentPage, onBack, onNext, stappen, arts, chosenArt, onSelect, chosenPiece, isSelected, chosenPieceNr, posts}) => {
  return (
      <div className="appContainer">
        {/* <AppHeader currentPage={currentPage} onBack={onBack} stappen={stappen} /> */}

        {console.log(currentPage)}
        {  console.log(chosenPieceNr)}

        {(() => {
          switch (currentPage) {
            case 4: return(
              <ChooseArt
                onNext={onNext}
                arts={arts}
                chosenArt={arts[chosenArt]}
                currentPage={currentPage} onBack={onBack} stappen={stappen}
              />);
            case 5: return (
              <PickPiece
                onNext={onNext}
                arts={arts}
                chosenArt={arts[chosenArt]}
                onSelect={onSelect}
                chosenPiece={chosenPiece}
                isSelected={isSelected}
                currentPage={currentPage} onBack={onBack} stappen={stappen}
              />);
            case 6: return (
              <ImageApp
                arts={arts}
                chosenPieceNr={chosenPieceNr}
                chosenArt={chosenArt}
                onNext={onNext}
                currentPage={currentPage} onBack={onBack} stappen={stappen}
              />
            );

            default: return "oops geen stap";
          }
        })()}
      </div>

  );
}

export default StartApp;
