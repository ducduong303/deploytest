import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      withCredentials: true,
      crossorigin: true,
      mode: "no-cors",
    };
    // fetch("http://anhchiem.xyz:43221/players.json", config)
    //   .then((response) => response.json())
    //   .then((buffer) => console.log(buffer))

    //   .catch((error) => {
    //     // console.error(error);
    //   });

    // const testURL = "http://anhchiem.xyz:43221/players.json";
    // const myInit = {
    //   method: "GET",
    //   withCredentials: true,
    //   crossorigin: true,
    //   // mode: "no-cors",
    //   mode: 'cors',
    // };

    // const myRequest = new Request(testURL, myInit);

    // fetch(myRequest)
    //   .then(function (response) {
    //     console.log(response.type);
    //     return response.text();
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });
    var requestOptions = {
      method: 'GET',

      withCredentials: true,
      crossorigin: true,

    };
    
    fetch("http://anhchiem.xyz:43221/players.json", requestOptions)
      .then(response => response.text())
      .then(result => console.log('result',result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
