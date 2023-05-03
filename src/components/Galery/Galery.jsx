import './Galery.css'
import galery1 from '../../assets/galery1.png'
import galery2 from '../../assets/galery2.png'
import galery3 from '../../assets/galery3.png'
import galery4 from '../../assets/galery4.png'
import galery5 from '../../assets/galery5.png'
import galery6 from '../../assets/galery6.png'

const Galery = () => {
    return (
      <div className="galery__container" id='galery'>
        <svg
          viewBox="0 0 1440 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave upperWave"
        >
          <path
            d="M0 0.165527L48 16.138C96 32.1104 192 64.0554 288 64.0554C384 64.0554 480 32.1104 576 26.8196C672 21.1294 768 43.0915 864 48.0829C960 53.0743 1056 43.0915 1152 53.3738C1248 64.0554 1344 96.0003 1392 111.973L1440 127.945V255.725H1392C1344 255.725 1248 255.725 1152 255.725C1056 255.725 960 255.725 864 255.725C768 255.725 672 255.725 576 255.725C480 255.725 384 255.725 288 255.725C192 255.725 96 255.725 48 255.725H0V0.165527Z"
            fill="#F5B3A3"
          />
        </svg>
        <div className="galery">
          <p>Galeria</p>
          <h2>Zobacz nasze niepowtarzalne fryzury</h2>
          <span>
            Zapraszamy do świata niebywałych fryzur, gdzie Twoje włosy nabiorą
            niepowtarzalnego charakteru
          </span>
          <div className="galeryPhotos">
            <div className="galeryCol">
              <img src={galery1} />
              <img src={galery3} />
              <img src={galery5} />
            </div>
            <div className="galeryCol">
              <img src={galery2} />
              <img src={galery4} />
              <img src={galery6} />
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave bottomWave"
        >
          <path
            d="M1440 160.108L1392 144.135C1344 128.163 1248 96.2181 1152 90.9272C1056 85.237 960 107.199 864 106.9C768 107.199 672 85.237 576 101.509C480 117.182 384 171.089 288 186.762C192 203.034 96 181.072 48 170.789L0 160.108V0.383316H48C96 0.383316 192 0.383316 288 0.383316C384 0.383316 480 0.383316 576 0.383316C672 0.383316 768 0.383316 864 0.383316C960 0.383316 1056 0.383316 1152 0.383316C1248 0.383316 1344 0.383316 1392 0.383316H1440V160.108Z"
            fill="#F5B3A3"
          />
        </svg>
      </div>
    );
}
export default Galery