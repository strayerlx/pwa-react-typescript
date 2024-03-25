import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  let pwaEvent: any = null;

  const [RConsole, setRConsole] = useState("");
  const [canInstall, setCanInstall] = useState(true);
  const [browserType, setBrowserType] = useState("Google");

  const init = () => {
    // setBrowserType(browserType)
    setRConsole("初始化")
  }

  const install = () => {
    if (canInstall) {
      setRConsole("安装")
      pwaEvent.prompt()
    }else{
      setRConsole("不可安装")
    }
  }

  useEffect(() => {

    window.addEventListener("beforeinstallprompt", e => {
      pwaEvent = e
    })

    window.addEventListener('appinstalled', function () {
      setCanInstall(false)
      setRConsole("应用已安装")
    });
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={init} style={{ width: "200px", height: "80px", fontSize: "32px" }}>Test</button>
        <button onClick={install} style={{ width: "200px", height: "80px", fontSize: "32px" }}>Install APP</button>
        <div>Browser Type: {browserType}</div>

        <div>console: {RConsole}</div>

        <a href="http://192.168.1.31:7456/">game</a>
      </header>
    </div>
  );
}

export default App;