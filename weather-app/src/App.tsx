import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { LocationData, CurrentData } from './interfaces';

function App() {
  const [current, setCurrent] = useState<CurrentData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  const URL = `http://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${searchQuery ?? 'London'}&aqi=no`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log('Loc', res.data.location);
      setCurrent(res.data.current);
      setLocation(res.data.location);
    });
  }, [URL]);

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <p>Weather app</p>
      <div>
        <p>{location?.name}</p>
        <p>{current?.feelslike_c}</p>
      </div>
    </>
  );
}

export default App;
