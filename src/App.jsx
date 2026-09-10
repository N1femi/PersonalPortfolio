import GameplayHero from "./components/GameplayHero/GameplayHero"
import Header from "./components/Header/Header"
import ActivityPage from "./pages/ActivityPage/ActivityPage"

import { useState, useEffect, useRef } from "react"



function App() {
  const [scrollAmount, setScrollAmount] = useState(0)
  const [pageScrollLimit, setPageScrollLimit] = useState(0)

  const mainContentRef = useRef(null)
  const heroScrollingLimit = 200
  const maxScroll = heroScrollingLimit + pageScrollLimit

  useEffect(function () {
  if (mainContentRef.current) {
    const contentStart = mainContentRef.current.offsetTop
    const contentHeight = mainContentRef.current.scrollHeight

    const scrollLimit =
      contentStart +
      contentHeight -
      window.innerHeight

    setPageScrollLimit(
      Math.max(scrollLimit, 0)
      )
    }
  }, [])

  useEffect(function () {
    function handleWheel(event) {
      setScrollAmount(function (oldScrollAmount) {
        const newScrollAmount = oldScrollAmount + event.deltaY

        return Math.max(
          0, 
          Math.min(newScrollAmount, maxScroll)
        )
      })
    }

    window.addEventListener("wheel", handleWheel)

    return function () {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [maxScroll])

  const heroScroll = Math.min(scrollAmount, heroScrollingLimit)
  const pageScroll = Math.max(scrollAmount - heroScrollingLimit, 0)
  

  console.log(scrollAmount)
  return (
    <div className="page-viewport">
      <div
        style={{ transform: `translateY(-${heroScroll}px)` }}
      >
        <GameplayHero />
      </div>

      <div
        ref={mainContentRef}
        className="main-content"
        style={{ transform: `translateY(-${pageScroll}px)` }}
      >
        <Header />
        <ActivityPage />
      </div>
      
    </div>
  );
}

export default App;