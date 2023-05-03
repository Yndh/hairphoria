import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
      >
        <path
          d="M0 96L48 101.3C96 107 192 117 288 133.3C384 149 480 171 576 186.7C672 203 768 213 864 202.7C960 192 1056 160 1152 144C1248 128 1344 128 1392 128H1440V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V96Z"
          fill="#353535"
        />
      </svg>

      <div className="footer">
        <div className="footerTab">
          <div className="logo">
            <p>Hairphoria</p>
            <span>miejsce, gdzie Twoje włosy stają się sztuką</span>
          </div>

          <div className="footerCol">
            <p>Kontakt</p>
            <ul>
              <li>
                <i class="fa-solid fa-phone"></i>
                +48 754 417 785
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                kontakt@hairphoria.pl
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                ul. Jana Pawła 2
              </li>
            </ul>
          </div>

          <div className="footerCol">
            <p>Zakładki</p>
            <ul>
              <li>
                <a href="#about">O Nas</a>
              </li>
              <li>
                <a href="#galery">Galeria</a>
              </li>
              <li>
                <a href="#local">Lokalizacja</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          <div className="footerCol">
            <p>Obserwuj</p>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i class="fa-brands fa-facebook"></i>
                  hairphoria.salon
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                  @hairphoria
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
