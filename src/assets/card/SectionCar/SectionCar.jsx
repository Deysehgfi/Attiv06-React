import Button from "../Button/Button";
import './SectionCar.css'



const SectionCar= ({titulo, texto, image, color}) =>{ //coloca uma props para a
    return(
        <>
        <article style={{backgroundColor: color}}>
        <img src={image} alt="logo dos cards" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button nome="Learn More" />
        </article>
        </>
        
        
    )
}


export default SectionCar;