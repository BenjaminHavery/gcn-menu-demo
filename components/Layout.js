
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { FaSearch } from 'react-icons/fa';

import GlobalStyles from '../styles/Global'
import Header from './Header'
import Nav from './Nav'

import theme from '../styles/theme'
const { site, color, dim: { air }, media, dur } = theme;

const Layout = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false),
        router = useRouter(),
        navState = { open: navOpen, toggle: () => setNavOpen(!navOpen) };

  useEffect(() => setNavOpen(false), [router.asPath])


  return (
    <div className={`layout ${ navState.open ? 'nav-open' : ''}`}>
      
      <Head>
        <title>{ site.title }</title>
      </Head>

      <Header {...{ navState }}/>

      <Nav {...{ router }}/>

      <main className='main hide-scrollbar'>

        <div className='search'>
          <span className='term'>Search for videos</span>
          <span className='icon'><FaSearch/></span>
        </div>
        
        { children }

        <div className='footer'>
          FOOTER
        </div>
      </main>
      

      
      <GlobalStyles />

      <style jsx>{`
        .layout {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr;
          height: 100vh;
        }

        .layout > :global(.header) {
          grid-column: 1;
          grid-row: 1;
        }

  
        .layout > :global(.nav) {
          grid-column: 1;
          grid-row: 2;
        }
        
        .main {
          display: flex;
          overflow: hidden auto;
          grid-column: 1;
          grid-row: 3;
          flex-flow: column nowrap;
          align-items: stretch;
          justify-content: flex-start;
          padding: ${air/2}px;
        }

        .search {
          display: flex;
          align-items: stretch;
          margin: 0 0 ${air/2}px;
          border: 2px solid ${color.grayL1};
          border-radius: 4px;
          background-color: ${color.white};
        }
        .search .term, .search .icon { padding: 8px 12px }
        .search .term {
          flex: 1 1 auto;
          color: gray;
        }
        .search .icon {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: -2px;
          border-radius: 0 4px 4px 0;
          background: ${color.red};
        }

        .footer {
          margin-top: auto;
        }


        @media ${media.down.md} {
          
          .layout > :global(.nav) {
            position: absolute;
            overflow: hidden auto;
            z-index: 100;
            height: 100%;
            width: 100%;
            transform: translateX(-100%);
            transition: transform ${dur.fast}s ease;
          }
          .layout.nav-open > :global(.nav) { transform: none }

        }
      `}</style>
      
    </div>
  )
}

export default Layout