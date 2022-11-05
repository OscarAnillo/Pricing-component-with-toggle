import { useState } from 'react';
import SwitchComponent from './Components/switch-component';
import MainCard from './Components/main-card';
import 'animate.css';
import './App.css';

function App() {
  const [plan, setPlan] = useState("anually");

  const changeHandler = () => {
    setPlan((current) => current === "monthly" ? "anually" : "monthly")
  }

  console.log(plan);
  return (
    <div className="App animate__animated animate__fadeIn">
      <div className='bg'></div>
        <div className='container'>
          <h1 className='pricing-title'>Our Pricing</h1>
          <SwitchComponent changeHandler={changeHandler} />
          <MainCard plan={plan} />
          <div className='bg-bottom'></div>
        </div>
    </div>
  );
}

export default App;
