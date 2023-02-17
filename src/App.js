import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      withCredentials: true,
      crossorigin: true,
      mode: "no-cors",
    };
    fetch("http://anhchiem.xyz:43221/players.json", config)
      .then((response) => response.text())
      .then((buffer) => console.log(buffer))
      .catch((error) => {
        // console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
