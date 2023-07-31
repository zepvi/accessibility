import logo from "./assets/redDragon.jpg";
import team from "./assets/logo.jpg";
import teamImg from "./assets/team.jpg";
// Team Images
import messi from "./assets/images/messi.jpg";
import julian from "./assets/images/julian.webp";
import Enzo from "./assets/images/Enzo.webp";
import alexis from "./assets/images/alexis.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <header className="header">
        <div
          className="logo-container"
          tabindex="0"
          aria-label="Red Dragons Logo"
        >
          <img src={logo} alt="logo of football" className="logo" />
          <p className="logoTitle">Red Dragons</p>
        </div>
        <navigation>
          <a href="./home.html" className="link" aria-label="Home page">
            Home
          </a>
          <a href="./home.html" className="link" aria-label="About page">
            About
          </a>
          <a href="./home.html" className="link" aria-label="News page">
            News
          </a>
          <a href="./home.html" className="link" aria-label="Schedule page">
            Schedule
          </a>
        </navigation>
      </header>

      {/* Content */}
      <div className="content">
        <div className="content-container">
          <div className="content-title">
            <h1 className="content-title-h1">Who we are ?</h1>
            <p className="content-text-p">
              Red Dragons is a football team based in the city of London. Red
              Dragons is a team of football players who play in the Premier
              League.
            </p>
            <button className="content-button">Read More</button>
          </div>
          <div className="content-image">
            <img
              className="content-image-home"
              src={teamImg}
              alt="Red Dragons Football team "
              aria-label="Red Dragons Football team "
            />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="team">
        <div className="team-container">
          <div className="team-title">
            <h2 className="team-title-h1">Top Players</h2>
          </div>
          <div className="team-image-container">
            <div className="team-image" tabindex="0" aria-label="Lionel Messi">
              <img className="team-image-home" src={messi} alt="messi" />
              <p className="players">Lionel Messi</p>
            </div>
            <div
              className="team-image"
              tabindex="0"
              aria-label="Julian Alvarez"
            >
              <img className="team-image-home" src={julian} alt="Julian" />
              <p className="players">Julian Alvarez</p>
            </div>
            <div
              className="team-image"
              tabindex="0"
              aria-label="Enzo Fernandez"
            >
              <img className="team-image-home" src={Enzo} alt="Enzo" />
              <p className="players">Enzo Fernandez</p>
            </div>
            <div
              className="team-image"
              tabindex="0"
              aria-label="Alexis Mac Allister"
            >
              <img className="team-image-home" src={alexis} alt="alexis" />
              <p className="players">Alexis Mac Allister</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="events">
        <div className="events-container">
          <div className="events-title">
            <h2 className="events-title-h1">Upcoming Events</h2>
          </div>
          <div className="events-image-container">
            <div className="events-image">
              <img
                className="events-image-home"
                src={team}
                alt="Red Dragons Football team"
                aria-label="Red Dragons Football team"
              />
            </div>
            <div
              className="events-tabel"
              role="table"
              aria-label="Upcoming Events"
              tabIndex="0"
            >
              <div className="tabel-header" role="row">
                <p
                  className="header-title"
                  style={{ flex: 1 }}
                  role="columnheader"
                  aria-colindex="1"
                >
                  S.No
                </p>
                <p
                  className="header-title"
                  style={{ flex: 2 }}
                  role="columnheader"
                  aria-colindex="2"
                >
                  Date
                </p>
                <p
                  className="header-title"
                  style={{ flex: 3 }}
                  role="columnheader"
                  aria-colindex="3"
                >
                  Venu
                </p>
              </div>
              <div className="tabel-description" role="row" aria-rowindex="1">
                <p className="desc" style={{ flex: 1 }}>
                  1
                </p>
                <p className="desc" style={{ flex: 2 }}>
                  2 June 2024
                </p>
                <p className="desc" style={{ flex: 3 }}>
                  alok grounds, Hyderabad, India
                </p>
              </div>
              <div className="tabel-description" role="row" aria-rowindex="2">
                <p className="desc" style={{ flex: 1 }}>
                  2
                </p>
                <p className="desc" style={{ flex: 2 }}>
                  16 May 2025
                </p>
                <p className="desc" style={{ flex: 3 }}>
                  Alex Townhall, New York, USA
                </p>
              </div>
              <div className="tabel-description" role="row" aria-rowindex="3">
                <p className="desc" style={{ flex: 1 }}>
                  3
                </p>
                <p className="desc" style={{ flex: 2 }}>
                  2 June 2026
                </p>
                <p className="desc" style={{ flex: 3 }}>
                  Warren House, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <div
              className="logo-container"
              tabindex="0"
              aria-label="Red Dragons Logo"
            >
              <img src={logo} alt="logo of football" className="logo" />
              <p className="logoTitle">Red Dragons</p>
            </div>
            <p className="footer-text">
              A Fan Page for Football team where you can find the upcoming
              events and gallery and more
            </p>
          </div>
          <div className="footer-form">
            <h3>Subscribe for daily updates on upcoming events</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="text" className="input" placeholder="Subscribe" />
              <button className="content-button">Subscribe</button>
            </div>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="social"
              >
                Twitter
              </a>
              <a
                href="https://twitter.com"
                aria-label="Facebook"
                className="social"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                aria-label="Instagram"
                className="social"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                aria-label="youtube"
                className="social"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
