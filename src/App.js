import React, { useEffect } from "react";

function App() {

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
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Đây là trang web</h3>
      </header>
    </div>
  );
}

export default App;
