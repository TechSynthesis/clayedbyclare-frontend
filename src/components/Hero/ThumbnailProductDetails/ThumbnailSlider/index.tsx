import { Media } from '@components/Media'
import { Slide, SliderNav, SliderProvider, SliderTrack } from '@faceless-ui/slider'
import { ArrowIcon } from '@root/icons/ArrowIcon'
// import { Media as MediaType, Product } from '@root/payload-types'
import React from 'react'
import classes from './index.module.scss'

// type Props = {
//   featuredImage: string | MediaType
//   thumbnailSlides: {
//     image: string | MediaType
//     id?: string
//   }[]
// }

// type ProductProps = Pick<Product, 'featuredImage'>

// type ExtractedProps = ProductProps & {
//   thumbnailSlides: Props['thumbnailSlides']
// }

// type FinalProps = Extract<ExtractedProps, { thumbnailSlides: any[] }>

// export const ThumbnailSlider: React.FC<FinalProps> = ({ thumbnailSlides, featuredImage }) => {
export const ThumbnailSlider = ({ thumbnailSlides, featuredImage }: any) => {
  // const hasImages = Array.isArray(thumbnailSlides) && thumbnailSlides.length > 0
  const hasImages =
    (Array.isArray(thumbnailSlides) && thumbnailSlides.length > 0) || featuredImage != null
  const slides = hasImages ? [featuredImage, ...thumbnailSlides.map(({ image }) => image)] : []
  const [sliderIndex, setSliderIndex] = React.useState<number>(0)

  return (
    <>
      <SliderProvider slidesToShow={1} currentSlideIndex={sliderIndex} scrollSnap={true}>
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
        </div>
      </SliderProvider>
      <div>
        <SliderProvider slidesToShow={3}>
          <SliderTrack className={classes.thumbnailTrack}>
            {hasImages &&
              slides.map((image, index) => {
                if (typeof image === 'string') return null
                return (
                  <Slide
                    key={index}
                    index={index}
                    className={[
                      classes.thumbnail,
                      classes.clickable,
                      sliderIndex === index ? classes.thumbnailActive : ``,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => {
                      setSliderIndex(index)
                    }}
                  >
                    <div className={classes.imageContainer}>
                      <Media resource={image} imgClassName={classes.imageInThumbnail} />
                    </div>
                  </Slide>
                )
              })}
          </SliderTrack>{' '}
        </SliderProvider>
      </div>
    </>
  )
}
