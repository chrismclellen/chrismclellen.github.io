export function Footer() {
  return (
    <footer id="footer" className="footer style-1 dark">
        <ul>
            <li><a href="https://www.twitter.com/" target="_blank" className="color"><i className="ion-social-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" className="color"><i className="ion-social-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" className="color"><i className="ion-social-linkedin"></i></a></li>
            <li><a href="https://www.pinterest.com/" target="_blank" className="color"><i className="ion-social-pinterest"></i></a></li>
            <li><a href="https://plus.google.com/" target="_blank" className="color"><i className="ion-social-googleplus"></i></a></li>
        </ul>
        <a href="#" target="_blank"><strong>© McLellen 2022</strong></a>
        <p>Made with love for great people.</p>
        <span>
          <a className="scroll-top">
            <i className="ion-chevron-up"></i>
          </a>
        </span>
    </footer>
  );
};