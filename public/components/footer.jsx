// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
// import React from "https://dev.jspm.io/react@16.13.1";
import React from 'react'
import '../css/colors/blue.css'
import "../css/theme.classNames"
// import { classNames } from 'https://dev.jspm.io/classnames';

export default Footer = (props) => {

  return (
    <footer id="footer" class="footer style-1 dark">
        <ul>
            <li><a href="https://www.twitter.com/" target="_blank" class="color"><i class="ion-social-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" class="color"><i class="ion-social-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" class="color"><i class="ion-social-linkedin"></i></a></li>
            <li><a href="https://www.pinterest.com/" target="_blank" class="color"><i class="ion-social-pinterest"></i></a></li>
            <li><a href="https://plus.google.com/" target="_blank" class="color"><i class="ion-social-googleplus"></i></a></li>
        </ul>
        <a href="#" target="_blank"><strong>© McLellen 2022</strong></a>
        <p>Made with love for great people.</p>
        <span>
          <a class='scroll-top'>
            <i class='ion-chevron-up'></i>
          </a>
        </span>
    </footer>
  )
}