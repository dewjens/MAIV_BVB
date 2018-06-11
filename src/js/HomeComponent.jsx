import React from 'react';
import {Link} from 'react-router-dom'


const InfoComponent = () => {
  return (
      <div className="homeContainer">
        <section className="header">
          <article className="headertxt">
            <h2>Hoe bedoel je: "kunst is gaar"?</h2>
            <p>Kunst hoeft helemaal niet suf te zijn met Boijmans Billboards.
            <br/>
            Wij bieden jou nu de kans om mee te werken aan een collaboratief kunstwerk die tentoongesteld zal worden in museum Boijmans van Beuningen. That’s right.
            <br/>
            <span className="">JOUW WERK. IN HET MUSEUM</span>.</p>

            <Link to="/locaties"><a>Ontek de locaties</a></Link>
            <Link to="/kunstwerken"><a>of bekijk de reeds gemaakte werken</a></Link>
          </article>

          <article>
            <img src="./assets/img/headerimg.png" alt="billboards"/>
          </article>

          <p>Hoe ga je te werk?</p>
        </section>   

        <section className="scanBillboard">
          <article className="scanBillboardtxt">
            <h3>Scan een van onze billboards</h3>
            <p>Hoe doe je mee? Onze billboards staan verspreid over de hele stad. Op ieder billboard staat een QR-code die gescand kan worden met jouw telefoon. Heb je geen QR-scanner? Surf dan naar ... om direct te beginnen!</p>

            <Link to="/qrscanner"><a>Gebruik onze QR-scanner</a></Link>
          </article>

          <article>
            <img src="./assets/img/scanimg.png" alt="scan een qr code"/>
          </article>
        </section>

        <section className="kiesKunststuk">
          <article>
            <img src="./assets/img/kunststukimg.png" alt="kunststuk"/>
          </article>

          <article className="kunststuktxt">
            <h3>kies je kunststuk</h3>
            <p>Van de 150.000 kunstwerken van Museum Boijmans van Beuningen worden er drie willekeurig aan jou voorgeschoteld. Daar mag jij één van kiezen waar je mee gaat werken om een tof kunstwerk te maken.</p>
          </article>
        </section>

        <section className="kunstenaarVrij">
          <article>
            <h3>Laat de kunstenaar in je vrij</h3>
            <p>Zodra je een deel van het kunstwerk hebt uitgekozen om mee te werken, kan je die naar jouw wens aanpassen en op het canvas plaatsen. Wanneer het canvas klaar is, zal het worden opgeslagen en zal het, wanneer het zover is, tentoongesteld worden bij de heropening van het museum.</p>
          </article>
          
          <article> 
            <img src="./assets/img/kunstenaarimg.png" alt="kunstenaar"/>
          </article>
        </section>

        <section className="boijmansCollectie">
          <div>
            <article>
              <img src="./assets/img/collectieimg.png" alt="collectie"/>
            </article>

            <article className="collectietxt">
              <h3>word deel van Boijmans billboard collectie</h3>
              <p>Dus. Bij de heropening van het Boijmans van Beuningen museum zal jouw naam shinen bij de gedeelde kunstwerken die worden tentoongesteld. Hoe tof is dat? 
              <br/>
              Want Boijmans van Beuningen is van iedereen, dus ook van jou!
              <br/>
              Scroll naar beneden om het werk van anderen te bekijken. Dat kan jij toch veel beter? ;)
              </p>
            </article>
          </div>
          
          <article>
            <h3>Deze werken komen al in het museum</h3>

            <Link to="/kunstwerken"><a>Ontdek ze allemaal</a></Link>
          </article>
        </section>
        
      </div>

  );
}

export default InfoComponent;
