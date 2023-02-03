import React from 'react';
import { CurrentData, LocationData } from '../interfaces';

interface Props {
  current: CurrentData | null;
  location: LocationData | null;
}

const Home = ({ current, location }: Props) => {
  return (
    <div className='max-w-5xl mx-auto mt-10 flex space-x-4'>
      <div className='w-2/3 px-6 py-4 bg-[#181818]'>
        <div className='mb-2 flex justify-between border-b-[1px] border-white pb-3'>
          <p className='text-3xl'>
            {location?.name}, {location?.country}
          </p>
          <p className='text-lg'>{location?.localtime.slice(-4)}</p>
        </div>

        <div className='mt-4 border-b-[1px] border-white pb-4 pl-2'>
          <div className='flex items-center justify-center py-4 space-x-4'>
            <img src={current?.condition.icon} alt='' className='w-24 h-24' />
            <div className='flex relative'>
              <p className='text-7xl'>
                {Math.round(current?.feelslike_c ?? 0)}°
              </p>
              <p className='absolute bottom-0 right-0 text-3xl'>C</p>
            </div>
          </div>
          <p className='font-bold mt-4'>{current?.condition.text}</p>
        </div>

        <div className='flex justify-between space-x-6 '>
          <div className='w-1/2'>
            <div className='flex justify-between text-lg py-3 border-b-[1px] border-white'>
              <p>Wind Gusts</p>
              <p>{current?.wind_kph} km/h</p>
            </div>
            <div className='flex justify-between text-lg py-3 border-b-[1px] border-white'>
              <p>Humidity</p>
              <p>{current?.humidity}%</p>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex justify-between text-lg py-3 border-b-[1px] border-white'>
              <p>Pressure</p>
              <p>{current?.pressure_mb} mb</p>
            </div>
            <div className='flex justify-between text-lg py-3 border-b-[1px] border-white'>
              <p>Cloud Cover</p>
              <p>{current?.cloud}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/3 bg-gray-800'>geg</div>
    </div>
  );
};

export default Home;
