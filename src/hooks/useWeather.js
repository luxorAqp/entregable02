import axios from "axios";
import { useEffect, useState } from "react";
const useWeather = () => {
  const [compoWeather, setCompoWeather] = useState();

  //State change  grades button
  const [degrees, setDegresse] = useState();

  //Create state to know is celcious or kelvin
  const [isCelcious, setIsCelcious] = useState(true);
  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=bd6821dcaaa1b8fa8bc24c1129d5ab03`
        )
        .then((res) => {
          setCompoWeather(res.data);
          setDegresse((res.data.main.temp - 273.15).toFixed(0));
        });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  //Create function change degrees to convert
  const changeDegrees = () => {
    if (isCelcious) {
      setDegresse((degrees * (9 / 5) + 32).toFixed(0));
      setIsCelcious(false);
    } else {
      setDegresse(((degrees - 32) * (5 / 9)).toFixed(0));
      setIsCelcious(true);
    }
  };

  return { compoWeather, degrees, isCelcious, changeDegrees };
};

export default useWeather;
