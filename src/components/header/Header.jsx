import './header.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Header(){
    return(
        <div className="header">
            <div className='headerTitles'>
    
                <span className="headerTitleLg"> FANATISMO </span>
            </div>

        <Carousel>

       <Carousel.Item interval={1000}>
        <img className='headerImg'
        src='https://wallpapers-hub.art/wallpaper-images/356283.jpg'
        text="First slide" />
        <Carousel.Caption>
          <h3>Taylor Swift</h3>
          <p>Taylor Alison Swift is an American singer-songwriter. Recognized for her songwriting, musical versatility, artistic reinventions, and influence on the music industry, she is a prominent cultural figure of the 21st century</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img className='headerImg'
        src='https://wallpapercave.com/wp/wp4745991.jpg'
        text="SEVENTEEN" />
        <Carousel.Caption>
          <h3>SEVENTEEN</h3>
          <p>Seventeen is a South Korean boy band formed by Pledis Entertainment. The group consists of thirteen members: S.Coups, Jeonghan, Joshua, Jun, Hoshi, Wonwoo, Woozi, DK, Mingyu, The8, Seungkwan, Vernon, and Dino.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='headerImg'
        src='https://www.xtrafondos.com/en/descargar.php?id=7399&resolucion=3840x2160'
        text="Third slide" />
        <Carousel.Caption>
          <h3>Selena Gomez</h3>
          <p>
          Selena Marie Gomez is an American singer, actress, businesswoman and producer. Gomez has won numerous accolades, including an American Music Award, two MTV Video Music Awards, broke 16 Guinness World Records, and was nominated for two Grammy Awards, a Golden Globe Award, and four Emmy Awards
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    )
}
