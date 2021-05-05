
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';

import Hamburger from './Hamburger'

import theme from '../styles/theme'
const { site, color, media } = theme;

const Header = ({ navState }) => {

  const faves = ['Events', 'Club', 'Shop', 'YouTube'],
        socials = [<FaFacebookF/>, <FaTwitter/>, <FaInstagram/>, <FaGooglePlusG/>];

  return (
    <div className='header'>

      <div className='top'>
        <span className='logo svg-wrapper'>
          <img className='small' src="/logo-small.svg" alt={`${ site.title } logo (small)`} />
          <img className='large' src="/logo-large.svg" alt={`${ site.title } logo`} />
        </span>
        <ul className='faves'>
          {faves.map((fave, key) => <li className='fave' {...{ key }}>{ fave }</li>)}
        </ul>
      </div>

      <div className='bottom'>
        <Hamburger size={30} barColor={color.white} {...{ ...navState }}/>
        <ul className='socials'>
          {socials.map((social, key) => <li className='social' {...{ key }}>{ social }</li>)}
        </ul>
      </div>


      <style jsx>{`

        .top, .bottom {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          height: 40px;
          padding: 5px;
          color: ${color.white};
        }
        .top {
          background: ${color.red};
        }
        .bottom {
          background: ${color.black};
        }

        .logo {
          display: block;
          width: 80px;
        }
        .logo image {
          width: 100%;
        }

        .faves, .socials {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-end;
        }
        .fave:before, .social:before {
          display: none;
        }

        .fave {
          margin: 0 0 0 4px;
          padding: 4px 6px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          color: ${color.black};
          background-color: white;
        }
        .social {
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 0 5px;
          padding: 0;
        }

  


        @media ${media.down.sm} {
          .logo .large { display: none }
        }

        @media ${media.up.md} {
          .logo .small { display: none }
        }

        @media ${media.up.lg} {
          .bottom {
            display: none;
          }
        }
      `}</style>
      
    </div>
  )
}

export default Header