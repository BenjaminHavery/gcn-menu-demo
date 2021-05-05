
import { useState } from 'react'
import { blocking } from './util'

import Link from 'next/link'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { mainNavItems } from '../data'

import theme from '../styles/theme'
const { color, dim: { air }, media } = theme;


const Nav = ({ router }) => {

  return (
    <nav className='nav hide-scrollbar'>
      <List pages={mainNavItems} {...{ router }}/>

      <style jsx>{`
        .nav {
          color: ${color.white};
          background: ${color.black};
        }
      `}</style>
    </nav>
  )
}

export default Nav


const List = ({ pages, router, level = 1 }) => {
  return (
    <ul className={`list lvl--${ level }`}>

      { pages.map((page, key) => <Item {...{ key, page, router, level }} />)}

      <style jsx>{`
        
        @media ${media.down.md} {
          .list:not(.lvl--1) {
            margin-left: ${air/2}px;
            margin-top: -8px;
            padding-top: 8px;
            border-left: 1px solid ${color.white};
          }
        }
        @media ${media.up.lg} {
          .list { display: none }
          .list.lvl--1 {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
            justify-content: flex-start;
          }
        }
      `}</style>
    </ul>
  )
}


const Item = ({ page, router, level }) => {
  
  const [open, setOpen] = useState(false),
        isCurrent = page.href === router.asPath,
        hasChildren = !!page.children && !!page.children.length;

  const toggleOpen = () => { setOpen(!open) }


  return (
    <li className='item'>
      <Link href={ page.href }>
        <a className='link'>
          <span className='text'>{ page.title }</span>
          <span className='current'/>

          { hasChildren &&
            <button
              className='expand'
              onClick={(e) => toggleOpen(blocking(e))} 
            >
              { open ? <FaMinusCircle/> : <FaPlusCircle/> }
            </button>
          }
        </a>
      </Link>

      { hasChildren && <List pages={page.children} level={level + 1} {...{ router }}/> }
      

      <style jsx>{`

        .item {
          margin: 0;
          padding: 0;
          border-top: 1px solid ${color.white};
        }
        .item:before { display: none }

        .link {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          padding: 18px 16px;
          text-decoration: none;
        }

        .text {
          flex: 1 1 auto;
          color: white;
          font-weight: bold;
        }

        .current {
          height: 10px;
          width: 10px;
          flex: 0 0 auto;
          margin-left: ${air/2}px;
          border-radius: 50%;
          background: ${color.white};
        }
        
        .expand {
          height: 20px;
          width: 20px;
          margin-left: ${air/2}px;
          padding: 0;
          border: 0;
          background: none;
          color: ${color.white};
        }
        .expand > :global(svg) {
          height: 100%;
          width: 100%;
        }
        

        @media ${media.up.lg} {
          .item {
            border: none;
          }
          .current, .expand {
            display: none;
          }
        }
      `}</style>

      <style jsx>{` // Dynamic styles
        
        .current { display: ${ isCurrent ? 'block' : 'none' } }

        @media ${media.down.md} {
          .item > :global(.list) { display: ${ open ? 'block' : 'none' } }
        }
      `}</style>
    </li>
  )
}
