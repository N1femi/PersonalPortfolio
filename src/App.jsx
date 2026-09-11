import GameplayHero from "./components/GameplayHero/GameplayHero"
import Header from "./components/Header/Header"
import ActivityPage from "./pages/ActivityPage/ActivityPage"

import { useState, useEffect, useRef } from "react"



function App() {
  const [scrollAmount, setScrollAmount] = useState(0)
  const [pageScrollLimit, setPageScrollLimit] = useState(0)
  const [displayScroll, setDisplayScroll] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)

  const mainContentRef = useRef(null)
  const heroRef = useRef(null)

  const heroScrollingLimit = window.innerHeight * 0.25
  const maxScroll = heroScrollingLimit + pageScrollLimit
  const dampener = 0.08


  /* Main Preview Scrolling */
  useEffect(function () {
    function measureLayout() {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.scrollHeight)
      }

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
    }

    measureLayout()

    window.addEventListener("resize", measureLayout)

    return function () {
      window.removeEventListener("resize", measureLayout)
    }
  }, [])

  useEffect(function () {
    function handleWheel(event) {
      setScrollAmount(function (oldScrollAmount) {
        const newScrollAmount = oldScrollAmount + event.deltaY

        return Math.max(0, Math.min(newScrollAmount, maxScroll))
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

  const parallaxSpeed = 0.4

  const rawHeroScroll = displayScroll * parallaxSpeed
  const heroScroll = Math.min(rawHeroScroll, heroMaxScroll)
  const pageScroll = displayScroll
  const heroMaxScroll = Math.max(heroHeight - window.innerHeight, 0)

  console.log(scrollAmount)
  return (
    <div className="page-viewport">
      <div
        ref={heroRef}
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