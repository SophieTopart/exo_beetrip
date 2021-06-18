import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'


const Home = () => {
    const [city, setCity] = useState([])
    const [input, setInput] = useState("")
    console.log(input)

    const handleSubmit = (e) => {
        e.preventDefault();
      };

        const getCity = async () => {
            try {
                const city = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=98b7465353d383f3d0f3bc4a284a48ae`
                )
                setCity(city.data.main.temp)
                console.log(city.data.main.temp)
            } catch (err) {
                console.log(err)
         
    }
}

  

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder="Type a city name" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </form>
        <Link to="/city">
        <button onClick={getCity}>Get temperature</button>
        </Link>
        </>
    )

}

export default Home