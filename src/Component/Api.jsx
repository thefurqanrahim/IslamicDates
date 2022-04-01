import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Api = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);

  const arr = ["Apple", "orange", "mango", "Pomigranate"];
  const curTime = new Date().toLocaleTimeString();
  // const curDay = new Date().toLocaleDayString();
  console.log(curTime);
  const fetchApi = async () => {
    const res = await fetch("https://api.aladhan.com/v1/gToH");
    const fata = await res.json();
    setSecond(fata.data.gregorian.date);
    setThird(fata.data.gregorian.month["en"]);
    setFirst(fata.data.hijri.date);
    setFourth(fata.data.hijri.month["ar"]);
    console.log(fata);
    // document.write(`${data.disclaimer}  ${arr}`)
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="head">
        <h1>Islamic Date</h1>
        <div className="container">
          <div>
            <h2>Time</h2>
            <h4>{curTime}</h4>
          </div>
          <div>
            <h2>Standard Date</h2>
            <h4>{`${second} | ${third}`}</h4>
          </div>
          <div>
            <h2>Hijri Date</h2>
            <h4>{`${first} | ${fourth}`}</h4>
          </div>
          {/* <div>
            <h2>Time</h2>
            <h4>{curDay}</h4>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Api;
