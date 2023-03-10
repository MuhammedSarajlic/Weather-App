import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserLocationData } from '../interfaces';

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Navbar = ({ setSearchQuery }: Props) => {
  const [userLocationData, setUserLocationData] =
    useState<UserLocationData | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  let coord = `${lat},${lon}`;

  const URL = `http://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&q=${coord}&aqi=no`;

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((res) => {
      setLat(res.coords.latitude);
      setLon(res.coords.longitude);
    });
  }

  useEffect(() => {
    axios.get(URL).then((res) => {
      setUserLocationData(res.data);
      setSearchQuery(res.data.location.name);
    });
  }, [URL]);

  return (
    <>
      <nav className='bg-white border-gray-200 px-2 py-2.5 rounded dark:bg-black'>
        <div className='max-w-5xl container flex flex-wrap items-center justify-between mx-auto'>
          <span className='self-center text-2xl font-bold whitespace-nowrap dark:text-white'>
            Weather App
          </span>
          <div className='relative rounded-lg overflow-hidden w-72 bg-white'>
            <input
              type='text'
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search...'
              className='w-full bg-white outline-none py-2 px-2 text-black border-[1px] border-b-black'
            />
          </div>
          <div className='flex items-center font-bold text-lg'>
            <div className='flex space-x-3'>
              <p>{`${userLocationData?.location.name},${userLocationData?.location.country}`}</p>
              <p>{`${userLocationData?.current.temp_c}°C`}</p>
            </div>
            <img src={userLocationData?.current.condition.icon} alt='' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
