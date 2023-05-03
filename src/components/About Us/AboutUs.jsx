import './AboutUs.css'

import barber1 from '../../assets/barber1.png'
import barber2 from '../../assets/barber2.png'
import owner from '../../assets/owner.png'

const AboutUs = () => {
    return (
      <div className="about" id="about">
        <p>o nas</p>
        <h2>Nasza pasja, Twoje piękno</h2>
        <span>
          Szukasz fryzjera, któremu możesz zaufać? Nasza doświadczona ekipa
          zadba o Twoje włosy i zapewni relaksującą atmosferę w naszym salonie.
        </span>

        <div className="cards__container">
          <div className="card">
            <img src={owner} alt="Barber Photo" />
            <p className="name">Katarzyna Nowak</p>
            <p className="desc">Włascicielka</p>
          </div>

          <div className="card">
            <img src={barber1} alt="Barber Photo" />
            <p className="name">Krzysztof Majewski</p>
            <p className="desc">Fryzjer</p>
          </div>

          <div className="card">
            <img src={barber2} alt="Barber Photo" />
            <p className="name">Joanna Woźniak</p>
            <p className="desc">Fryzjerka</p>
          </div>


        </div>
      </div>
    );
}
export default AboutUs;