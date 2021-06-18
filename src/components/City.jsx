import { useContext } from 'react'
import WeatherContext from '../contexts/context'
import {Div, Text} from '../assets/Theme'

const City = () => {
    const { input, temp } = useContext(WeatherContext);
    const background = temp < 15 ? "blue" : "orange"
    return (
                <Div style={{backgroundColor: background}}>
                    <Text>Vous êtes à {input}, il fait {temp}°C.</Text>
                    {temp < 15 ? <Text>Prenez votre manteau !</Text> : <Text>C'est l'été, profitez-en !</Text>}
                </Div>
    )
}

export default City