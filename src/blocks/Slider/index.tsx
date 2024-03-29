import * as React from 'react'
import { SliderProvider, SliderNav, SliderTrack, Slide } from '@faceless-ui/slider'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Gutter } from '@components/Gutter'
import { PixelBackground } from '@components/PixelBackground'
import { Page } from '@root/payload-types'
import { RichText } from '@components/RichText'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { ImageCard } from './ImageCard'
import { QuoteCard } from './QuoteCard'
import { ImageTextCard } from './ImageTextCard'
import { ImageCompareCard } from './ImageCompareCard'
import { useComputedCSSValues } from '../../providers/ComputedCSSValues'

import classes from './index.module.scss'

const cardTypes = {
  imageSlider: ImageCard,
  quoteSlider: QuoteCard,
  imageTextSlider: ImageTextCard,
  imageCompareSlider: ImageCompareCard,
}

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>

export const SliderBlock: React.FC<Props> = ({ sliderFields }) => {
  const { sliderType, useLeadingHeader, leadingHeader } = sliderFields

  // const slides = sliderType === 'imageSlider' ? sliderFields.imageSlides : sliderFields.quoteSlides
  let slides
  switch (sliderType) {
    case 'imageSlider':
      slides = sliderFields.imageSlides
      break
    case 'imageTextSlider':
      slides = sliderFields.imageTextSlides
      break
    case 'imageCompareSlider':
      slides = sliderFields.imageCompareSlides
      break
    default:
      slides = sliderFields.quoteSlides
      break
  }

  if (!slides || slides.length === 0) return null

  const CardToRender = cardTypes[sliderType]
  const withPixelBackground = sliderType === 'quoteSlider'

  return (
    <div
      className={[classes.slider, withPixelBackground && classes.withPixelBackground]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter>
        {useLeadingHeader && <RichText content={leadingHeader} className={classes.leadingHeader} />}
        <SliderNav
          className={classes.sliderNav}
          prevButtonProps={{
            className: [classes.navButton, classes.prevButton].filter(Boolean).join(' '),
            children: <ArrowIcon rotation={225} />,
          }}
          nextButtonProps={{
            className: classes.navButton,
            children: <ArrowIcon rotation={45} />,
          }}
        />
      </Gutter>

      <div className={classes.trackWrap}>
        <SliderTrack className={classes.sliderTrack}>
          {slides.map((slide, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className={[classes.slide, classes[`slideType--${sliderType}`]]
                  .filter(Boolean)
                  .join(' ')}
              >
                <CardToRender {...slide} />
              </Slide>
            )
          })}
        </SliderTrack>
        <div className={classes.progressBarBackground} />
      </div>

      {withPixelBackground && (
        <Gutter className={classes.pixelContainer}>
          <Grid>
            <Cell start={4} cols={9} className={classes.pixelCell}>
              <PixelBackground />
            </Cell>
          </Grid>
        </Gutter>
      )}
    </div>
  )
}

export const Slider: React.FC<Props> = props => {
  const { gutterH } = useComputedCSSValues()

  return (
    <SliderProvider slidesToShow={1.5} scrollOffset={gutterH}>
      <SliderBlock {...props} />
    </SliderProvider>
  )
}
