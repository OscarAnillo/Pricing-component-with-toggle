import { useState } from 'react';
import SwitchComponent from './Components/switch-component';
import './App.css';
import MainCard from './Components/main-card';

function App() {
  const [plan, setPlan] = useState("anually");

  const changeHandler = () => {
    setPlan((current) => current === "monthly" ? "anually" : "monthly")
  }

  console.log(plan);
  return (
    <div className="App">
      <div className='bg'></div>
        <div className='container'>
          <h1 className='pricing-title'>Our Pricing</h1>
          <SwitchComponent changeHandler={changeHandler} />
          <MainCard plan={plan} />
        </div>
    </div>
  );
}

export default App;
