import React from 'react';
import {Link} from 'react-router-dom'

const OnboardingPage = ({onboarding, currentPage, onNext}) => {
  return (
    <div>
      <img src="./assets/img/boijmans-logo.png" alt="logo"/>

      <section>
        <img src={"./assets/img/onboarding"+currentPage+".png"} alt=""/>
        <h4>{onboarding[currentPage].title}</h4>
        <p>{onboarding[currentPage].tekst}</p>
      </section>

      <section>
        <Link to="/">skip</Link>
        <p>{currentPage}</p>
        <img src="../assets/img/next.svg" alt="next" onClick={onNext}/>
      </section>
    </div>
  );
}

export default OnboardingPage;
