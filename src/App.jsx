import GameplayHero from "./components/GameplayHero/GameplayHero"
import Header from "./components/Header/Header"
import ActivityPage from "./pages/ActivityPage/ActivityPage"

import { useState, useEffect } from "react"



function App() {
  const [scrollAmount, setScrollAmount] = useState(0)

  useEffect(function () {
    function handleWheel(event) {
      setScrollAmount(function (oldScrollAmount) {
        const newScrollAmount = oldScrollAmount + event.deltaY

        return Math.max(0, newScrollAmount)
      })
    }

    window.addEventListener("wheel", handleWheel)

    return function () {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const heroScrollingLimit = 250
  const heroScroll = Math.min(scrollAmount, heroScrollingLimit)

  const pageScroll = Math.max(scrollAmount - heroScrollingLimit, 0)

  console.log(scrollAmount)
  return (
    <>
      <GameplayHero />

      <div className="main-content">
        <Header />
        <ActivityPage />
      </div>
      
    </>
  );
}

export default App;