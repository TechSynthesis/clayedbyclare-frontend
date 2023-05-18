import { Media } from '@components/Media'
import { Slide, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import React from 'react'
import classes from './index.module.scss'

export const CategorySlider = ({ featuredImage }: any) => {
  const hasImages = featuredImage != null
  const slides = hasImages ? [featuredImage] : []

  return (
    <>
      <SliderProvider
        autoPlay={true}
        slidesToShow={1}
        scrollSnap={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
      >
        <div className={classes.trackWrap}>
          <SliderTrack className={classes.sliderTrack}>
            {hasImages &&
              slides.map((image, index) => {
                if (typeof image === 'string') return null
                return (
                  <Slide
                    key={index}
                    index={index}
                    className={[classes.slide, classes.imageSlider, classes.clickable]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Media resource={image} imgClassName={classes.imageSliderImage} />
                  </Slide>
                )
              })}
          </SliderTrack>
        </div>
      </SliderProvider>
    </>
  )
}
