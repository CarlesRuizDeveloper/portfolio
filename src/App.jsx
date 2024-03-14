import React from 'react';

import ContactInfoCard from './components/ContactInfoCard';
import ReactiveScreen from './components/ReactiveScreen';
import PhoneContactInfoCard from './components/PhoneContactInfoCard';
import useWindowDimensions from './components/useWindowSize';
import ConstellationsBackground from './components/ConstellationsBackground';

function App() {
  const { width } = useWindowDimensions();
  const isTabletOrPhone = width <= 768;

  return (
    <div className="relative z-0">   
      <ConstellationsBackground />
      <main className="mt-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-[41%] ">
            {isTabletOrPhone ? <PhoneContactInfoCard /> : <ContactInfoCard />}
          </div>
          <div className="w-full lg:w-[65%] ml-0 lg:ml-[-10%]">
            <ReactiveScreen />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
