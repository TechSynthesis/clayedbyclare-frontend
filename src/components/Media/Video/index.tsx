'use client'

import React, { useEffect, useRef } from 'react'
import classes from './index.module.scss'
import { Props } from '../types'

export const Video: React.FC<Props> = props => {
  const { videoClassName, resource, onClick } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  // A function that toggles the mute state and updates the video element
  // const toggleMute = () => {
  //   setMuted(!muted)
  //   videoRef.current.muted = !muted
  // }

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource !== 'string') {
    return (
      <div style={{ position: 'relative' }}>
        <video
          playsInline
          autoPlay
          muted={true}
          loop
          controls={false}
          className={[classes.video, videoClassName].filter(Boolean).join(' ')}
          onClick={onClick}
          ref={videoRef}
        >
          <source src={`${process.env.NEXT_PUBLIC_CMS_URL}/media/${resource.filename}`} />
        </video>
        {/* <button className={classes.muteButton} onClick={toggleMute}>
          {muted ? <SpeakerOffIcon /> : <SpeakerLoudIcon />}
        </button> */}
      </div>
    )
  }

  return null
}
