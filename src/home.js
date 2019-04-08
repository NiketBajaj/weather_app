import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeathersPage from "./components/weathers";
import GalleryPage from "./components/gallery";
import ContactPage from "./components/contact";
import SignInPage from "./components/signIn";

function HomeRouter(props) {
  return (
    <Router>
      <div className="MenuNav">
        <ul className="MenuNav_UL">
          <li className="MenuNav_LI">
            <Link className="MenuNav_Link" to="/">
              Home
            </Link>
          </li>
          <li className="MenuNav_LI">
            <Link className="MenuNav_Link" to="/weather">
              Weather
            </Link>
          </li>
          <li className="MenuNav_LI">
            <Link className="MenuNav_Link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="MenuNav_LI">
            <Link className="MenuNav_Link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="MenuNav_LI_Right">
            <Link className="MenuNav_Link_Right" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={Weather} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>
        At The Weather Network, we are committed to delivering weather
        information 24 hours a day, 365 days a year, across all platforms -
        responsive websites, mobile and tablet applications as well as TV
        applications. Our forecasts go beyond providing people with information
        to plan their daily activities. We are dedicated to delivering
        information so compelling it informs, satisfies and shapes your world.
        It’s your weather when it really matters.
        <br />
        <br />
        Pelmorex Corp. is the umbrella company for{" "}
        <a href="http://www.theweathernetwork.com" target="blank">
          The Weather Network
        </a>{" "}
        (Canada, US and UK),{" "}
        <a href="https://www.meteomedia.com/ca" target="blank">
          MétéoMédia
        </a>{" "}
        (French-speaking Canada), and{" "}
        <a href="https://www.eltiempo.es/" target="blank">
          eltiempo.es
        </a>{" "}
        (Spain).
        <br />
        <br />
        Our brands produce some of the most popular weather and information
        websites, applications, and specialty television networks. Combined
        across the various markets we serve, Pelmorex properties reach over 40
        million users on average each month.
        <br />
        <br />
        Pelmorex digital platforms are extremely comprehensive, with detailed
        city forecasts, active weather alerts and notifications, innovative
        precipitation products, video on demand, satellite and radar maps,
        user-generated photos, local weather news stories and more.
        Internationally, our mobile, tablet, TV and desktop applications
        collectively generate more than 12.5 billion page views per year. <br />
        <br />
        To read more about The Weather Network and all of the brands under the
        same umbrella, please visit{" "}
        <a href="https://www.pelmorex.com/en/" target="blank">
          www.pelmorex.com
        </a>
        .
      </p>
    </div>
  );
}

function Weather() {
  return <WeathersPage />;
}

function Gallery() {
  return <GalleryPage />;
}

function Contact() {
  return <ContactPage />;
}

function SignIn() {
  return <SignInPage />;
}
export default HomeRouter;
