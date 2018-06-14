import React from 'react';
import {Link} from 'react-router-dom'

const OnboardingPage = ({onboarding, currentPage, onNext, onBack}) => {

  return (
    <div className={"onboarding onboarding" + currentPage}>
      <img src="./assets/img/arrow_back.png" alt="back arrow" className={"arrowBack" + (currentPage===1 ? " hidden" : "")} onClick={onBack}/>
      <img className="animation" src="./assets/img/boijmans-logo.png" alt="logo"/>

      <section>
        <img className="animation" src={"./assets/img/onboarding"+currentPage+".png"} alt="onboarding"/>
        <article className="onboardingtxt animation">
          <h4>{onboarding[currentPage].title}</h4>
          <p>{onboarding[currentPage].tekst}</p>
        </article>
      </section>

      <section className="onboardingBottom">
        <Link to="/billboard" className="onboardingSkip animation">skip</Link>
        <p className="animation">{currentPage}/3</p>
        <img className="animation" src="./assets/img/next.svg" alt="next" onClick={onNext}/>
      </section>
    </div>
  );
}

export default OnboardingPage;
