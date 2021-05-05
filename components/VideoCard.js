
import { useState } from 'react'
import { blocking } from './util'

import Link from 'next/link'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { mainNavItems } from '../data'

import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const VideoCard = ({ video }) => {

  return (
    <Link href={`/video/${ video.urlTitle }`}>
      <a className='card'>
        <img className='thumb' src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}/>
        <span className='title'>{ video.title }</span>

        <style jsx>{`
          .card {
            display: block;
            padding: ${air/4}px;
            background: ${color.grayL1};
            text-decoration: none;
          }
          .thumb {
            display: block;
            width: 100%;
            margin: 0 0 ${air/6}px;
          }
          .title {
            color: ${color.text};
          }
        `}</style>
      </a>
    </Link>
  )
}

export default VideoCard


export const VcList = ({ videos = [] }) => {
  return (
    <ul className='list'>
      { videos.map(video => 
        <li className='item' key={video._id}>
          <VideoCard {...{ video }}/>
        </li>
      )}

      <style jsx>{`

        .list { }

        .item { padding: 0 }
        .item:before { display: none }

      `}</style>
    </ul>
  )
}
