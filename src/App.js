import hotbg from "./pictures/hot_image.jpg";
import Description from "./compo/Description";
import { useState,useEffect } from "react";
import { getAPI } from "./api";

function App() {

  const [weather,setWeather]=useState(null);
  const [unit,setUnit]=useState('metric');
  const [place,setPlace]=useState(`delhi`);

  useEffect(()=>{
    const getData= async ()=>{
      const data=await getAPI(place);
      setWeather(data);
    }
    getData()
  },[place]);

  const week=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thrusday`,`Friday`,`Saturday`];
  const day=new Date().getDay();


  function func(){
    if(unit==='metric'){
      setUnit(`apple`);
    }
    else{
      setUnit(`metric`);
    }
  }
  function func2(){
    const elem=document.getElementsByClassName(`inp`);
    setPlace(`${elem[0].value}`);
  }


  return (
     <div className="app" style={{backgroundImage:`url(${hotbg})`}}>
      <div className="overlay">
          { weather && (
            <>
            <div className="searchbar">
            <div className="search"><input className="inp" type='text' name='location' placeholder="Enter location"/>
            <button className="button" onClick={func}>{(unit===`metric`)?`°C`:`°F`}</button>
            <button className="button" onClick={func2}>Check Weather</button></div>
            <div className="day">{week[day]}</div>
          </div>
          <div className="main">
          <div className="icon">
            <h3>{`${weather.name},${weather.country}`}</h3>
            <div className="details">
            <img src={weather.iconURL} alt="denoter"/><h3 style={{marginTop:25}}>{weather.description}</h3></div>
          </div>
          <div className="temp">
            <h1>{(unit===`metric`)?((weather.temp-273.15).toFixed()):
            (parseInt(((weather.temp-273.15)*1.8).toFixed())+parseInt(32))} {(unit===`metric`)?`°C`:`°F`}</h1>
          </div>
          </div>
          </>
          )
          }
        </div>
        <Description weather={weather} unit={unit}/>
     </div>
  );
}
export default App;