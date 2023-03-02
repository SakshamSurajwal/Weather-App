const key = `66ecb24fb014862b8631939273bb0a88`;

const getIcon=(icon_key)=>{
    return `http://openweathermap.org/img/wn/${icon_key}@2x.png`;
}

const getAPI= async (city,units=`metric`)=>{
    const request=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&${units}`;
    const data= await fetch(request).then((res)=> res.json()).then((data)=> data).catch((err)=>{
        console.log(err);
    })
    const {weather,main:{temp,feels_like,temp_min,temp_max,pressure,humidity},wind:{speed},sys:{country},name}=data;
    const {description,icon}=weather[0];
    return {description:description,iconURL:getIcon(icon),temp,feels_like,temp_max,temp_min,pressure,humidity,speed,country,name};
};
export {getAPI};