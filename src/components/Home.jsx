import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Div, Button, Input } from '../assets/Theme'
import WeatherContext from '../contexts/context'

const Home = () => {
    const { input, setInput, getCity } = useContext(WeatherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
      };
 
    return (
        <Div>
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Entrez un nom de ville"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
        {input &&
        <Link to="/city">
            <Button onClick={getCity}>Quelle est la température ?</Button>
        </Link> }
       
        </Div>
        
    )

}

export default Home