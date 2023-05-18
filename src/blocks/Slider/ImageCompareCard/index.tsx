import * as React from 'react'

import { Media } from '@components/Media'
import { Page } from '@root/payload-types'
import { ReactCompareSlider } from 'react-compare-slider'
// import classes from './index.module.scss'

type Props = Extract<
  Page['layout'][0],
  { blockType: 'slider' }
>['sliderFields']['imageCompareSlides'][0]

export const ImageCompareCard: React.FC<Props> = ({
  sliderOrientation,
  beforeImage,
  afterImage,
}) => {
  if (typeof beforeImage === 'string') return null
  // if (typeof afterImage === 'string') return nul

  return (
    <>
      {typeof afterImage === 'undefined' || afterImage == null ? (
        <Media resource={beforeImage} />
      ) : (
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={<Media resource={beforeImage} />}
          itemTwo={typeof afterImage === 'object' && <Media resource={afterImage} />}
          position={50}
          portrait={sliderOrientation === 'portrait'}
          onlyHandleDraggable={true}
          // style={{
          //   height: '100vh',
          //   width: '100%',
          // }}
        />
      )}
    </>
  )
}
