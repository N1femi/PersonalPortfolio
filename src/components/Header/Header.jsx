import { useState, useEffect } from "react"

import "./Header.css"
import profileImage from "../../assets/images/profile.jpg"
import subscriptionLabel from "../../assets/icons/subscriptionLabel.svg"

function Header() {
  const profileName = "NotN1femi"

  const [currentTime, setCurrentTime] = useState(new Date())
  const [showDate, setShowDate] = useState(true)

  useEffect(function () {
    const clockInterval = setInterval(function () {
      setCurrentTime(new Date())
    }, 1000)

    return function () {
      clearInterval(clockInterval)
    }
  }, [])

  useEffect(function () {
    const fadeInterval = setInterval(function () {
      setShowDate(function (previousValue) {
        return !previousValue
      })
    }, 10000)

    return function () {
      clearInterval(fadeInterval)
    }
  }, [])

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  const formattedDay = currentTime.toLocaleDateString("en-US", {
    weekday: "long"
  })

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  })


  return (
    <header className="portfolio-header">
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <div>
          {profileName}
          <img className="subscription-label" src={subscriptionLabel} alr="Subscription" />
        </div>
        
      </div>

      <nav className="portfolio-nav">
        <a href="#">Activity</a>
        <a href="#">Library</a>
        <a href="#">News</a>
        <a href="#">Bio</a>
      </nav>

      <div className="time-section">
        <span key={showDate} className="changing-time">
          {showDate ? formattedDate : `${formattedDay}, ${formattedTime}`}
        </span>
      </div>
    </header>
  )
}

export default Header