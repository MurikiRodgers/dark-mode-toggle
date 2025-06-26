import React, { useState, useEffect } from 'react'
import Hero from "./components/hero/Hero"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import useLocalStorage from 'use-local-storage'

const App = () => {
  const [switchBtn, setSwitchBtn]= useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light")

  useEffect(()=>{
    if(theme === "dark"){setSwitchBtn(true)}
  },[theme]);

  const toggleTheme = () => {
  const  newTheme=  theme === "light" ? "dark" : "light"
  setTheme(newTheme);
  setSwitchBtn(!switchBtn);
  };
  
  
 
  
  return (
    <div className='main'>
      <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn}/>
      <Hero myTheme={theme}/>
      <Footer myTheme={theme}/>
    </div>
  )
}

export default App
