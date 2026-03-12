import { useState, useEffect, useRef } from 'react';
import './App.css';
import eggImage from './assets/trungmuoi.png';
import popSound from './assets/hard-pop-click.wav';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [cupcakesPerSec, setCupcakesPerSec] = useState(0); //Auto-clickers

  // State to track floating animations
  const [clicks, setClicks] = useState([]);

  //Create an audio object using useRef so it persists across renders
  const audioRef = useRef(new Audio(popSound));

  //Upgrade pack
  const buyLavaFlow = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }
  const buyExtraUmami = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }
  const buyBakeryTakeover = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  const buyMixer = () => {
    const cost = 50;
    if (count >= cost) {
      setCount((prevCount) => prevCount - cost);
      setCupcakesPerSec((prevCPS) => prevCPS + 1); //Add 1 cupcake per second.
    }
  };
  const stopMixer = () => {
    setCupcakesPerSec(0);
  };

  //Dynamic background
  const getBackgroundClass = () => {
    if (count >= 10000) return "bg-space";
    if (count >= 1000) return "bg-factory";
    if (count >= 100) return "bg-bakery";
    return "bg-kitchen";
  };

  //Click handler to capture coordinates and trigger animation/sound
  const handleCupcakeClick = (e) => {
    //1. Play sound
    audioRef.current.currentTime = 0; //Reset sound to start
    audioRef.current.play();

    //2. Update count;
    setCount((prevCount) => prevCount + multiplier);

    //3. Create new click animation object
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      value: multiplier
    };

    //4. Add to array
    setClicks((prevClicks) => [...prevClicks, newClick]);

    //5. Remove click object after animation finishes
    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter((click) => click.id !== newClick.id));
    }, 1000);
  };

  //Auto-clicker interval
  useEffect(() => {
    if (cupcakesPerSec > 0) {
      const IntervalId = setInterval(() => {
        setCount((prevCount) => prevCount + cupcakesPerSec);
      }, 1000);
      return () => clearInterval(IntervalId); //Clear the interval if component unmounts or if cupcakesPerSec changes.
    }
  }, [cupcakesPerSec]);

  return (
    <div className={`App ${getBackgroundClass()}`}>
      {clicks.map((click) => (
        <div key={click.id} className="floating-text"
          style={{ left: `${click.x}px`, top: `${click.y}px`, }}>
        +{click.value}</div>
      ))}

      <div className="header">
        <h1>Salted Egg Sponge Cupcake Selector</h1>
        <h2>Count: {count}</h2>
        <img src={eggImage} className="salted-egg" onClick={handleCupcakeClick} alt="Salted egg cupcake"/>
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Lava Flow 🧀</h3>
          <p>2x per click</p>
          <p>Adds a double layer of melted cheese sauce</p>
          <button className="button" onClick={buyLavaFlow} disabled={count < 10}>10 cakes</button>
        </div>

        <div className="upgrade">
          <h3>Extra Umami 🥚</h3>
          <p>5x per click</p>
          <p>Stacked with premium cured salted egg yolks</p>
          <button className="button" onClick={buyExtraUmami} disabled={count < 100}>100 cakes</button>
        </div>

        <div className="upgrade">
          <h3>Bakery Takeover 🍰</h3>
          <p>10x per click</p>
          <p>The ultimate box with pork floss and extra sauce</p>
          <button className="button" onClick={buyBakeryTakeover} disabled={count < 1000}>1000 cakes</button>
        </div>

        <div className="upgrade">
          <h3>Electric Mixer 🔌</h3>
          <p>+1 per second</p>
          <p>Automatically mixes batter while you rest.</p>
          {/* If cupcakesPerSec is 0, show the Buy button. If not, show the Stop button.*/}
          {cupcakesPerSec === 0 ? (
            <button className="button" onClick={buyMixer} disabled={count < 50}>50 cakes</button>
          ) : (
            <button className="button" onClick={stopMixer} style={{ backgroundColor: "#8b0000" }}>Stop Mixer</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;