
// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
// import React from "https://dev.jspm.io/react@16.13.1";
// import React from 'React'
import  React  from 'react';

export default Nav = (props) => {
  const [count, setCount] = React.useState(0);

  return (
     

<div class="navbar nav-down" data-fullwidth="true" data-menu-style="transparent" data-animation="shrink">
    <div class="container">
        <div class="navbar-header">
            <div class="container">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>
                <a class="navbar-brand to-top" href="#">
                    <img src="img/assets/logo-light.png" class="logo-light" alt="#">
                    <img src="img/assets/logo-dark.png" class="logo-dark" alt="#"> 
                </a>
            </div>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
            <div class="container">
                <ul class="nav navbar-nav menu-right">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#works">Work</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle">POS IP Cam<i class="ion-ios-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="https://chrome.google.com/webstore/detail/pos-ip-camera/gbmahbabdhohnepmlfchdhlkgneodhjo">Chrome Extension</a></li>
                            <li><a href="cert.html">Your Certificate</a></li>
                            <li><a href="https://youtu.be/L_Ve8t6QZTc">TV Commercial</a></li>
                        </ul>
                    </li> 
                    <li><a href="#contact">Contact</a></li>
                    <li class="nav-separator"></li>
                    <li  class="nav-icon"><a href="http://facebook.com" target="_blank"><i class="ion-social-facebook"></i></a></li>
                    <li  class="nav-icon"><a href="http://twitter.com" target="_blank"><i class="ion-social-twitter"></i></a></li>
                    <li  class="nav-icon"><a href="#" target="_blank"><i class="ion-help-buoy"></i></a></li>
                </ul>

            </div>
    </div>

    </div>
    </div>

  )
};