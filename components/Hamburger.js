
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';


import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Hamburger = ({
  size = 50,
  barColor = color.text,
  open = false,
  toggle = () => console.log('used hamburger'),
}) => {

  return (
    <button className={`hamburger ${ open ? 'open' : ''}`} onClick={() => toggle()}>

      <span className='top'/>
      <span className='mid'/>
      <span className='bot'/>


      <style jsx>{`

        .hamburger {
          position: relative;
          display: block;
          height: ${size}px;
          width: ${size}px;
          border: none;
          background: none;
        }

        span {
          position: absolute;
          display: block;
          height: 2px;
          width: 80%;
          top: calc(50% - 2px);
          left: 10%;
          background-color: ${barColor};
        }
        .top, .bot {
          transform-origin: center;
          transition: transform ${dur.fast}s ease;
        }
        .top { transform: translateY(-400%) }
        .bot { transform: translateY(400%) }
        .mid { transition: opacity ${dur.fast}s ease }

        .open .top { transform: rotate(-45deg) scaleX(1.2) }
        .open .bot { transform: rotate(45deg) scaleX(1.2) }
        .open .mid { opacity: 0 }
      `}</style>
      
    </button>
  )
}

export default Hamburger