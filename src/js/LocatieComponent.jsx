import React from 'react';
import Footer from './FooterComponent.jsx';
import ReactMapboxGl, { Layer } from "react-mapbox-gl";


const LocatieComponent = () => {
  const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicmVtY292YiIsImEiOiJjamlhYTk1ajkwMzQ1M3ZwZDR3cm8zN2E4In0.ZqO239zeT4FZ_oszftfYcw"
});

const style = "mapbox://styles/remcovb/cjibdfsrs0gx32ss0yv52jfje";

  return (
    <div className="kunstwerkenContainer">
      <section className="page-header">
        <h2>Waar zijn onze billboards te vinden?</h2>
      </section>
      <div className="map-center">

      <Map style={style}
  containerStyle={{
    height: "60vh",
    width: "80vw"
  }}
  center={["4.460390", "51.924469"]}
  >
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
    </Layer>

    </Map>
    </div>


      <Footer />
    </div>
  );
}

export default LocatieComponent;
