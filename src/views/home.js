import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="Card-Heading home-heading">Logo</span>
          <div className="home-links-container">
            <span className="home-link Navbar-Link">Text</span>
            <span className="home-link1 Navbar-Link">Text</span>
            <span className="home-link2 Navbar-Link">Text</span>
            <span className="Navbar-Link">Text</span>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link4 Navbar-Link">About</span>
              <span className="home-link5 Navbar-Link">Experience</span>
              <span className="home-link6 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container2">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              Zamek Książąt Pomorskich w Szczecinie
            </h1>
            <span className="home-text">
              Zamek oraz jego wnętrza to niecodzienna atrakcja. Oczywiście warto
              przyjechać tu, by zwiedzić wszystkie jego niesamowite komnaty i
              zebrane tam eksponaty. Całe mnóstwo atrakcji: koncerty, festiwale
              muzyczne, spektakle teatralne i kabaretowe, wystawy, projekcje
              filmowe, konferencje oraz wykłady, w tym dotyczące upowszechniania
              wiedzy o dziejach Pomorza Zachodniego oraz szereg imprez dla
              dzieci. Takie połączenie sprawia, że rodzinna wycieczka do zamku
              Książąt Pomorskich pochłonie Was zupełnie i sprawi, że
              przeniesiecie się w czasie.
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn Anchor button">
                <span className="home-text1">
                  <span>Pokaż</span>
                  <br></br>
                  <span>Na Mapie</span>
                  <br></br>
                </span>
              </button>
              <button className="home-cta-btn1 Anchor button">
                Dowiedz Się Więcej
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://lh5.googleusercontent.com/p/AF1QipOlhkhWvEMmNCQQU-ORPb4m2_Eoj_ugpHt9toE=w408-h306-k-no"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <div className="home-code-embed">
            <DangerousHTML
              html={`<iframe width="1100" height="660" src="https://api.maptiler.com/maps/2ca24616-9eeb-4e1f-ad42-3c9f3d674c99/?key=QwBzHocJYfa5DBxU6RM4#7.7/53.43042/15.66450"></iframe>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
