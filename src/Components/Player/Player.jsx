import React from 'react'

import ReactPlayer from 'react-player'
import { FaPlay } from "react-icons/fa6";
// 
// 

import './player.css'

const Player = () => {
  return (
    <section className="players">
      <div className="container player-container">
        <div className="videos">
          <div className="player">
            <ReactPlayer className="video"
              url="https://youtu.be/jr1kQsorFOs?si=1ADgrsd2FE1dGfYD"
              controls={true}
              width="32rem"
              height="30rem"
            />
          </div>
          <p className="videotext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci?
          </p>
        </div>
        <div className="videos">
          <div className="player">
          <ReactPlayer className="video"
            url="https://youtu.be/PKpWWZQch50?si=CSLUvZ1lTt-EFWv7"
            controls={true}
            width="32rem"
            height="30rem"
          />
          </div>
          <p className="videotext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci?
          </p>
        </div>
       
      </div>
    </section>
  )
}

export default Player