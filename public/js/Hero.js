export function Hero() {
  return (
    <div id="hero" className="hero-fullscreen parallax" data-overlay-dark="7">
      <div className="container">
        <div className="background-image">
          <img src="img/backgrounds/bg_web.png" alt="#"></img>
        </div>
        <div className="row">
          <div
            className="hero-content-slider mt20"
            data-autoplay="true"
            data-speed="4000"
          >
            <div>
              <h1>
                I'm Creative
                <br />
                <strong>I Make Cool Shit</strong>
              </h1>
              <p className="lead">
                Beautiful websites. Enterprise web apps. Automation Tools...
              </p>
              <a href="#about" className="btn btn-lg btn-primary btn-scroll">
                My Creations
              </a>
            </div>

            <div>
              <h1>
                I'm Ingenious
                <br />
                <strong>I Make br/ands Shine</strong>
              </h1>
              <p className="lead">
                Innovation, creativity, effectiveness and all that with love.
              </p>
              <a href="#about" className="btn btn-lg btn-primary btn-scroll">
                What I do
              </a>
            </div>

            <div>
              <h1>
                I'm Lazy
                <br />
                <strong>I stole this web template</strong>
              </h1>
              <p className="lead">Good Artists Borrow. Great Artists Steal!</p>
              <a href="#" className="btn btn-lg btn-primary btn-scroll">
                Meet Me
              </a>
            </div>

            <div>
              <h1>
                I'm <i className="fa fa-thumbs-up"></i>'d
                <br />
                <strong>Valued Loved Respected</strong>
              </h1>
              <p className="lead">
                Read some feedback from people I've worked with.
              </p>
              <a href="#about" className="btn btn-lg btn-primary btn-scroll">
                Show Some <i className="ion-heart"></i>
              </a>
            </div>

            <div>
              <h1>
                I Am Chris
                <br />
                <strong>Nice to Meet You</strong>
              </h1>
              <p className="lead">Let's make something awesome together!</p>
              <a href="#team" className="btn btn-lg btn-primary btn-scroll">
                Meet Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

