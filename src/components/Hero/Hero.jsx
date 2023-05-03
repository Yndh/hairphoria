import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
      <div className="hero__container">
        <div className="hero">
          <div className="left__container">
            <h1>Piękne włosy zaczynają się tutaj</h1>
            <span>
              Odkryj nowy wymiar fryzjerstwa dla kobiet w naszym salonie -
              profesjonalizm, pasja i przyjazna atmosfera
            </span>
          </div>
          <div className="right__container">
            <svg
              viewBox="0 0 522 499"
              xmlns="http://www.w3.org/2000/svg"
              fill="#EB6848"
              fill-opacity="0.6"
              className='heroPhoto'
            >
              <defs>
                <pattern
                  id="imagePattern"
                  patternUnits="userSpaceOnUse"
                  width="522"
                  height="499"
                >
                  <image href={hero} width="522" height="499" />
                </pattern>
              </defs>
              <path
                d="M420.357 32.1724C465.103 57.2384 500.615 97.279 514.465 141.552C528.315 185.499 520.857 234.003 509.848 279.903C498.839 325.478 484.635 368.774 457.645 407.187C430.656 445.599 390.882 479.78 344.006 492.476C297.13 505.498 243.506 497.685 196.63 479.78C149.754 462.202 109.27 434.531 89.3834 398.723C69.1414 363.24 69.1414 319.618 49.9648 271.765C30.7882 223.586 -7.565 171.501 1.31306 132.762C10.1911 94.3492 66.3004 69.2832 118.503 47.4725C170.351 25.3362 218.648 6.45529 269.785 1.89782C320.923 -2.65964 375.257 7.10634 420.357 32.1724Z"
                fill="url(#imagePattern)"
              />
            </svg>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottomWave"
        >
          <path
            d="M1440 191.701L1400 165.047C1360 138.792 1280 84.8848 1200 74.6025C1120 63.9209 1040 95.8658 960 95.8658C880 95.8658 800 63.9209 720 74.6025C640 84.8848 560 138.792 480 138.492C400 138.792 320 84.8848 240 58.63C160 31.976 80 31.976 40 31.976H0V0.0310669H40C80 0.0310669 160 0.0310669 240 0.0310669C320 0.0310669 400 0.0310669 480 0.0310669C560 0.0310669 640 0.0310669 720 0.0310669C800 0.0310669 880 0.0310669 960 0.0310669C1040 0.0310669 1120 0.0310669 1200 0.0310669C1280 0.0310669 1360 0.0310669 1400 0.0310669H1440V191.701Z"
            fill="#F5B3A3"
          />
        </svg>
      </div>
    );
}
export default Hero;