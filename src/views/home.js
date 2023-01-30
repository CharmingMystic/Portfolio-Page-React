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
            <div className="home-container01">
              <span className="Card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
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
      <div className="home-container02">
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
                <span className="home-text01">
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
          <div className="home-code-embed2">
            <DangerousHTML
              html={`<html>
  <head>
    <title>Advanced Marker Simple HTML</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <div id="map"></div>

    <!-- 
      The \`defer\` attribute causes the callback to execute after the full HTML
      document has been parsed. For non-blocking uses, avoiding race conditions,
      and consistent behavior across browsers, consider loading using Promises
      with https://www.npmjs.com/package/@googlemaps/js-api-loader.
      -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=marker&v=beta"
      defer
    ></script>
  </body>
</html>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="Section-Heading home-text06">
              Professional experience
            </h1>
          </div>
          <div className="home-content-container">
            <div className="home-about-1">
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text07 Card-Text">
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  imperdiet.
                </span>
              </div>
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text08 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10 Card-Text">
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text14 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text15 Card-Text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
          <button className="home-button Anchor button">CHECK MY WORK</button>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-clients">
        <div className="home-heading-container2">
          <h1 className="home-text16 Section-Heading">Clients</h1>
          <span className="home-text17 Section-Text">
            Here we will put your clients&apos; or partners&apos; logos
          </span>
        </div>
        <div className="home-logo-container">
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo1"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo2"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo3"
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-logo4"
          />
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-heading-container3">
          <h1 className="home-text18 Section-Heading">Ask for a quote</h1>
          <span className="home-text19 Section-Text">
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card">
            <div className="home-card-heading">
              <span className="home-type Anchor">Minimal</span>
              <span className="Section-Heading">Basic</span>
            </div>
            <div className="home-card-content">
              <div className="home-feature">
                <span className="Card-Text">Feature one</span>
                <span className="home-limit Card-Text">TBD</span>
              </div>
              <div className="home-feature1">
                <span className="Card-Text">Feature two</span>
                <span className="home-limit1 Card-Text">TBD</span>
              </div>
              <div className="home-feature2">
                <span className="Card-Text">Feature three</span>
                <span className="home-limit2 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-feature3">
                <span className="Card-Text">Feature four</span>
                <span className="home-limit3 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-choose button Anchor">CHOOSE</button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-card-heading1">
              <span className="home-type1 Anchor">medium</span>
              <span className="Section-Heading">Complex</span>
            </div>
            <div className="home-card-content1">
              <div className="home-container09">
                <span className="Card-Text">Feature one</span>
                <span className="home-text21 Card-Text">TBD</span>
              </div>
              <div className="home-container10">
                <span className="Card-Text">Feature two</span>
                <span className="home-text23 Card-Text">TBD</span>
              </div>
              <div className="home-container11">
                <span className="Card-Text">Feature three</span>
                <span className="home-text25 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container12">
                <span className="Card-Text">Feature four</span>
                <span className="home-text27 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button1 Anchor button">CHOOSE</button>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card-heading2">
              <span className="home-type2 Anchor">Premium</span>
              <span className="Section-Heading">Professional</span>
            </div>
            <div className="home-card-content2">
              <div className="home-container13">
                <span className="Card-Text">Feature one</span>
                <span className="home-text29 Card-Text">TBD</span>
              </div>
              <div className="home-container14">
                <span className="Card-Text">Feature two</span>
                <span className="home-text31 Card-Text">TBD</span>
              </div>
              <div className="home-container15">
                <span className="Card-Text">Feature three</span>
                <span className="home-text33 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container16">
                <span className="Card-Text">Feature four</span>
                <span className="home-text35 Card-Text">UNLIMITED</span>
              </div>
              <button className="home-button2 Anchor button">CHOOSE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-faqs">
        <h2 className="home-text36 Section-Heading">
          Check the most common questions
        </h2>
        <div className="home-content-container1">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer2 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer4 Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className="Card-Text">
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <img
          alt="image"
          src="/playground_assets/default-img.svg"
          className="home-image1"
        />
        <div className="home-container17">
          <div className="home-heading-container4">
            <h1 className="home-text37 Section-Heading">
              Get our guide to crafting digital products
            </h1>
            <span className="Section-Text home-text38">
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button3 Anchor button">SEND</button>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon22">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
