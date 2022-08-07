export function Nav() {
  return (
    <nav
      className="navbar nav-down"
      data-fullwidth="true"
      data-menu-style="transparent"
      data-animation="shrink"
    >
      <div className="container">
        <div className="navbar-header">
          <div className="container">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <a className="navbar-brand to-top" href="#">
              <img
                src="img/assets/logo-light.png"
                className="logo-light"
                alt="#"
              />
              <img
                src="img/assets/logo-dark.png"
                className="logo-dark"
                alt="#"
              />
            </a>
          </div>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <div className="container">
            <ul className="nav navbar-nav menu-right">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#works">Work</a>
              </li>
              <li className="dropdown megamenu vos">
                <a className="dropdown-toggle">
                  Elements<i className="ion-ios-arrow-down"></i>
                </a>
                <ul className="dropdown-menu fullwidth">
                  <li className="megamenu-content withdesc">
                    <div className="col-md-3 mg-col">
                      <ul>
                        <li>
                          <a href="elements.html#elements-accordion">
                            Accordion
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-buttons">
                            Buttons
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-features">
                            Icon Features
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-bars">
                            Progress Bars
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-pricing">
                            Pricing Options
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-lists">Lists</a>
                        </li>
                        <li>
                          <a href="elements.html#elements-typography">
                            Typography
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mg-col">
                      <ul>
                        <li>
                          <a href="elements.html#elements-tabs">Tabs</a>
                        </li>
                        <li>
                          <a href="elements.html#elements-circles">
                            Progress Circles
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-icons">
                            Icon Fonts
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-maps">
                            Google Maps
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-grid">
                            Grid Columns
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-countdown">
                            Countdowns
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-testimonials">
                            Testimonials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mg-col">
                      <ul>
                        <li>
                          <a href="elements.html#elements-subscribe">
                            Subscription
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-videos">
                            Video Embeds
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-twitter">
                            Twitter Feed
                          </a>
                        </li>
                        <li>
                          <a href="elements.html#elements-callouts">
                            Callouts
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-contained.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="portfolio-fullwidth.html">
                            Portfolio Fullwidth
                          </a>
                        </li>
                        <li>
                          <a href="project-wide-gallery.html">
                            Project Wide Gallery
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mg-col">
                      <ul>
                        <li>
                          <a href="project-slides.html">Project Slides</a>
                        </li>
                        <li>
                          <a href="project-gallery.html">
                            Projects Gallery
                          </a>
                        </li>
                        <li>
                          <a href="project-video.html">Projects Video</a>
                        </li>
                        <li>
                          <a href="project-wide-slides.html">
                            Project Wide Slides
                          </a>
                        </li>
                        <li>
                          <a href="project-wide-video.html">
                            Project Wide Video
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle">
                  POS IP Cam<i className="ion-ios-arrow-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href={
                        "https://chrome.google.com/webstore/detail/pos-ip-camera/gbmahbabdhohnepmlfchdhlkgneodhjo"
                      }
                    >
                      Chrome Extension
                    </a>
                  </li>
                  <li>
                    <a href="cert.html">Your Certificate</a>
                  </li>
                  <li>
                    <a href="https://youtu.be/L_Ve8t6QZTc">TV Commercial</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="nav-separator"></li>
              <li className="nav-icon">
                <a href="http://facebook.com" target="_blank">
                  <i className="ion-social-facebook"></i>
                </a>
              </li>
              <li className="nav-icon">
                <a href="http://twitter.com" target="_blank">
                  <i className="ion-social-twitter"></i>
                </a>
              </li>
              <li className="nav-icon">
                <a href="#" target="_blank">
                  <i className="ion-help-buoy"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

