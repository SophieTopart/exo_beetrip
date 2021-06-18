import { useContext } from "react";
import WeatherContext from "../contexts/context";
import { Div, Text, Button } from "../assets/Theme";
import { Link } from "react-router-dom";

const City = () => {
  const { loading, city, temp } = useContext(WeatherContext);
  const background = temp < 15 ? "blue" : "orange";

  if (loading) return <Div>Loading...</Div>;

  return (
    <>
      {city.length ? (
        <Div style={{ backgroundColor: background }}>
          <Text>
            Vous êtes à {city}, il fait {temp}°C.
          </Text>
          {temp < 15 ? (
            <Text>Prenez votre manteau !</Text>
          ) : (
            <Text>C'est l'été, profitez-en !</Text>
          )}
          <Link to="/">
            <Button>Retour</Button>
          </Link>
        </Div>
      ) : (
        <Div>
          <p>Ce nom de ville n'existe pas, réessayez.</p>
          <Link to="/">
            <Button>Retour</Button>
          </Link>
        </Div>
      )}
    </>
  );
};

export default City;
