
import { useState } from 'react'
import { blocking } from './util'

import Link from 'next/link'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { mainNavItems } from '../data'

import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const Video = ({ video, className = '' }) => {

  return (
    <div className={`video ${className}`}>
      <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${video._id}?autoplay=1&mute=1`}>
      </iframe>

      <style jsx>{`
        .video {
          position: relative;
          height: 0;
          width: 100%;
          margin: 0 0 ${air/2}px;
          padding-bottom: 56.25%;
        }
        iframe {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0; left: 0;
          margin: 0;
          padding: 0;
          border: none;
        }
      `}</style>
    </div>
  )
}

export default Video
