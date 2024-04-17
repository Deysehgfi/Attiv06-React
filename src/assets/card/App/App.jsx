import SectionCar from "../SectionCar/SectionCar";
import IconSedan from "../../../column-card/images/icon-sedans.svg";
import IconSuvs from "../../../column-card/images/icon-suvs.svg"

import IconLuxury from "../../../column-card/images/icon-luxury.svg"

// import font from '../../Font/'

import './App.css'
const App = () => {
    return (
        <section className="Container">
         <SectionCar
         titulo="SEDANS"
         texto="Choose  a sedan for its affordabilly and excellent fuel economy. idal for crusing in the city or on your next read trip"
        image={IconSedan}
        color="hsl(31, 77%, 52%)"
        />
        

        <SectionCar
        titulo={"SUVS"}
        texto="Choose  a sedan for its affordabilly and excellent fuel economy. idal for crusing in the city or on your next read trip"
        image={IconSuvs}
        color="hsl(184, 100%, 22%)"
        
        />

       <SectionCar
        titulo={"LUXURY"}
        texto="Choose  a sedan for its affordabilly and excellent fuel economy. idal for crusing in the city or on your next read trip"
        image={IconLuxury}
        color="hsl(179, 100%, 13%)"
        
        />

        </section>
        

    )
}

export default App;
