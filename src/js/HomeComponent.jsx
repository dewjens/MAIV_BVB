import React from 'react';
import {Link} from 'react-router-dom'
import Kunstwerk from './Kunstwerk.jsx';
import Footer from './FooterComponent.jsx';
import Anime from 'react-anime';

const InfoComponent = () => {

  return (
      <div className="homeContainer">
        <section className="header width">
          <article className="headertxt txt">
            <h2>Hoe bedoel je: "kunst is gaar"?</h2>
            <p>Kunst hoeft helemaal niet suf te zijn met Boijmans Billboards.
            <br/>
            Wij bieden jou nu de kans om mee te werken aan een collaboratief kunstwerk die tentoongesteld zal worden in museum Boijmans van Beuningen. That’s right.
            <br/>
            <span>JOUW WERK. IN HET MUSEUM</span>.</p>

            <Link className="button button_wit" to="/locaties">Ontdek de locaties</Link>
            <Link className="secondLink" to="/kunstwerken">of bekijk de reeds gemaakte werken</Link>
          </article>

          <picture className="headerpicture">
            <img className="headerimg" src="./assets/img/headerimg.png" alt="billboards"/>
          </picture>
        </section>

        <section className="scanBillboard width">
          <p className="howTo">Hoe ga je te werk?</p>

          <article className="scanBillboardtxt txt">
              <h3 className="title_black">Scan een van onze billboards</h3>
              <p>Hoe doe je mee? Onze billboards staan verspreid over de hele stad. <span className="highlight"> Op ieder billboard staat een QR-code die gescanned kan worden </span> met jouw telefoon. Heb je geen QR-scanner? Surf dan naar ... om direct te beginnen!</p>


              <Link className="button button_geel" to="/qrscanner">

               <span className="nieuwe-button">Gebruik onze QR-scanner</span>
             </Link>

          </article>
          <picture className="scanpicture">
            <img  className="kunststukje-img scan-img" src="./assets/img/scanimg.png" alt="scan een qr code"/>
          </picture>
        </section>

        <section className="kiesKunststuk width">
          <picture className="kunstpicture">
            <img className="kunststukje-img" src="./assets/img/kunststukimg.png" alt="kunststuk"/>
          </picture>

          <article className="kunststuk txt">
            <h3 className="title_geel">kies je kunststuk</h3>
            <p>Van de 150.000 kunstwerken van Museum Boijmans van Beuningen worden er <span className="highlightblack">drie willekeurig aan jou voorgeschoteld. </span> Daar mag jij één van kiezen waar je mee gaat werken om een tof kunstwerk te maken.</p>
          </article>
        </section>

        <section className="kunstenaarVrij width">
          <article className="kunstenaarVrijtxt txt">
            <h3 className="title_geel2">Laat de kunstenaar in je vrij</h3>
            <p>Zodra je een deel van het kunstwerk hebt uitgekozen om mee te werken, kan je die <span className="highlight">naar jouw wens aanpassen en op het canvas plaatsen. </span> Wanneer het canvas klaar is, zal het worden opgeslagen en zal het, wanneer het zover is, tentoongesteld worden bij de heropening van het museum.

            <br/>
            <span>Waar wacht je nog op? Pak snel je telefoon!</span>
            </p>
          </article>

          <picture className="kunstenaarpicture">
            <img className="kunststukje-img" src="./assets/img/kunstenaarimg.png" alt="kunstenaar"/>
          </picture>
        </section>

        <section className="boijmansCollectie width">
          <h3 className="title_wit">word deel van Boijmans billboard collectie</h3>

          <div className="wordDeel">
            <picture className="collectiepicture">
              <img className="collectie-img" src="./assets/img/collectieimg.png" alt="collectie"/>
            </picture>

            <article className="collectietxt txt">

              <p>Dus. Bij de heropening van het Boijmans van Beuningen museum zal jouw naam shinen bij de gedeelde kunstwerken die worden tentoongesteld. Hoe tof is dat?
              <br/>
              Want Boijmans van Beuningen is van iedereen, dus ook van jou!
              <br/>
              Scroll naar beneden om het werk van anderen te bekijken. Dat kan jij toch veel beter? ;)
              </p>
            </article>
          </div>

          <article className="spotlight">
            <h3>Deze werken komen al in het museum</h3>

            <section className="kunstwerken">
              <Kunstwerk />
              <Kunstwerk />
              <Kunstwerk />
              <Kunstwerk />
            </section>

            <Link className="button button_wit" to="/kunstwerken">Ontdek ze allemaal</Link>
          </article>
        </section>

        <Footer />

      </div>

  );
}

export default InfoComponent;
