import {FaArrowDown} from "react-icons/fa";
import {FaArrowUp} from "react-icons/fa";
import {FaTemperatureLow} from "react-icons/fa";
import {BiWind} from "react-icons/bi";
import {WiBarometer} from "react-icons/wi";
import {WiHumidity} from "react-icons/wi";
import "./Description.css";
import {useState,useEffect} from "react";

const Description=(props)=>{

    const [wtr,setWtr]=useState(null);
    const [unit,setUnit]=useState('metric');

    useEffect(()=>{
        const getData= async ()=>{
          const data=await props.weather;
          setWtr(data);
        }
        getData()
      },[props.weather]);
    
    useEffect(()=>{
        setUnit(props.unit);
    },[props.unit])

    return(<>
        {wtr && (
        <div className="desKeeper">
            <div className="des" id="pehla">
                <p className="meas_val"><FaArrowDown className="sign"/> Min</p><br/>
                <p className="val">{(unit===`metric`)?((wtr.temp_min-273.15).toFixed()
                ):(parseInt(((wtr.temp_min-273.15)*1.8).toFixed())+32)} {(unit===`metric`)?`°C`:`°F`}</p><br/>
            </div>
            <div className="des">
                <p className="meas_val"><FaArrowUp className="sign"/> Max</p><br/>
                <p className="val">{(unit===`metric`)?((wtr.temp_max-273.15).toFixed()
                ):(parseInt(((wtr.temp_max-273.15)*1.8).toFixed())+32)} {(unit===`metric`)?`°C`:`°F`}</p><br/>
            </div>
            <div className="des">
                <p className="meas_val"><FaTemperatureLow className="sign"/> Feels like</p><br/>
                <p className="val">{(unit===`metric`)?((wtr.feels_like-273.15).toFixed()):
                (parseInt(((wtr.feels_like-273.15)*1.8).toFixed())+32)} {(unit===`metric`)?`°C`:`°F`}</p><br/>
            </div>
            <div className="des">
                <p className="meas_val"><WiBarometer className="sign"/> Pressure</p><br/>
                <p className="val">{wtr.pressure} hPa</p><br/>
            </div>
            <div className="des">
                <p className="meas_val"><WiHumidity className="sign"/> Humidity</p><br/>
                <p className="val">{wtr.humidity} %</p><br/>
            </div>
            <div className="des">
                <p className="meas_val"><BiWind className="sign"/> Wind Speed</p><br/>
                <p className="val">{wtr.speed} m/s</p><br/>
            </div>
        </div>
    )}</>
    )
}
export default Description;