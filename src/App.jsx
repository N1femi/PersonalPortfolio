import GameplayHero from "./components/GameplayHero/GameplayHero"
import Header from "./components/Header/Header"
import ActivityPage from "./pages/ActivityPage/ActivityPage"

import { useState, useEffect, useRef } from "react"



function App() {
  const [scrollAmount, setScrollAmount] = useState(0)
  const [pageScrollLimit, setPageScrollLimit] = useState(0)
  const [displayScroll, setDisplayScroll] = useState(0)

  const mainContentRef = useRef(null)
  const heroScrollingLimit = 450
  const maxScroll = heroScrollingLimit + pageScrollLimit
  const dampener = 0.08


  /* Main Preview Scrolling */
  useEffect(function () {
  if (mainContentRef.current) {
    const contentStart = mainContentRef.current.offsetTop
    const contentHeight = mainContentRef.current.scrollHeight

    const scrollLimit = contentStart + contentHeight - window.innerHeight

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

  useEffect(function () {
    let animationFrame

    function smoothScroll() {
      setDisplayScroll(function (oldDisplayScroll) {
        const difference =
          scrollAmount - oldDisplayScroll

        return oldDisplayScroll + difference * dampener
      })

      animationFrame =
        requestAnimationFrame(smoothScroll)
    }

    animationFrame =
      requestAnimationFrame(smoothScroll)

    return function () {
      cancelAnimationFrame(animationFrame)
    }
  }, [scrollAmount])

  const heroScroll = Math.min(displayScroll, heroScrollingLimit)
  const pageScroll = Math.max(displayScroll - heroScrollingLimit, 0)
  

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